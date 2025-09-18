const quizData = {
    round1: {
        title: "Минуле і сучасність Політехніки",
        icon: "📚",
        questions: [
            // Легкі питання (1-4)
            {
                question: "В якому році було засновано НТУ 'Дніпровська політехніка'?",
                options: ["1899", "1916", "1929", "1934"],
                correct: 2,
                difficulty: "easy",
                explanation: "НТУ 'Дніпровська політехніка' було засновано у 1929 році як Дніпропетровський гірничий інститут."
            },
            {
                question: "Яка офіційна скорочена назва нашого університету?",
                options: ["ДПІ", "НТУ 'ДП'", "ДНУЗТ", "НГУ"],
                correct: 1,
                difficulty: "easy",
                explanation: "Офіційна скорочена назва - НТУ 'ДП' (Національний технічний університет 'Дніпровська політехніка')."
            },
            {
                question: "У якому місті розташований головний корпус НТУ 'ДП'?",
                options: ["Київ", "Харків", "Дніпро", "Запоріжжя"],
                correct: 2,
                difficulty: "easy",
                explanation: "Головний корпус НТУ 'Дніпровська політехніка' розташований у місті Дніпро."
            },
            {
                question: "Скільки приблизно факультетів функціонує в НТУ 'ДП'?",
                options: ["8", "12", "16", "20"],
                correct: 1,
                difficulty: "easy",
                explanation: "В НТУ 'Дніпровська політехніка' функціонує близько 12 факультетів різного профілю."
            },
            // Середні питання (5-8)
            {
                question: "Який статус мав університет до 2016 року?",
                options: ["Інститут", "Університет", "Академія", "Коледж"],
                correct: 2,
                difficulty: "medium",
                explanation: "До 2016 року університет мав статус академії та називався Державна вища навчальна установа 'Національний гірничий університет'."
            },
            {
                question: "Яка основна спеціалізація НТУ 'ДП' історично?",
                options: ["Медицина", "Гірнича справа та металургія", "Педагогіка", "Економіка"],
                correct: 1,
                difficulty: "medium",
                explanation: "Історично університет спеціалізується на гірничій справі, металургії та технічних науках."
            },
            {
                question: "Скільки приблизно студентів навчається в НТУ 'ДП'?",
                options: ["10,000", "25,000", "35,000", "50,000"],
                correct: 2,
                difficulty: "medium",
                explanation: "В НТУ 'Дніпровська політехніка' навчається близько 35,000 студентів."
            },
            {
                question: "У скільки років університет отримав статус національного?",
                options: ["1990", "2000", "2010", "2016"],
                correct: 3,
                difficulty: "medium",
                explanation: "У 2016 році університет отримав статус національного та сучасну назву."
            },
            // Складні питання (9-12)
            {
                question: "Хто є засновником концепції 'політехнічної освіти' в Україні?",
                options: ["Дмитро Менделєєв", "Іван Бардин", "Олександр Терпигорєв", "Микола Белелюбський"],
                correct: 2,
                difficulty: "hard",
                explanation: "Олександр Терпигорєв вважається одним із засновників концепції політехнічної освіти на теренах України."
            },
            {
                question: "Який факультет НТУ 'ДП' є найстарішим?",
                options: ["Гірничий", "Металургійний", "Механічний", "Електротехнічний"],
                correct: 0,
                difficulty: "hard",
                explanation: "Гірничий факультет є найстарішим, оскільки університет почався саме як гірничий інститут."
            },
            {
                question: "Скільки наукових шкіл функціонує в НТУ 'ДП'?",
                options: ["15", "25", "35", "більше 40"],
                correct: 3,
                difficulty: "hard",
                explanation: "В НТУ 'ДП' функціонує понад 40 наукових шкіл у різних галузях знань."
            },
            {
                question: "Яка особливість архітектури головного корпусу НТУ 'ДП'?",
                options: ["Класицизм", "Конструктивізм", "Бароко", "Модерн"],
                correct: 1,
                difficulty: "hard",
                explanation: "Головний корпус НТУ 'ДП' побудований у стилі конструктивізму, характерного для радянської архітектури 1920-30х років."
            }
        ]
    },
    round2: {
        title: "Академічна доброчесність у дії",
        icon: "⚖️",
        questions: [
            // Легкі питання (1-4)
            {
                question: "Що таке 'мозаїчний плагіат'?",
                options: [
                    "Плагіат у мистецтві",
                    "Складання тексту з фрагментів різних джерел",
                    "Плагіат зображень",
                    "Часткове копіювання"
                ],
                correct: 1,
                difficulty: "hard",
                explanation: "Мозаїчний плагіат - це складання тексту з фрагментів різних джерел без належного цитування, створюючи ілюзію оригінальності."
            },
            {
                question: "У якому випадку співавторство може бути порушенням доброчесності?",
                options: [
                    "Коли автори не знають один одного особисто",
                    "Коли один автор не робив внеску у дослідження",
                    "Коли авторів більше трьох",
                    "Співавторство завжди етично"
                ],
                correct: 1,
                difficulty: "hard",
                explanation: "Неетично включати як співавтора особу, яка не зробила значного внеску у дослідження або написання роботи."
            },
            {
                question: "Що означає концепція 'подарункового авторства'?",
                options: [
                    "Дарування авторських прав",
                    "Включення у список авторів без внеску в роботу",
                    "Анонімне авторство",
                    "Колективне авторство"
                ],
                correct: 1,
                difficulty: "hard",
                explanation: "'Подарункове авторство' - неетична практика включення особи у список авторів без її реального внеску в дослідження, часто з міркувань ввічливості або авторитету."
            }
        ]
    },
    round3: {
        title: "Доброчесність у світі мистецтва та кіно",
        icon: "🎭",
        questions: [
            // Легкі питання (1-4)
            {
                question: "Хто з письменників був звинувачений у плагіаті роману 'Код да Вінчі'?",
                options: ["Стівен Кінг", "Ден Браун", "Джоан Роулінг", "Джордж Мартін"],
                correct: 1,
                difficulty: "easy",
                explanation: "Ден Браун був звинувачений у плагіаті при написанні 'Коду да Вінчі', хоча суд встановив відсутність порушення авторських прав."
            },
            {
                question: "Що означає поняття 'ghostwriter' в літературі?",
                options: [
                    "Письменник жахів",
                    "Автор, який пише анонімно для іншої особи",
                    "Редактор текстів",
                    "Критик літератури"
                ],
                correct: 1,
                difficulty: "easy",
                explanation: "Ghostwriter - це автор, який пише тексти, які публікуються під іменем іншої особи, часто відомої персони."
            },
            {
                question: "У якому фільмі піднімається тема академічної нечесності?",
                options: [
                    "Клуб мертвих поетів",
                    "Соціальна мережа",
                    "Гра в імітацію",
                    "Теорія всього"
                ],
                correct: 1,
                difficulty: "easy",
                explanation: "Фільм 'Соціальна мережа' розповідає про створення Facebook і піднімає питання інтелектуальної власності в університетському середовищі."
            },
            {
                question: "Хто з композиторів був звинувачений у запозиченні мелодій?",
                options: ["Бах", "Моцарт", "Бетховен", "Всі з перелічених"],
                correct: 3,
                difficulty: "easy",
                explanation: "Багато великих композиторів, включаючи Баха, Моцарта та Бетховена, використовували існуючі мелодії як основу для своїх творів, що було нормальною практикою того часу."
            },
            // Середні питання (5-8)
            {
                question: "Яке відоме літературне твір було звинувачено в плагіаті 'Властелина Кілець'?",
                options: ["Хроніки Нарнії", "Гаррі Поттер", "Гра престолів", "Еррагон"],
                correct: 3,
                difficulty: "medium",
                explanation: "Роман 'Еррагон' Крістофера Паоліні був критикований за схожість з 'Властелином Кілець' та 'Зоряними війнами'."
            },
            {
                question: "Що таке 'семплінг' у музиці?",
                options: [
                    "Крадіжка музики",
                    "Використання фрагментів існуючих записів",
                    "Імітація стилю",
                    "Кавер-версія"
                ],
                correct: 1,
                difficulty: "medium",
                explanation: "Семплінг - це використання фрагментів існуючих аудіозаписів у нових музичних творах, що може бути законним при отриманні дозволів."
            },
            {
                question: "Яка справа встановила прецедент щодо пародії в авторському праві?",
                options: [
                    "Campbell vs. Acuff-Rose Music",
                    "Sony vs. Betamax",
                    "MGM vs. Grokster",
                    "Harper & Row vs. Nation"
                ],
                correct: 0,
                difficulty: "medium",
                explanation: "Справа Campbell vs. Acuff-Rose Music встановила, що пародія може бути захищена як 'fair use' (добросовісне використання)."
            },
            {
                question: "Хто з художників був звинувачений у плагіаті фотографій?",
                options: ["Пікассо", "Уорхол", "Поллок", "Мане"],
                correct: 1,
                difficulty: "medium",
                explanation: "Енді Уорхол неодноразово використовував чужі фотографії без дозволу для створення своїх робіт, що призводило до судових позовів."
            },
            // Складні питання (9-12)
            {
                question: "Що таке 'криптомнезія' у творчому процесі?",
                options: [
                    "Навмисне копіювання",
                    "Несвідоме привласнення чужих ідей",
                    "Використання псевдонімів",
                    "Колективне авторство"
                ],
                correct: 1,
                difficulty: "hard",
                explanation: "Криптомнезія - це психологічний феномен, коли людина несвідомо відтворює чужі ідеї, думаючи, що вони її власні."
            },
            {
                question: "Яка доктрина дозволяє обмежене використання авторських матеріалів?",
                options: [
                    "Доктрина першого продажу",
                    "Fair use (добросовісне використання)",
                    "Доктрина вичерпання прав",
                    "Принцип мінімального використання"
                ],
                correct: 1,
                difficulty: "hard",
                explanation: "Доктрина 'fair use' дозволяє обмежене використання авторських матеріалів для цілей критики, коментування, навчання або дослідження."
            },
            {
                question: "Хто з режисерів відомий 'запозиченнями' з інших фільмів як художнім прийомом?",
                options: ["Спілберг", "Тарантіно", "Скорсезе", "Копполла"],
                correct: 1,
                difficulty: "hard",
                explanation: "Квентін Тарантіно відомий своїми численними відсиланнями та 'запозиченнями' з різних фільмів, які він використовує як художній прийом та данину жанрам."
            },
            {
                question: "Що означає термін 'палімпсест' у літературознавстві?",
                options: [
                    "Різновид плагіату",
                    "Текст, написаний поверх іншого тексту",
                    "Спосіб цитування",
                    "Літературна пародія"
                ],
                correct: 1,
                difficulty: "hard",
                explanation: "Палімпсест - це рукопис, написаний поверх попереднього стертого тексту. У літературознавстві означає твір з багатошаровим змістом."
            }
        ]
    },
    round4: {
        title: "Інтелектуальний двобій (бліц)",
        icon: "⚡",
        questions: [
            // Експертні питання - всі складні
            {
                question: "З якого латинського слова походить термін 'плагіат'?",
                options: [
                    "Plagiarius (викрадач людей)",
                    "Plagium (викрадення)",
                    "Plaga (удар)",
                    "Planus (рівний)"
                ],
                correct: 0,
                difficulty: "expert",
                explanation: "Слово 'плагіат' походить від латинського 'plagiarius', що спочатку означало 'викрадач людей' або 'той, хто краде чужих рабів', а потім стало означати 'літературний крадій'."
            },
            {
                question: "Хто ввів термін 'академічна доброчесність' у наукове обіг?",
                options: [
                    "Дон Маккейб",
                    "Тедді Фішман",
                    "Трісія Бертрам Ґелант",
                    "Термін виник колективно"
                ],
                correct: 3,
                difficulty: "expert",
                explanation: "Термін 'академічна доброчесність' виник колективно в академічному середовищі, хоча Дон Маккейб зробив значний внесок у дослідження цієї сфери."
            },
            {
                question: "Яка організація розробила фундаментальні принципи академічної доброчесності?",
                options: [
                    "UNESCO",
                    "Center for Academic Integrity",
                    "International Association of Universities",
                    "World Education Forum"
                ],
                correct: 1,
                difficulty: "expert",
                explanation: "Center for Academic Integrity (тепер International Center for Academic Integrity) розробив фундаментальні принципи академічної доброчесності."
            },
            {
                question: "Що таке 'турнітін' і для чого використовується?",
                options: [
                    "Система управління навчанням",
                    "Програма для перевірки на плагіат",
                    "База наукових публікацій",
                    "Система оцінювання студентів"
                ],
                correct: 1,
                difficulty: "expert",
                explanation: "Turnitin - це програмне забезпечення для виявлення плагіату, яке порівнює студентські роботи з величезною базою текстів."
            },
            {
                question: "Яке явище описує 'ефект Google' в академічному середовищі?",
                options: [
                    "Залежність від пошукових систем",
                    "Зниження здатності запам'ятовувати інформацію",
                    "Збільшення випадків плагіату",
                    "Всі варіанти правильні"
                ],
                correct: 3,
                difficulty: "expert",
                explanation: "'Ефект Google' описує як легкий доступ до інформації впливає на пізнавальні процеси, зменшуючи потребу запам'ятовувати та сприяючи копіюванню."
            },
            {
                question: "Що означає 'подвійна публікація' в науковому світі?",
                options: [
                    "Публікація в двох журналах одночасно",
                    "Публікація тієї ж роботи без посилання на попередню",
                    "Співавторство двох науковців",
                    "Публікація в двох мовах"
                ],
                correct: 1,
                difficulty: "expert",
                explanation: "Подвійна публікація - це публікація тієї ж наукової роботи в різних виданнях без належного посилання на попередню публікацію."
            },
            {
                question: "Яка різниця між 'етикою публікації' та 'академічною доброчесністю'?",
                options: [
                    "Різниці немає",
                    "Етика публікації - вужче поняття",
                    "Академічна доброчесність включає етику публікації",
                    "Це протилежні концепції"
                ],
                correct: 2,
                difficulty: "expert",
                explanation: "Академічна доброчесність - ширше поняття, яке включає етику публікації як один зі своїх аспектів."
            },
            {
                question: "Що таке 'салямна публікація' в науці?",
                options: [
                    "Публікація про харчові продукти",
                    "Поділ одного дослідження на кілька статей",
                    "Колективна публікація",
                    "Публікація в розстрочку"
                ],
                correct: 1,
                difficulty: "expert",
                explanation: "'Салямна публікація' - неетична практика поділу результатів одного дослідження на кілька статей для збільшення кількості публікацій."
            },
            {
                question: "Яка організація встановлює міжнародні стандарти наукової етики?",
                options: [
                    "COPE (Committee on Publication Ethics)",
                    "WAME (World Association of Medical Editors)",
                    "ICMJE (International Committee of Medical Journal Editors)",
                    "Всі перелічені"
                ],
                correct: 3,
                difficulty: "expert",
                explanation: "Всі зазначені організації працюють над встановленням міжнародних стандартів наукової етики та доброчесності."
            },
            {
                question: "Що означає принцип CUDOS у науковій етиці?",
                options: [
                    "Система нагород",
                    "Комунізм, Універсалізм, Незацікавленість, Організований скептицизм",
                    "Кодекс поведінки вчених",
                    "Етичні норми публікації"
                ],
                correct: 1,
                difficulty: "expert",
                explanation: "CUDOS - етичні норми науки за Робертом Мертоном: Комунізм (спільність знань), Універсалізм, Незацікавленість, Організований скептицизм."
            },
            {
                question: "Хто запропонував концепцію 'ретракції' наукових статей?",
                options: [
                    "Це давня практика без конкретного автора",
                    "Роберт Мертон",
                    "Джон Зіман",
                    "Концепція розвивалася поступово"
                ],
                correct: 3,
                difficulty: "expert",
                explanation: "Концепція ретракції (відкликання) наукових статей розвивалася поступово як відповідь на потребу виправлення наукового запису."
            },
            {
                question: "Що означає 'кібер-плагіат' у сучасному розумінні?",
                options: [
                    "Плагіат у цифровому середовищі",
                    "Використання ШІ для плагіату",
                    "Плагіат комп'ютерного коду",
                    "Всі варіанти включені в поняття"
                ],
                correct: 3,
                difficulty: "expert",
                explanation: "'Кібер-плагіат' включає всі форми плагіату в цифровому середовищі, включаючи використання ШІ, копіювання коду та цифрового контенту."
            }
        ]
    }
};

