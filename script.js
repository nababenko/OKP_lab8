function dialogWithUser() {
    let city = prompt("Введіть ваше місто для пошуку найближчого магазину:");
    if (!city) {
        alert("Ви не ввели місто!");
        return;
    }

    let stores = ["Київ", "Львів", "Одеса", "Харків", "Дніпро"];
    let found = false;
    for (let i = 0; i < stores.length; i++) {
        if (stores[i].toLowerCase() === city.trim().toLowerCase()) {
            found = true;
            break;
        }
    }

    if (found) {
        alert("У вашому місті є наш магазин! Ласкаво просимо.");
    } else {
        alert("На жаль, у вашому місті немає магазину.");
    }
}



function showDeveloperInfo(surname, name, position = "Веб-розробник") {
    alert(`Розробник сторінки:\nПрізвище: ${surname}\nІм'я: ${name}\nПосада: ${position}`);
}




function compareStrings() {
    let str1 = prompt("Введіть перший рядок:");
    let str2 = prompt("Введіть другий рядок:");

    if (!str1 || !str2) {
        alert("Будь ласка, введіть обидва рядки.");
        return;
    }

    if (str1.length > str2.length) {
        alert(`Більший рядок: ${str1}`);
    } else if (str2.length > str1.length) {
        alert(`Більший рядок: ${str2}`);
    } else {
        alert("Рядки однакової довжини.");
    }
}