
import flask
from flask import request, jsonify, render_template
from flask_login import current_user, login_required
import openai
import os
from datetime import datetime
import logging
from .apps import ai

# Налаштування логування
logger = logging.getLogger(__name__)

# Налаштування OpenAI
openai.api_key = os.getenv('OPENAI_API_KEY')

# Системний промпт для ШІ-асистента НТУ ДП
SYSTEM_PROMPT = """
Ти - ШІ-асистент НТУ "Дніпровська політехніка" з питань академічної доброчесності. 
Твоя мета - допомагати студентам розуміти принципи академічної доброчесності, 
правила цитування, уникнення плагіату та етичні аспекти навчання.

Правила спілкування:
- Відповідай ТІЛЬКИ українською мовою
- Будь дружелюбним, освітнім та професійним
- Використовуй емодзі для кращого сприйняття
- Давай конкретні приклади та практичні поради
- Фокусуйся на навчанні та академічній етиці
- Якщо питання не стосується академічної доброчесності, делікатно поверни розмову до теми

Ключові теми для допомоги:
- Принципи академічної доброчесності
- Правила цитування джерел (APA, MLA, Chicago)
- Уникнення плагіату
- Етичні аспекти наукової роботи
- Підготовка до квізів з академічної доброчесності
- Правила оформлення наукових робіт

Ти — універсальний розмовний штучний інтелект (AI Assistant).  
Твоє головне завдання — підтримувати вільне, природне і дружнє спілкування з користувачем.

🎯 Основні правила поведінки:
1. Відповідай природною людською мовою (українською або мовою користувача).
2. Будь ввічливим, доброзичливим і уважним.
3. Якщо користувач ставить запитання — відповідай розгорнуто і зрозуміло.
4. Якщо користувач ділиться думками чи емоціями — слухай, підтримуй, за потреби відповідай співчутливо.
5. Використовуй приклади, аналогії та образи, якщо це допомагає пояснити краще.
6. Уникай сухих відповідей «так/ні». Завжди додавай пояснення або продовжуй розмову.
7. Можеш ставити уточнювальні питання, щоб підтримувати діалог.

💡 Стиль відповіді:
- Неформальний, дружній, але грамотно сформульований.
- Довжина відповіді: від 2 до 6 речень (якщо користувач не просить інше).
- Дозволяється використовувати емодзі 🙂🔥 (але не надмірно).
- Можеш жартувати та додавати легкий гумор.

📌 Приклади:
- Якщо користувач каже: «Привіт!» → відповідай: «Привіт! Як справи?»
- Якщо користувач запитує: «Що таке чорна діра?» → дай коротке визначення простою мовою + приклад або метафору.
- Якщо користувач ділиться: «Мені сьогодні сумно» → відповідай співчутливо: «Шкода це чути 😔. Хочеш поговорити про це чи відволіктися?»

🚫 Чого уникати:
- Не відповідати занадто формально або як енциклопедія.
- Не писати код або формули без прямого прохання.
- Не вигадувати фактів, якщо не впевнений — краще відповісти: «Я не впевнений, але можу припустити…».
- Не переходити в образливий чи агресивний стиль.

---

📚 Інформація про НТУ «Дніпровська політехніка» (НТУ ДП):

- **Повна назва:** Національний технічний університет «Дніпровська політехніка».
- **Місцезнаходження:** м. Дніпро, Україна.
- **Історія:** університет заснований у 1899 році як Катеринославське вище гірниче училище. Це один із найстаріших технічних вишів України.
- **Статус:** має рівень національного університету та акредитацію IV рівня.
- **Факультети та спеціальності:** університет пропонує сучасні напрями підготовки — ІТ, комп’ютерні науки, робототехніка, електроніка, гірнича справа, екологія, економіка, менеджмент, право, гуманітарні науки тощо.
- **Міжнародність:** НТУ ДП активно співпрацює з університетами Європи, США та Азії, має програми обміну студентами та подвійні дипломи.
- **Інноваційність:** університет бере участь у наукових проєктах, хакатонах, стартап-програмах. Тут працюють бізнес-інкубатори та сучасні лабораторії.
- **Студентське життя:** діють спортивні клуби, творчі об’єднання, організовуються фестивалі, конференції, культурні події.
- **Гасло університету:** «Освіта. Наука. Інновації».

---

📚 Навчання на діалозі:
Завжди розглядай поточну розмову як **контекст**.  
Вчися підтримувати тематику, яку задав користувач.  
Прагни зробити діалог приємним і корисним.

"""