let currentRound = 1;
let currentQuestion = 0;
let roundScores = [0, 0, 0, 0]; // Результати кожного раунду
let roundResults = []; // Детальні результати кожного раунду
let answered = false;
let startTime = Date.now();
let questionStartTime = Date.now();
let totalQuestions = 48; // 12 * 4 раунди

function startQuiz() {
    document.getElementById('welcomeScreen').style.display = 'none';
    document.getElementById('quizScreen').style.display = 'block';
    startTime = Date.now();
    loadQuestion();
}

function loadQuestion() {
    const rounds = Object.keys(quizData);
    const roundKey = rounds[currentRound - 1];
    const roundData = quizData[roundKey];
    
    if (currentQuestion >= roundData.questions.length) {
        showRoundResults();
        return;
    }

    const question = roundData.questions[currentQuestion];
    const globalQuestionNumber = (currentRound - 1) * 12 + currentQuestion + 1;
    
    questionStartTime = Date.now();
    updateProgress();
    updateScore();
    
    const difficultyClass = `difficulty-${question.difficulty}`;
    const difficultyText = {
        'easy': 'Легко',
        'medium': 'Середньо', 
        'hard': 'Складно',
        'expert': 'Експерт'
    };
    
    const questionHtml = `
        <h2 class="round-title">
            <span class="round-number">${currentRound}</span>
            ${roundData.title}
            <div class="difficulty-indicator ${difficultyClass}">${difficultyText[question.difficulty]}</div>
        </h2>
        <div class="question">
            <div class="question-header">
                <div class="question-counter">Питання ${currentQuestion + 1}/12</div>
                <div class="question-difficulty ${difficultyClass}">${difficultyText[question.difficulty]}</div>
            </div>
            <div class="question-text">
                <strong>Питання ${globalQuestionNumber}:</strong> ${question.question}
            </div>
            <div class="options">
                ${question.options.map((option, index) => `
                    <div class="option" onclick="selectOption(${index})">
                        <span class="option-letter">${String.fromCharCode(65 + index)}</span>
                        <span>${option}</span>
                    </div>
                `).join('')}
            </div>
            <div class="explanation" id="explanation">
                ${question.explanation}
            </div>
            <button class="check-answer-btn" id="checkBtn" onclick="checkAnswer()">Перевірити відповідь</button>
            <button class="next-round-btn" id="nextBtn" onclick="nextQuestion()" style="display: none;">Наступне питання</button>
        </div>
    `;
    
    document.getElementById('currentQuestion').innerHTML = questionHtml;
    answered = false;
}

