
function openProfile() {

    const urlAnotherPage = "/home"; // Замість цього URL вставте адресу сторінки, на яку хочете перейти
    document.getElementById('linkbutton').addEventListener('click', function() {
        window.location.href = urlAnotherPage;
    });
}

function Logout() {

    const urlAnotherPage = "/logout"; // Замість цього URL вставте адресу сторінки, на яку хочете перейти
    document.getElementById('linkbutton').addEventListener('click', function() {
        window.location.href = urlAnotherPage;
    });
}

function Autorization() {

    const urlAnotherPage = "/registration"; // Замість цього URL вставте адресу сторінки, на яку хочете перейти
    document.getElementById('linkbutton').addEventListener('click', function() {
        window.location.href = urlAnotherPage;
    });
}

class AIAssistant {
    constructor() {
        this.config = window.AI_CONFIG || {};
        this.chatMessages = document.getElementById('chatMessages');
        this.chatInput = document.getElementById('chatInput');
        this.sendButton = document.getElementById('sendButton');
        this.typingIndicator = document.getElementById('typingIndicator');
        this.clearHistoryBtn = document.getElementById('clearHistoryBtn');
        
        this.init();
    }

    init() {
        if (!this.config.isAuthenticated) {
            console.log('Користувач не авторизований');
            return;
        }

        this.setupEventListeners();
        this.loadChatHistory();
        
        console.log(`ШІ-асистент ініціалізовано для користувача: ${this.config.username}`);
    }

    setupEventListeners() {
        // Автоматичне розширення textarea
        this.chatInput?.addEventListener('input', (e) => {
            e.target.style.height = 'auto';
            e.target.style.height = Math.min(e.target.scrollHeight, 120) + 'px';
        });

        // Відправка на Enter
        this.chatInput?.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.sendMessage();
            }
        });

        // Очищення історії
        this.clearHistoryBtn?.addEventListener('click', () => {
            this.clearChatHistory();
        });

        // Фокус на поле вводу
        this.chatInput?.focus();
    }

    async sendMessage() {
        const message = this.chatInput?.value.trim();
        
        if (!message || !this.config.isAuthenticated) return;

        // Додаємо повідомлення користувача
        this.addMessage(message, true);
        this.chatInput.value = '';
        this.chatInput.style.height = 'auto';

        // Блокуємо інтерфейс
        this.setLoading(true);

        try {
            const response = await fetch(`${this.config.apiBaseUrl}/api/chat`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': this.config.csrfToken
                },
                body: JSON.stringify({ message })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || `Помилка сервера: ${response.status}`);
            }

            const data = await response.json();
            
            this.addMessage(data.response, false);
            
            // Логування використання токенів
            if (data.tokens_used) {
                console.log(`Використано токенів: ${data.tokens_used}`);
            }

        } catch (error) {
            console.error('Помилка:', error);
            this.showError(`Помилка зв'язку з ШІ-асистентом: ${error.message}`);
        } finally {
            this.setLoading(false);
            this.chatInput?.focus();
        }
    }

    sendQuickMessage(message) {
        if (this.chatInput) {
            this.chatInput.value = message;
            this.sendMessage();
        }
    }

    addMessage(content, isUser = false) {
        if (!this.chatMessages) return;

        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${isUser ? 'user' : 'assistant'}`;
        
        const messageContent = document.createElement('div');
        messageContent.className = 'message-content';
        messageContent.innerHTML = content.replace(/\n/g, '<br>');
        
        // Додаємо timestamp
        const timestamp = document.createElement('div');
        timestamp.className = 'message-timestamp';
        timestamp.textContent = new Date().toLocaleTimeString('uk-UA');
        
        messageDiv.appendChild(messageContent);
        messageDiv.appendChild(timestamp);
        this.chatMessages.appendChild(messageDiv);
        
        this.scrollToBottom();
    }

    showError(message) {
        if (!this.chatMessages) return;

        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.innerHTML = `⚠️ ${message}`;
        this.chatMessages.appendChild(errorDiv);
        
        // Автоматичне видалення помилки
        setTimeout(() => {
            if (errorDiv.parentNode) {
                errorDiv.parentNode.removeChild(errorDiv);
            }
        }, 5000);
        
        this.scrollToBottom();
    }

    setLoading(loading) {
        if (this.sendButton) {
            this.sendButton.disabled = loading;
        }
        
        if (this.typingIndicator) {
            this.typingIndicator.classList.toggle('show', loading);
        }
        
        if (loading) {
            this.scrollToBottom();
        }
    }

    scrollToBottom() {
        if (this.chatMessages) {
            this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
        }
    }

    async loadChatHistory() {
        if (!this.config.isAuthenticated) return;

        try {
            const response = await fetch(`${this.config.apiBaseUrl}/api/chat-history`);
            
            if (response.ok) {
                const data = await response.json();
                // Тут можна відобразити історію чату
                console.log('Історія чату завантажена:', data.history.length, 'повідомлень');
            }
        } catch (error) {
            console.error('Помилка завантаження історії:', error);
        }
    }

    async clearChatHistory() {
        if (!this.config.isAuthenticated) return;

        if (!confirm('Ви впевнені, що хочете очистити всю історію чату?')) {
            return;
        }

        try {
            const response = await fetch(`${this.config.apiBaseUrl}/api/clear-history`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': this.config.csrfToken
                }
            });

            if (response.ok) {
                // Очищаємо візуальну історію (залишаємо тільки вітальні повідомлення)
                const messages = this.chatMessages.querySelectorAll('.message:not(.welcome-message)');
                messages.forEach(msg => msg.remove());
                
                this.showSuccessMessage('Історію чату очищено ✅');
            } else {
                throw new Error('Помилка очищення історії');
            }
        } catch (error) {
            console.error('Помилка:', error);
            this.showError('Не вдалося очистити історію чату');
        }
    }

    showSuccessMessage(message) {
        const successDiv = document.createElement('div');
        successDiv.className = 'success-message';
        successDiv.textContent = message;
        this.chatMessages.appendChild(successDiv);
        
        setTimeout(() => {
            if (successDiv.parentNode) {
                successDiv.parentNode.removeChild(successDiv);
            }
        }, 3000);
        
        this.scrollToBottom();
    }
}

// Глобальні функції для сумісності
function sendMessage() {
    if (window.aiAssistant) {
        window.aiAssistant.sendMessage();
    }
}

function sendQuickMessage(message) {
    if (window.aiAssistant) {
        window.aiAssistant.sendQuickMessage(message);
    }
}

function clearChatHistory() {
    if (window.aiAssistant) {
        window.aiAssistant.clearChatHistory();
    }
}

// Ініціалізація при завантаженні сторінки
document.addEventListener('DOMContentLoaded', () => {
    window.aiAssistant = new AIAssistant();
    
    // Анімація появи елементів
    const elements = document.querySelectorAll('.profile-section, .chat-container');
    elements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        setTimeout(() => {
            el.style.transition = 'all 0.6s ease';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 200);
    });
});