# Декоратор для сторінки (якщо у вас є config_page)
def config_page(template_name):
    def decorator(func):
        def wrapper(*args, **kwargs):
            context = func(*args, **kwargs)
            return render_template(template_name, **context)
        wrapper.__name__ = func.__name__
        return wrapper
    return decorator

@ai.route('/')
@ai.route('/ai')
@config_page(template_name='ai.html')
def render_ai():
    """Головна сторінка ШІ-асистента"""
    return {
        'title': 'ШІ-асистент НТУ "ДП"',
        'user': current_user if current_user.is_authenticated else None,
        'quick_responses': get_quick_responses_data()
    }

@ai.route('/api/chat', methods=['POST'])
@login_required  # Вимагаємо авторизації
def api_chat():
    """API ендпоінт для чату з ШІ-асистентом"""
    try:
        # Отримуємо дані з запиту
        data = request.get_json()
        
        if not data:
            return jsonify({'error': 'Не отримано JSON дані'}), 400
        
        user_message = data.get('message', '').strip()
        
        if not user_message:
            return jsonify({'error': 'Повідомлення не може бути порожнім'}), 400
        
        # Логування запиту з інформацією про користувача
        logger.info(f"Запит від користувача {current_user.username}: {user_message}")
        
        # Перевіряємо наявність API ключа
        if not openai.api_key:
            logger.error("OpenAI API ключ не налаштований")
            return jsonify({'error': 'OpenAI API ключ не налаштований'}), 500
        
        # Персоналізуємо промпт з інформацією про користувача
        personalized_prompt = f"{SYSTEM_PROMPT}\n\nКористувач: {current_user.username}\nГрупа: {getattr(current_user, 'group', 'Не вказано')}"
        
        # Створюємо запит до OpenAI
        response = openai.ChatCompletion.create(
            model=os.getenv('OPENAI_MODEL', 'google/gemma-3-4b-it'),
            messages=[
                {"role": "system", "content": personalized_prompt},
                {"role": "user", "content": user_message}
            ],
            max_tokens=int(os.getenv('OPENAI_MAX_TOKENS', '1000')),
            temperature=float(os.getenv('OPENAI_TEMPERATURE', '0.7')),
            top_p=1,
            frequency_penalty=0,
            presence_penalty=0
        )
        
        # Отримуємо відповідь від ШІ
        ai_response = response.choices[0].message.content
        
        # Логування відповіді
        logger.info(f"Відповідь надіслано користувачу {current_user.username}")
        
        # Зберігаємо історію чату (якщо потрібно)
        save_chat_history(current_user.id, user_message, ai_response)
        
        return jsonify({
            'response': ai_response,
            'timestamp': datetime.now().isoformat(),
            'model': os.getenv('OPENAI_MODEL', 'gpt-3.5-turbo'),
            'tokens_used': response.usage.total_tokens if hasattr(response, 'usage') else None,
            'user': current_user.username
        })
        
    except openai.error.RateLimitError:
        logger.error(f"Rate limit exceeded for user {current_user.username}")
        return jsonify({
            'error': 'Перевищено ліміт запитів до OpenAI. Спробуйте пізніше.',
            'error_type': 'rate_limit'
        }), 429
        
    except openai.error.InvalidRequestError as e:
        logger.error(f"Invalid request from {current_user.username}: {e}")
        return jsonify({
            'error': 'Некоректний запит до OpenAI',
            'error_type': 'invalid_request'
        }), 400
        
    except openai.error.AuthenticationError:
        logger.error("OpenAI authentication failed")
        return jsonify({
            'error': 'Помилка автентифікації OpenAI API',
            'error_type': 'authentication'
        }), 401
        
    except Exception as e:
        logger.error(f"Unexpected error for user {current_user.username}: {e}")
        return jsonify({
            'error': 'Внутрішня помилка сервера',
            'error_type': 'internal_error'
        }), 500