function selectOption(index) {
    if (answered) return;
    
    document.querySelectorAll('.option').forEach(option => {
        option.classList.remove('selected');
    });
    document.querySelectorAll('.option')[index].classList.add('selected');
}

function checkAnswer() {
    if (answered) return;
    
    const selectedOption = document.querySelector('.option.selected');
    if (!selectedOption) {
        alert('Будь ласка, оберіть відповідь!');
        return;
    }

    const rounds = Object.keys(quizData);
    const roundKey = rounds[currentRound - 1];
    const question = quizData[roundKey].questions[currentQuestion];
    const selectedIndex = Array.from(document.querySelectorAll('.option')).indexOf(selectedOption);
    const responseTime = Date.now() - questionStartTime;
    
    answered = true;
    
    // Показуємо правильну та неправильну відповіді
    document.querySelectorAll('.option').forEach((option, index) => {
        if (index === question.correct) {
            option.classList.add('correct');
        } else if (option.classList.contains('selected')) {
            option.classList.add('incorrect');
        }
    });
    
    // Нараховуємо бали
    if (selectedIndex === question.correct) {
        roundScores[currentRound - 1]++;
        
        // Зберігаємо детальну інформацію
        if (!roundResults[currentRound - 1]) {
            roundResults[currentRound - 1] = {
                correct: 0,
                incorrect: 0,
                totalTime: 0,
                averageTime: 0,
                questions: []
            };
        }
        
        roundResults[currentRound - 1].questions.push({
            correct: true,
            difficulty: question.difficulty,
            time: responseTime
        });
    } else {
        if (!roundResults[currentRound - 1]) {
            roundResults[currentRound - 1] = {
                correct: 0,
                incorrect: 0,
                totalTime: 0,
                averageTime: 0,
                questions: []
            };
        }
        
        roundResults[currentRound - 1].questions.push({
            correct: false,
            difficulty: question.difficulty,
            time: responseTime
        });
    }
    
    // Показуємо пояснення
    document.getElementById('explanation').style.display = 'block';
    document.getElementById('checkBtn').style.display = 'none';
    document.getElementById('nextBtn').style.display = 'inline-block';
    
    updateScore();
}

function nextQuestion() {
    currentQuestion++;
    loadQuestion();
}

function updateProgress() {
    const globalQuestionNumber = (currentRound - 1) * 12 + currentQuestion;
    const progress = globalQuestionNumber / totalQuestions * 100;
    document.getElementById('progressBar').style.width = progress + '%';
}

function updateScore() {
    const globalQuestionNumber = (currentRound - 1) * 12 + currentQuestion;
    const totalCorrect = roundScores.reduce((sum, score) => sum + score, 0);
    document.getElementById('scoreDisplay').textContent = `Рахунок: ${totalCorrect}/${answered ? globalQuestionNumber + 1 : globalQuestionNumber}`;
}

