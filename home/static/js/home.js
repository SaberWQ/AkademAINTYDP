
function openQuiz() {
    // В реальному додатку тут був би перехід на сторінку квізу
    window.location.href = "/quiz";
    //alert("🎓 Переходимо до квізу!\n\nВ реальному додатку тут буде посилання на сторінку з тестами, яку ми створили раніше.");
}

function openProfile() {

    const urlAnotherPage = "/ai"; // Замість цього URL вставте адресу сторінки, на яку хочете перейти
    document.getElementById('linkbutton').addEventListener('click', function() {
        window.location.href = urlAnotherPage;
    });
}


function showMainPage() {
    document.getElementById('profileSection').style.display = 'none';
    document.getElementById('backButton').style.display = 'none';
    document.getElementById('mainNavigation').style.display = 'grid';
    document.getElementById('statsSection').style.display = 'grid';
    
    // Скролл до верху
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showResources() {
    alert("📚 Навчальні ресурси\n\n• Посібник з академічної доброчесності НТУ 'ДП'\n• Правила цитування та оформлення\n• Приклади етичних дилем\n• Корисні онлайн-інструменти\n\nВ реальному додатку тут буде окрема сторінка з ресурсами.");
}

function showContact() {
    alert("📞 Контактна інформація\n\n📧 Email: academic.integrity@nmu.one\n📱 Телефон: +38 (056) 247-XX-XX\n🏢 Кабінет: Головний корпус, к. XXX\n🕐 Години роботи: Пн-Пт 9:00-17:00\n\nВ реальному додатку тут будуть актуальні контакти.");
}