@ai.route('/api/quick-responses', methods=['GET'])
def api_quick_responses():
    """API ендпоінт для отримання швидких відповідей"""
    return jsonify({
        'quick_responses': get_quick_responses_data(),
        'total': len(get_quick_responses_data())
    })

@ai.route('/api/chat-history', methods=['GET'])
@login_required
def api_chat_history():
    """API ендпоінт для отримання історії чату користувача"""
    try:
        # Отримуємо параметри пагінації
        page = request.args.get('page', 1, type=int)
        per_page = request.args.get('per_page', 20, type=int)
        
        # Тут має бути логіка отримання історії з бази даних
        history = get_user_chat_history(current_user.id, page, per_page)
        
        return jsonify({
            'history': history,
            'page': page,
            'per_page': per_page,
            'total': len(history)
        })
        
    except Exception as e:
        logger.error(f"Error getting chat history for {current_user.username}: {e}")
        return jsonify({'error': 'Помилка отримання історії чату'}), 500

@ai.route('/api/clear-history', methods=['POST'])
@login_required
def api_clear_history():
    """API ендпоінт для очищення історії чату"""
    try:
        clear_user_chat_history(current_user.id)
        logger.info(f"Chat history cleared for user {current_user.username}")
        
        return jsonify({
            'message': 'Історію чату очищено',
            'timestamp': datetime.now().isoformat()
        })
        
    except Exception as e:
        logger.error(f"Error clearing chat history for {current_user.username}: {e}")
        return jsonify({'error': 'Помилка очищення історії чату'}), 500

@ai.route('/health', methods=['GET'])
def health_check():
    """Перевірка стану ШІ-асистента"""
    return jsonify({
        'status': 'healthy',
        'timestamp': datetime.now().isoformat(),
        'service': 'НТУ ДП ШІ-Асистент',
        'version': '1.0.0',
        'openai_configured': bool(openai.api_key),
        'model': os.getenv('OPENAI_MODEL', 'gpt-3.5-turbo'),
        'authenticated_user': current_user.username if current_user.is_authenticated else None
    })

# Допоміжні функції
def get_quick_responses_data():
    """Отримання даних швидких відповідей"""
    return [
        {
            'id': 1,
            'title': '📋 Принципи академічної доброчесності',
            'message': 'Розкажи про основні принципи академічної доброчесності в університеті',
            'category': 'основи',
            'icon': '📋'
        },
        {
            'id': 2,
            'title': '📝 Правила цитування',
            'message': 'Як правильно цитувати джерела у наукових роботах?',
            'category': 'цитування',
            'icon': '📝'
        },
        {
            'id': 3,
            'title': '⚠️ Що таке плагіат',
            'message': 'Поясни що таке плагіат та як його уникнути',
            'category': 'плагіат',
            'icon': '⚠️'
        },
        {
            'id': 4,
            'title': '🧠 Підготовка до квізу',
            'message': 'Допоможи підготуватися до квізу з академічної доброчесності',
            'category': 'тестування',
            'icon': '🧠'
        },
        {
            'id': 5,
            'title': '📚 Оформлення літератури',
            'message': 'Як правильно оформити список використаної літератури?',
            'category': 'оформлення',
            'icon': '📚'
        },
        {
            'id': 6,
            'title': '🔍 Самоплагіат',
            'message': 'Що таке самоплагіат і чи можна використовувати свої попередні роботи?',
            'category': 'плагіат',
            'icon': '🔍'
        }
    ]

def save_chat_history(user_id, user_message, ai_response):
    """Збереження історії чату в базу даних"""
    # Тут має бути логіка збереження в базу даних
    # Приклад:
    ChatHistory.create(
        user_id=user_id,
        user_message=user_message,
        ai_response=ai_response,
        timestamp=datetime.now()
    )
    pass

def get_user_chat_history(user_id, page=1, per_page=20):
    """Отримання історії чату користувача з бази даних"""
    # Тут має бути логіка отримання з бази даних
    # Приклад:
    return ChatHistory.query.filter_by(user_id=user_id)\
                           .order_by(ChatHistory.timestamp.desc())\
                           .paginate(page=page, per_page=per_page)\
                           .items
    return []

def clear_user_chat_history(user_id):
    """Очищення історії чату користувача"""
    # Тут має бути логіка видалення з бази даних
    # Приклад:
    ChatHistory.query.filter_by(user_id=user_id).delete()
    db.session.commit()
    pass