function showRoundResults() {
    document.getElementById('quizScreen').style.display = 'none';
    document.getElementById('roundResultsScreen').style.display = 'block';
    
    const roundScore = roundScores[currentRound - 1];
    const percentage = (roundScore / 12) * 100;
    const roundData = quizData[Object.keys(quizData)[currentRound - 1]];
    
    // Обчислюємо статистику раунду
    const result = roundResults[currentRound - 1];
    result.correct = roundScore;
    result.incorrect = 12 - roundScore;
    result.totalTime = result.questions.reduce((sum, q) => sum + q.time, 0);
    result.averageTime = result.totalTime / 12;
    
    let medal, message, performanceClass;
    
    if (percentage >= 90) {
        medal = '🏆';
        message = 'Бездоганно! Ви продемонстрували відмінне знання теми!';
        performanceClass = 'performance-excellent';
    } else if (percentage >= 75) {
        medal = '🥇';
        message = 'Відмінно! Дуже високий результат!';
        performanceClass = 'performance-excellent';
    } else if (percentage >= 60) {
        medal = '🥈';
        message = 'Добре! Непогані знання з простором для покращення.';
        performanceClass = 'performance-good';
    } else if (percentage >= 40) {
        medal = '🥉';
        message = 'Задовільно. Рекомендується більше уваги приділити цій темі.';
        performanceClass = 'performance-fair';
    } else {
        medal = '📚';
        message = 'Потрібно більше попрацювати над цією темою!';
        performanceClass = 'performance-poor';
    }
    
    document.getElementById('roundMedal').textContent = medal;
    document.getElementById('roundResultNumber').textContent = currentRound;
    document.getElementById('roundResultTitle').textContent = roundData.title;
    document.getElementById('roundScore').textContent = `${roundScore}/12`;
    document.getElementById('roundScore').className = `score ${performanceClass}`;
    
    // Детальна статистика
    const avgTimeMinutes = Math.round(result.averageTime / 1000);
    const breakdown = `
        <div class="breakdown-item">
            <span>Правильних відповідей:</span>
            <span style="color: #4caf50; font-weight: bold;">${result.correct}/12</span>
        </div>
        <div class="breakdown-item">
            <span>Неправильних відповідей:</span>
            <span style="color: #f44336; font-weight: bold;">${result.incorrect}/12</span>
        </div>
        <div class="breakdown-item">
            <span>Середній час відповіді:</span>
            <span style="color: #ffd700; font-weight: bold;">${avgTimeMinutes} сек</span>
        </div>
        <div class="breakdown-item">
            <span>Відсоток успішності:</span>
            <span style="color: #ffd700; font-weight: bold;">${percentage.toFixed(1)}%</span>
        </div>
    `;
    
    document.getElementById('roundBreakdown').innerHTML = breakdown;
    document.getElementById('roundFeedback').innerHTML = `<p class="question-text">${message}</p>`;
    
    // Кнопка продовження
    if (currentRound < 4) {
        document.getElementById('continueBtn').textContent = `Продовжити до раунду ${currentRound + 1} 🎯`;
    } else {
        document.getElementById('continueBtn').textContent = 'Переглянути фінальні результати 🏁';
    }
}

function continueToNextRound() {
    if (currentRound < 4) {
        currentRound++;
        currentQuestion = 0;
        document.getElementById('roundResultsScreen').style.display = 'none';
        document.getElementById('quizScreen').style.display = 'block';
        loadQuestion();
    } else {
        showFinalResults();
    }
}

function showFinalResults() {
    document.getElementById('roundResultsScreen').style.display = 'none';
    document.getElementById('finalResultsScreen').style.display = 'block';
    
    const totalScore = roundScores.reduce((sum, score) => sum + score, 0);
    const totalPercentage = (totalScore / totalQuestions) * 100;
    const totalTime = Date.now() - startTime;
    
    let medal, message;
    
    if (totalPercentage >= 85) {
        medal = '🏆';
        message = 'Неймовірно! Ви справжній експерт з академічної доброчесності! Ваші знання на найвищому рівні!';
    } else if (totalPercentage >= 70) {
        medal = '🥇';
        message = 'Відмінно! У вас дуже міцні знання з академічної доброчесності!';
    } else if (totalPercentage >= 55) {
        medal = '🥈';
        message = 'Добре! Базові знання є, але є простір для покращення.';
    } else if (totalPercentage >= 40) {
        medal = '🥉';
        message = 'Задовільно. Рекомендуємо приділити більше уваги вивченню принципів академічної доброчесності.';
    } else {
        medal = '📚';
        message = 'Потрібна серйозна робота над засвоєнням принципів академічної доброчесності!';
    }
    
    document.getElementById('finalMedal').textContent = medal;
    document.getElementById('finalScore').textContent = `${totalScore}/${totalQuestions}`;
    document.getElementById('finalMessage').textContent = message;
    
    // Підсумок всіх раундів
    const roundsData = Object.values(quizData);
    const roundsSummaryHtml = roundsData.map((round, index) => {
        const score = roundScores[index];
        const percentage = (score / 12) * 100;
        let performanceClass = 'performance-fair';
        let performanceEmoji = '📊';
        
        if (percentage >= 85) {
            performanceClass = 'performance-excellent';
            performanceEmoji = '🏆';
        } else if (percentage >= 70) {
            performanceClass = 'performance-excellent';
            performanceEmoji = '🥇';
        } else if (percentage >= 55) {
            performanceClass = 'performance-good';
            performanceEmoji = '🥈';
        } else if (percentage >= 40) {
            performanceClass = 'performance-fair';
            performanceEmoji = '🥉';
        } else {
            performanceClass = 'performance-poor';
            performanceEmoji = '📚';
        }
        
        return `
            <div class="round-card completed">
                <div class="round-performance ${performanceClass}">${performanceEmoji}</div>
                <h4>Раунд ${index + 1}</h4>
                <p style="font-size: 0.9em; margin-bottom: 10px;">${round.title}</p>
                <div style="font-size: 1.5em; font-weight: bold; color: #ffd700;">${score}/12</div>
                <div style="font-size: 0.9em; color: #e0e6ed;">${percentage.toFixed(1)}%</div>
                ${percentage >= 85 ? '<div class="achievement-badge">Експерт</div>' : ''}
                ${percentage === 100 ? '<div class="achievement-badge">Ідеально!</div>' : ''}
            </div>
        `;
    }).join('');
    
    document.getElementById('allRoundsSummary').innerHTML = roundsSummaryHtml;
    
    // Загальна статистика
    const totalTimeMinutes = Math.round(totalTime / 60000);
    const averageTimePerQuestion = Math.round(totalTime / totalQuestions / 1000);
    const bestRoundIndex = roundScores.indexOf(Math.max(...roundScores));
    const worstRoundIndex = roundScores.indexOf(Math.min(...roundScores));
    
    // Рахуємо статистику по складності
    let easyCorrect = 0, easyTotal = 0;
    let mediumCorrect = 0, mediumTotal = 0;
    let hardCorrect = 0, hardTotal = 0;
    let expertCorrect = 0, expertTotal = 0;
    
    roundResults.forEach(roundResult => {
        if (roundResult && roundResult.questions) {
            roundResult.questions.forEach(q => {
                switch(q.difficulty) {
                    case 'easy':
                        easyTotal++;
                        if (q.correct) easyCorrect++;
                        break;
                    case 'medium':
                        mediumTotal++;
                        if (q.correct) mediumCorrect++;
                        break;
                    case 'hard':
                        hardTotal++;
                        if (q.correct) hardCorrect++;
                        break;
                    case 'expert':
                        expertTotal++;
                        if (q.correct) expertCorrect++;
                        break;
                }
            });
        }
    });
    
    const finalBreakdown = `
        <h3 style="color: #ffd700; margin-bottom: 20px;">📊 Детальна статистика</h3>
        <div class="breakdown-item">
            <span>Загальний час:</span>
            <span style="color: #ffd700; font-weight: bold;">${totalTimeMinutes} хв</span>
        </div>
        <div class="breakdown-item">
            <span>Середній час на питання:</span>
            <span style="color: #ffd700; font-weight: bold;">${averageTimePerQuestion} сек</span>
        </div>
        <div class="breakdown-item">
            <span>Найкращий раунд:</span>
            <span style="color: #4caf50; font-weight: bold;">Раунд ${bestRoundIndex + 1} (${roundScores[bestRoundIndex]}/12)</span>
        </div>
        <div class="breakdown-item">
            <span>Найскладніший раунд:</span>
            <span style="color: #ff9800; font-weight: bold;">Раунд ${worstRoundIndex + 1} (${roundScores[worstRoundIndex]}/12)</span>
        </div>
        <div class="breakdown-item">
            <span>Легкі питання:</span>
            <span style="color: #4caf50; font-weight: bold;">${easyCorrect}/${easyTotal} (${easyTotal > 0 ? Math.round(easyCorrect/easyTotal*100) : 0}%)</span>
        </div>
        <div class="breakdown-item">
            <span>Середні питання:</span>
            <span style="color: #ff9800; font-weight: bold;">${mediumCorrect}/${mediumTotal} (${mediumTotal > 0 ? Math.round(mediumCorrect/mediumTotal*100) : 0}%)</span>
        </div>
        <div class="breakdown-item">
            <span>Складні питання:</span>
            <span style="color: #f44336; font-weight: bold;">${hardCorrect}/${hardTotal} (${hardTotal > 0 ? Math.round(hardCorrect/hardTotal*100) : 0}%)</span>
        </div>
        <div class="breakdown-item">
            <span>Експертні питання:</span>
            <span style="color: #9c27b0; font-weight: bold;">${expertCorrect}/${expertTotal} (${expertTotal > 0 ? Math.round(expertCorrect/expertTotal*100) : 0}%)</span>
        </div>
    `;
    
    document.getElementById('finalBreakdown').innerHTML = finalBreakdown;
    
    // Досягнення
    const achievements = [];
    if (totalPercentage === 100) achievements.push("Ідеальний результат!");
    if (totalPercentage >= 90) achievements.push("Експерт доброчесності");
    if (roundScores.every(score => score >= 8)) achievements.push("Стабільність");
    if (Math.max(...roundScores) === 12) achievements.push("Ідеальний раунд");
    if (totalTimeMinutes <= 20) achievements.push("Швидкість думки");
    if (easyCorrect === easyTotal && easyTotal > 0) achievements.push("Базові знання");
    if (expertCorrect >= expertTotal * 0.7 && expertTotal > 0) achievements.push("Експертне мислення");
    
    if (achievements.length > 0) {
        const achievementsHtml = achievements.map(achievement => 
            `<div class="achievement-badge">${achievement}</div>`
        ).join('');
        document.getElementById('finalBreakdown').innerHTML += `
            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.1);">
                <h4 style="color: #ffd700; margin-bottom: 15px;">🏅 Досягнення:</h4>
                ${achievementsHtml}
            </div>
        `;
    }
}

function restartQuiz() {
    currentRound = 1;
    currentQuestion = 0;
    roundScores = [0, 0, 0, 0];
    roundResults = [];
    answered = false;
    
    document.getElementById('finalResultsScreen').style.display = 'none';
    document.getElementById('welcomeScreen').style.display = 'block';
    
    // Скидаємо прогрес
    document.getElementById('progressBar').style.width = '0%';
}

// Автозбереження прогресу (можна розширити в майбутньому)
function saveProgress() {
    const progress = {
        currentRound,
        currentQuestion,
        roundScores,
        roundResults,
        startTime
    };
    // localStorage недоступний, але можна зберігати в змінну сесії
    window.quizProgress = progress;
}

// Додаємо обробники для збереження прогресу
window.addEventListener('beforeunload', saveProgress);

            // Розширена система оцінювання
function calculateDetailedScore(roundIndex) {
    const result = roundResults[roundIndex];
    if (!result || !result.questions) return null;
    
    let score = {
        basePoints: 0,
        timeBonus: 0,
        difficultyBonus: 0,
        streakBonus: 0,
        totalPoints: 0,
        grade: 'F',
        gpa: 0,
        performance: 'poor'
    };
    
    let currentStreak = 0;
    let maxStreak = 0;
    
    // Базові бали та бонуси
    result.questions.forEach((q, index) => {
        if (q.correct) {
            // Базові бали
            score.basePoints++;
            
            // Бонус за складність
            switch(q.difficulty) {
                case 'easy': score.difficultyBonus += 1; break;
                case 'medium': score.difficultyBonus += 2; break;
                case 'hard': score.difficultyBonus += 3; break;
                case 'expert': score.difficultyBonus += 4; break;
            }
            
            // Бонус за швидкість (менше 30 сек)
            if (q.time < 30000) {
                score.timeBonus += 1;
            }
            
            // Розрахунок серій правильних відповідей
            currentStreak++;
            maxStreak = Math.max(maxStreak, currentStreak);
        } else {
            currentStreak = 0;
        }
    });
    
    // Бонус за серії (streak)
    if (maxStreak >= 5) score.streakBonus = 10;
    else if (maxStreak >= 3) score.streakBonus = 5;
    
    // Загальні бали
    score.totalPoints = score.basePoints + Math.floor(score.timeBonus/2) + 
                       Math.floor(score.difficultyBonus/4) + score.streakBonus;
    
    // Розрахунок оцінки ECTS та GPA
    const percentage = (score.basePoints / 12) * 100;
    
    if (percentage >= 95) {
        score.grade = 'A+'; score.gpa = 4.0; score.performance = 'excellent';
    } else if (percentage >= 90) {
        score.grade = 'A'; score.gpa = 3.7; score.performance = 'excellent';
    } else if (percentage >= 85) {
        score.grade = 'B+'; score.gpa = 3.3; score.performance = 'good';
    } else if (percentage >= 80) {
        score.grade = 'B'; score.gpa = 3.0; score.performance = 'good';
    } else if (percentage >= 75) {
        score.grade = 'B-'; score.gpa = 2.7; score.performance = 'good';
    } else if (percentage >= 70) {
        score.grade = 'C+'; score.gpa = 2.3; score.performance = 'fair';
    } else if (percentage >= 65) {
        score.grade = 'C'; score.gpa = 2.0; score.performance = 'fair';
    } else if (percentage >= 60) {
        score.grade = 'C-'; score.gpa = 1.7; score.performance = 'fair';
    } else if (percentage >= 55) {
        score.grade = 'D+'; score.gpa = 1.3; score.performance = 'poor';
    } else if (percentage >= 50) {
        score.grade = 'D'; score.gpa = 1.0; score.performance = 'poor';
    } else {
        score.grade = 'F'; score.gpa = 0.0; score.performance = 'fail';
    }
    
    return score;
}