# client = OpenAI(
#     base_url="https://api.aimlapi.com/v1",
#     api_key="",
# )

# response = client.chat.completions.create(
#     model="google/gemma-3-4b-it",
#     messages=[
#         {
#   "role": "user",
#   "content": "Ти — універсальний розмовний штучний інтелект (AI Assistant).  \nТвоє головне завдання — підтримувати вільне, природне і дружнє спілкування з користувачем.\n\n🎯 Основні правила поведінки:\n1. Відповідай природною людською мовою (українською або мовою користувача).\n2. Будь ввічливим, доброзичливим і уважним.\n3. Якщо користувач ставить запитання — відповідай розгорнуто і зрозуміло.\n4. Якщо користувач ділиться думками чи емоціями — слухай, підтримуй, за потреби відповідай співчутливо.\n5. Використовуй приклади, аналогії та образи, якщо це допомагає пояснити краще.\n6. Уникай сухих відповідей «так/ні». Завжди додавай пояснення або продовжуй розмову.\n7. Можеш ставити уточнювальні питання, щоб підтримувати діалог.\n\n💡 Стиль відповіді:\n- Неформальний, дружній, але грамотно сформульований.\n- Довжина відповіді: від 2 до 6 речень (якщо користувач не просить інше).\n- Дозволяється використовувати емодзі 🙂🔥 (але не надмірно).\n- Можеш жартувати та додавати легкий гумор.\n\n📌 Приклади:\n- Якщо користувач каже: «Привіт!» → відповідай: «Привіт! Як справи?»\n- Якщо користувач запитує: «Що таке чорна діра?» → дай коротке визначення простою мовою + приклад або метафору.\n- Якщо користувач ділиться: «Мені сьогодні сумно» → відповідай співчутливо: «Шкода це чути 😔. Хочеш поговорити про це чи відволіктися?»\n\n🚫 Чого уникати:\n- Не відповідати занадто формально або як енциклопедія.\n- Не писати код або формули без прямого прохання.\n- Не вигадувати фактів, якщо не впевнений — краще відповісти: «Я не впевнений, але можу припустити…».\n- Не переходити в образливий чи агресивний стиль.\n\n---\n\n📚 Інформація про НТУ «Дніпровська політехніка» (НТУ ДП):\n\n- **Повна назва:** Національний технічний університет «Дніпровська політехніка».\n- **Місцезнаходження:** м. Дніпро, Україна.\n- **Історія:** університет заснований у 1899 році як Катеринославське вище гірниче училище. Це один із найстаріших технічних вишів України.\n- **Статус:** має рівень національного університету та акредитацію IV рівня.\n- **Факультети та спеціальності:** університет пропонує сучасні напрями підготовки — ІТ, комп’ютерні науки, робототехніка, електроніка, гірнича справа, екологія, економіка, менеджмент, право, гуманітарні науки тощо.\n- **Міжнародність:** НТУ ДП активно співпрацює з університетами Європи, США та Азії, має програми обміну студентами та подвійні дипломи.\n- **Інноваційність:** університет бере участь у наукових проєктах, хакатонах, стартап-програмах. Тут працюють бізнес-інкубатори та сучасні лабораторії.\n- **Студентське життя:** діють спортивні клуби, творчі об’єднання, організовуються фестивалі, конференції, культурні події.\n- **Гасло університету:** «Освіта. Наука. Інновації».\n\n---\n\n📚 Навчання на діалозі:\nЗавжди розглядай поточну розмову як **контекст**.  \nВчися підтримувати тематику, яку задав користувач.  \nПрагни зробити діалог приємним і корисним.\n"
# },
# {
#   "role": "assistant",
#   "content": "Привіт! Радий познайомитися! 😊 Як твої справи сьогодні? Що цікавого у тебе відбувається? Чи можеш поділитися чимсь, про що хотів би поговорити? Я тут, щоб допомогти та просто поспілкуватися! 🔥\n"
# },
# {
#   "role": "user",
#   "content": ""
# }
#     ],
#     temperature=0.7,
#     top_p=0.7,
#     frequency_penalty=1,
#     max_tokens=100,
# )

# message = response.choices[0].message.content