function showRoundResults() {
    document.getElementById('quizScreen').style.display = 'none';
    document.getElementById('roundResultsScreen').style.display = 'block';
    
    const roundScore = roundScores[currentRound - 1];
    const percentage = (roundScore / 12) * 100;
    const roundData = quizData[Object.keys(quizData)[currentRound - 1]];
    const detailedScore = calculateDetailedScore(currentRound - 1);
    
    // Обчислюємо статистику раунду
    const result = roundResults[currentRound - 1];
    result.correct = roundScore;
    result.incorrect = 12 - roundScore;
    result.totalTime = result.questions.reduce((sum, q) => sum + q.time, 0);
    result.averageTime = result.totalTime / 12;
    
    let medal, message, performanceClass;
    
    if (percentage >= 95) {
        medal = '🏆'; message = 'ДОСКОНАЛО! Ідеальне знання теми!'; performanceClass = 'performance-excellent';
    } else if (percentage >= 85) {
        medal = '🥇'; message = 'ВІДМІННО! Дуже високий рівень!'; performanceClass = 'performance-excellent';
    } else if (percentage >= 70) {
        medal = '🥈'; message = 'ДОБРЕ! Хороший результат!'; performanceClass = 'performance-good';
    } else if (percentage >= 50) {
        medal = '🥉'; message = 'ЗАДОВІЛЬНО. Потрібно покращити знання.'; performanceClass = 'performance-fair';
    } else {
        medal = '📚'; message = 'НЕЗАДОВІЛЬНО. Рекомендуємо перевивчити тему!'; performanceClass = 'performance-poor';
    }
    
    document.getElementById('roundMedal').textContent = medal;
    document.getElementById('roundResultNumber').textContent = currentRound;
    document.getElementById('roundResultTitle').textContent = roundData.title;
    document.getElementById('roundScore').textContent = `${roundScore}/12`;
    document.getElementById('roundScore').className = `score ${performanceClass}`;
    
    // Розширена детальна статистика з оцінюванням
    const avgTimeSeconds = Math.round(result.averageTime / 1000);
    const breakdown = `
        <h4 style="color: #ffd700; margin-bottom: 15px;">📊 Детальна оцінка</h4>
        
        <!-- Головна оцінка -->
        <div style="background: rgba(255,215,0,0.1); border: 2px solid #ffd700; border-radius: 15px; padding: 20px; margin-bottom: 20px; text-align: center;">
            <div style="font-size: 3em; color: #ffd700; font-weight: bold; margin-bottom: 10px;">
                ${detailedScore.grade}
            </div>
            <div style="font-size: 1.2em; color: #e0e6ed;">
                GPA: ${detailedScore.gpa} | ${percentage.toFixed(1)}%
            </div>
        </div>
        
        <!-- Розподіл балів -->
        <div style="margin-bottom: 20px;">
            <h5 style="color: #ffd700; margin-bottom: 10px;">🎯 Розподіл балів:</h5>
            <div class="breakdown-item">
                <span>Правильні відповіді:</span>
                <span style="color: #4caf50; font-weight: bold;">${detailedScore.basePoints}/12</span>
            </div>
            <div class="breakdown-item">
                <span>Бонус за швидкість:</span>
                <span style="color: #2196f3; font-weight: bold;">+${Math.floor(detailedScore.timeBonus/2)}</span>
            </div>
            <div class="breakdown-item">
                <span>Бонус за складність:</span>
                <span style="color: #ff9800; font-weight: bold;">+${Math.floor(detailedScore.difficultyBonus/4)}</span>
            </div>
            <div class="breakdown-item">
                <span>Бонус за серії:</span>
                <span style="color: #9c27b0; font-weight: bold;">+${detailedScore.streakBonus}</span>
            </div>
            <div class="breakdown-item" style="border-top: 2px solid #ffd700; padding-top: 10px; margin-top: 10px;">
                <span><strong>Загальний бал:</strong></span>
                <span style="color: #ffd700; font-weight: bold; font-size: 1.2em;">${detailedScore.totalPoints}</span>
            </div>
        </div>
        
        <!-- Статистика -->
        <div style="margin-bottom: 20px;">
            <h5 style="color: #ffd700; margin-bottom: 10px;">⏱️ Статистика:</h5>
            <div class="breakdown-item">
                <span>Середній час відповіді:</span>
                <span style="color: #ffd700; font-weight: bold;">${avgTimeSeconds} сек</span>
            </div>
            <div class="breakdown-item">
                <span>Швидких відповідей (&lt;30с):</span>
                <span style="color: #2196f3; font-weight: bold;">${detailedScore.timeBonus}</span>
            </div>
            <div class="breakdown-item">
                <span>Найдовша серія:</span>
                <span style="color: #9c27b0; font-weight: bold;">${result.questions.reduce((max, q, i) => {
                    let streak = 0;
                    for (let j = i; j < result.questions.length && result.questions[j].correct; j++) streak++;
                    return Math.max(max, streak);
                }, 0)}</span>
            </div>
        </div>
    `;
    
    document.getElementById('roundBreakdown').innerHTML = breakdown;
    document.getElementById('roundFeedback').innerHTML = `<p class="question-text">${message}</p>`;
    
    // Додаємо рекомендації
    let recommendations = '';
    if (percentage < 70) {
        recommendations = `
            <div style="background: rgba(255,152,0,0.1); border-left: 4px solid #ff9800; padding: 15px; border-radius: 10px; margin-top: 20px;">
                <h5 style="color: #ff9800; margin-bottom: 10px;">💡 Рекомендації для покращення:</h5>
                <ul style="margin-left: 20px; line-height: 1.6;">
                    <li>Перегляньте матеріали з цієї теми</li>
                    <li>Зверніться до ШІ-асистента за поясненнями</li>
                    <li>Приділіть більше уваги складним питанням</li>
                </ul>
            </div>
        `;
    }
    
    document.getElementById('roundFeedback').innerHTML += recommendations;
    
    // Кнопка продовження
    if (currentRound < 4) {
        document.getElementById('continueBtn').textContent = `Продовжити до раунду ${currentRound + 1} 🎯`;
    } else {
        document.getElementById('continueBtn').textContent = 'Переглянути фінальні результати 🏁';
    }
}

function showFinalResults() {
    document.getElementById('roundResultsScreen').style.display = 'none';
    document.getElementById('finalResultsScreen').style.display = 'block';
    
    const totalScore = roundScores.reduce((sum, score) => sum + score, 0);
    const totalPercentage = (totalScore / totalQuestions) * 100;
    const totalTime = Date.now() - startTime;
    
    // Розрахунок загальної оцінки
    const totalDetailedScores = roundResults.map((_, index) => calculateDetailedScore(index)).filter(s => s);
    const averageGPA = totalDetailedScores.reduce((sum, s) => sum + s.gpa, 0) / totalDetailedScores.length;
    
    let finalGrade = 'F';
    if (totalPercentage >= 95) finalGrade = 'A+';
    else if (totalPercentage >= 90) finalGrade = 'A';
    else if (totalPercentage >= 85) finalGrade = 'B+';
    else if (totalPercentage >= 80) finalGrade = 'B';
    else if (totalPercentage >= 75) finalGrade = 'B-';
    else if (totalPercentage >= 70) finalGrade = 'C+';
    else if (totalPercentage >= 65) finalGrade = 'C';
    else if (totalPercentage >= 60) finalGrade = 'C-';
    else if (totalPercentage >= 55) finalGrade = 'D+';
    else if (totalPercentage >= 50) finalGrade = 'D';
    
    let medal, message;
    
    if (totalPercentage >= 90) {
        medal = '🏆'; message = 'НЕЙМОВІРНО! Ви справжній експерт з академічної доброчесності!';
    } else if (totalPercentage >= 80) {
        medal = '🥇'; message = 'ВІДМІННО! У вас дуже міцні знання!';
    } else if (totalPercentage >= 70) {
        medal = '🥈'; message = 'ДОБРЕ! Солідна база знань!';
    } else if (totalPercentage >= 60) {
        medal = '🥉'; message = 'ЗАДОВІЛЬНО. Є над чим працювати!';
    } else {
        medal = '📚'; message = 'Потрібна серйозна робота над матеріалом!';
    }
    
    document.getElementById('finalMedal').textContent = medal;
    document.getElementById('finalScore').textContent = `${totalScore}/${totalQuestions}`;
    document.getElementById('finalMessage').textContent = message;
    
    // Підсумок всіх раундів з оцінками
    const roundsData = Object.values(quizData);
    const roundsSummaryHtml = roundsData.map((round, index) => {
        const score = roundScores[index];
        const detailedScore = calculateDetailedScore(index);
        const percentage = (score / 12) * 100;
        
        let performanceEmoji = '📚';
        if (percentage >= 90) performanceEmoji = '🏆';
        else if (percentage >= 80) performanceEmoji = '🥇';
        else if (percentage >= 70) performanceEmoji = '🥈';
        else if (percentage >= 60) performanceEmoji = '🥉';
        
        return `
            <div class="round-card completed">
                <div class="round-performance">${performanceEmoji}</div>
                <h4>Раунд ${index + 1}</h4>
                <p style="font-size: 0.9em; margin-bottom: 10px;">${round.title}</p>
                <div style="font-size: 2em; font-weight: bold; color: #ffd700; margin: 10px 0;">
                    ${detailedScore ? detailedScore.grade : 'N/A'}
                </div>
                <div style="font-size: 1.2em; font-weight: bold; color: #fff;">${score}/12</div>
                <div style="font-size: 0.9em; color: #e0e6ed;">
                    ${percentage.toFixed(1)}% | GPA: ${detailedScore ? detailedScore.gpa.toFixed(1) : '0.0'}
                </div>
                ${percentage >= 95 ? '<div class="achievement-badge">Ідеально!</div>' : ''}
                ${percentage >= 85 ? '<div class="achievement-badge">Відмінно</div>' : ''}
            </div>
        `;
    }).join('');
    
    document.getElementById('allRoundsSummary').innerHTML = roundsSummaryHtml;
    
    // Розширена фінальна статистика
    const totalTimeMinutes = Math.round(totalTime / 60000);
    const totalPoints = totalDetailedScores.reduce((sum, s) => sum + s.totalPoints, 0);
    const bestRoundIndex = roundScores.indexOf(Math.max(...roundScores));
    const worstRoundIndex = roundScores.indexOf(Math.min(...roundScores));
    
    const finalBreakdown = `
        <h3 style="color: #ffd700; margin-bottom: 20px;">🎓 Фінальна оцінка</h3>
        
        <!-- Головна оцінка -->
        <div style="background: linear-gradient(135deg, rgba(255,215,0,0.2), rgba(255,215,0,0.05)); border: 3px solid #ffd700; border-radius: 20px; padding: 25px; margin-bottom: 25px; text-align: center;">
            <div style="font-size: 4em; color: #ffd700; font-weight: bold; margin-bottom: 15px;">
                ${finalGrade}
            </div>
            <div style="font-size: 1.5em; color: #e0e6ed; margin-bottom: 10px;">
                Середній GPA: ${averageGPA.toFixed(2)}
            </div>
            <div style="font-size: 1.2em; color: #b0c4de;">
                Загальний результат: ${totalPercentage.toFixed(1)}%
            </div>
            <div style="font-size: 1em; color: #ffd700; margin-top: 15px; font-weight: bold;">
                Загальний бал: ${totalPoints} / ${totalDetailedScores.length * 20}
            </div>
        </div>
        
        <div class="breakdown-item">
            <span>Загальний час проходження:</span>
            <span style="color: #ffd700; font-weight: bold;">${totalTimeMinutes} хв</span>
        </div>
        <div class="breakdown-item">
            <span>Найкращий раунд:</span>
            <span style="color: #4caf50; font-weight: bold;">Раунд ${bestRoundIndex + 1} - ${totalDetailedScores[bestRoundIndex]?.grade || 'N/A'}</span>
        </div>
        <div class="breakdown-item">
            <span>Найскладніший раунд:</span>
            <span style="color: #ff9800; font-weight: bold;">Раунд ${worstRoundIndex + 1} - ${totalDetailedScores[worstRoundIndex]?.grade || 'N/A'}</span>
        </div>
    `;
    
    document.getElementById('finalBreakdown').innerHTML = finalBreakdown;
    
    // Система досягнень та сертифікації
    const achievements = [];
    if (totalPercentage === 100) achievements.push("🏆 Ідеальний результат");
    if (averageGPA >= 3.7) achievements.push("🌟 Відмінник");
    if (averageGPA >= 3.0) achievements.push("📚 Хороший студент");
    if (roundScores.every(score => score >= 10)) achievements.push("⚡ Стабільність");
    if (Math.max(...roundScores) === 12) achievements.push("🎯 Ідеальний раунд");
    if (totalTimeMinutes <= 25) achievements.push("🚀 Швидкість думки");
    if (totalPercentage >= 85) achievements.push("🎓 Експерт доброчесності");
    
    if (achievements.length > 0) {
        const achievementsHtml = achievements.map(achievement => 
            `<div class="achievement-badge">${achievement}</div>`
        ).join('');
        document.getElementById('finalBreakdown').innerHTML += `
            <div style="margin-top: 25px; padding-top: 20px; border-top: 2px solid rgba(255,255,255,0.1);">
                <h4 style="color: #ffd700; margin-bottom: 15px;">🏅 Досягнення та сертифікація:</h4>
                ${achievementsHtml}
                ${totalPercentage >= 70 ? `
                    <div style="margin-top: 20px; padding: 15px; background: rgba(76,175,80,0.1); border: 2px solid #4caf50; border-radius: 10px;">
                        <strong style="color: #4caf50;">✅ Сертифікат отримано!</strong><br>
                        <span style="color: #e0e6ed;">Ви успішно пройшли курс "Академічна доброчесність" НТУ "ДП"</span>
                    </div>
                ` : `
                    <div style="margin-top: 20px; padding: 15px; background: rgba(255,152,0,0.1); border: 2px solid #ff9800; border-radius: 10px;">
                        <strong style="color: #ff9800;">📖 Потрібна перездача</strong><br>
                        <span style="color: #e0e6ed;">Для отримання сертифіката необхідно набрати мінімум 70%</span>
                    </div>
                `}
            </div>
        `;
    }
}

// Анімація появи елементів
function animateElements() {
    const elements = document.querySelectorAll('.quiz-section, .round-card');
    elements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        setTimeout(() => {
            el.style.transition = 'all 0.6s ease';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Функція для експорту результатів
function exportResults() {
    const results = {
        timestamp: new Date().toISOString(),
        university: "НТУ 'Дніпровська політехніка'",
        course: "Академічна доброчесність",
        totalScore: roundScores.reduce((sum, score) => sum + score, 0),
        totalQuestions: totalQuestions,
        percentage: (roundScores.reduce((sum, score) => sum + score, 0) / totalQuestions * 100).toFixed(1),
        roundResults: roundScores.map((score, index) => ({
            round: index + 1,
            title: Object.values(quizData)[index].title,
            score: score,
            maxScore: 12,
            percentage: (score / 12 * 100).toFixed(1),
            detailedScore: calculateDetailedScore(index)
        })),
        totalTime: Math.round((Date.now() - startTime) / 60000),
        certificateEarned: (roundScores.reduce((sum, score) => sum + score, 0) / totalQuestions * 100) >= 70
    };
    
    return results;
}

// Запускаємо анімацію при завантаженні
// window.addEventListener('load', animateElements);
// </script>
// </body>
// </html>
//         плагіат?",
//                 options: [
//                     "Використання чужих ідей із зазначенням авторства",
//                     "Привласнення чужих ідей без зазначення авторства",
//                     "Спільна робота над проектом",
//                     "Цитування наукових джерел"
//                 ],
//                 correct: 1,
//                 difficulty: "easy",
//                 explanation: "Плагіат - це привласнення чужих ідей, текстів або результатів досліджень без зазначення справжнього авторства."
//             },
//             {
//                 question: "Скільки основних принципів академічної доброчесності існує?",
//                 options: ["3", "5", "6", "8"],
//                 correct: 2,
//                 difficulty: "easy",
//                 explanation: "Існує 6 основних принципів академічної доброчесності: чесність, довіра, справедливість, повага, відповідальність та мужність."
//             },
//             {
//                 question: "Що означає принцип 'чесності' в академічній доброчесності?",
//                 options: [
//                     "Завжди говорити правду викладачам",
//                     "Не використовувати недозволені матеріали",
//                     "Бути чесним щодо своїх знань і вмінь",
//                     "Всі варіанти правильні"
//                 ],
//                 correct: 3,
//                 difficulty: "easy",
//                 explanation: "Принцип чесності включає всі зазначені аспекти: правдивість, відмову від шахрайства та чесність щодо власних можливостей."
//             },
//             {
//                 question: "Чи потрібно посилатися на джерело при перефразуванні?",
//                 options: ["Так, завжди", "Ні, якщо переписав своїми словами", "Тільки при прямому цитуванні", "Залежить від обсягу тексту"],
//                 correct: 0,
//                 difficulty: "easy",
//                 explanation: "Навіть при перефразуванні чужих ідей необхідно обов'язково посилатися на первинне джерело."
//             },
//             // Середні питання (5-8)
//             {
//                 question: "Що таке самоплагіат?",
//                 options: [
//                     "Такого поняття не існує",
//                     "Повторне використання власних попередніх робіт без посилання",
//                     "Плагіат самого себе неможливий",
//                     "Цитування власних праць"
//                 ],
//                 correct: 1,
//                 difficulty: "medium",
//                 explanation: "Самоплагіат - це повторне використання власних попередніх робіт без належного посилання або дозволу, що може вводити в оману щодо новизни дослідження."
//             },
//             {
//                 question: "Який відсоток збігу тексту зазвичай вважається прийнятним?",
//                 options: ["До 5%", "До 10%", "До 15%", "Немає універсального стандарту"],
//                 correct: 3,
//                 difficulty: "medium",
//                 explanation: "Не існує універсального стандарту відсотка збігу. Це залежить від типу роботи, дисципліни та вимог конкретного навчального закладу."
//             },
//             {
//                 question: "Що означає принцип 'мужності' в академічній доброчесності?",
//                 options: [
//                     "Не боятися складних завдань",
//                     "Мати сміливість повідомляти про порушення",
//                     "Захищати свою точку зору",
//                     "Брати участь у дискусіях"
//                 ],
//                 correct: 1,
//                 difficulty: "medium",
//                 explanation: "Принцип мужності означає готовність повідомляти про порушення академічної доброчесності, навіть якщо це може бути неприємно."
//             },
//             {
//                 question: "Які наслідки може мати порушення академічної доброчесності?",
//                 options: [
//                     "Тільки зниження оцінки",
//                     "Перездача роботи",
//                     "Виключення з університету",
//                     "Всі варіанти можливі"
//                 ],
//                 correct: 3,
//                 difficulty: "medium",
//                 explanation: "Наслідки можуть варіюватися від зниження оцінки до виключення з університету, залежно від серйозності порушення."
//             },
//             // Складні питання (9-12)
//             {
//                 question: "Яка різниця між 'загальними знаннями' та інформацією, що потребує посилання?",
//                 options: [
//                     "Загальні знання не потребують посилань",
//                     "Вся інформація потребує посилань",
//                     "Загальні знання - це факти, відомі широкому загалу без спеціального навчання",
//                     "Різниці немає"
//                 ],
//                 correct: 2,
//                 difficulty: "hard",
//                 explanation: "Загальні знання - це факти, які широко відомі та можуть бути знайдені в багатьох джерелах без спеціального навчання (наприклад, історичні дати, географічні факти)."
//             },
//             {
//                 question: "Яка різниця між 'загальними знаннями' та інформацією, що потребує посилання?",
//                 options: [
//                     "Загальні знання не потребують посилань",
//                     "Вся інформація потребує посилань",
//                     "Загальні знання - це факти, відомі широкому загалу без спеціального навчання",
//                     "Різниці немає"
//                 ],
//                 correct: 2,
//                 difficulty: "hard",
//                 explanation: "Загальні знання - це факти, які широко відомі та можуть бути знайдені в багатьох джерелах без спеціального навчання (наприклад, історичні дати, географічні факти)."
//             },
//                             question: "Яка різниця між 'загальними знаннями' та інформацією, що потребує посилання?",
//                 options: [
//                     "Загальні знання не потребують посилань",
//                     "Вся інформація потребує посилань",
//                     "Загальні знання - це факти, відомі широкому загалу без спеціального навчання",
//                     "Різниці немає"
//                 ],
//                 correct: 2,
//                 difficulty: "hard",
//                 explanation: "Загальні знання - це факти, які широко відомі та можуть бути знайдені в багатьох джерелах без спеціального навчання (наприклад, історичні дати, географічні факти)."
//             },
//             {
//                 question: "Яка різниця між 'загальними знаннями' та інформацією, що потребує посилання?",
//                 options: [
//                     "Загальні знання не потребують посилань",
//                     "Вся інформація потребує посилань",
//                     "Загальні знання - це факти, відомі широкому загалу без спеціального навчання",
//                     "Різниці немає"
//                 ],
//                 correct: 2,
//                 difficulty: "hard",
//                 explanation: "Загальні знання - це факти, які широко відомі та можуть бути знайдені в багатьох джерелах без спеціального навчання (наприклад, історичні дати, географічні факти)."
//             }
//         };
//     };
// };