function exampleOperators() {
    // Оператор if
    let num = 10;
    if (num > 5) {
        alert("Число больше 5");
    }

    // Оператор switch
    let day = 1;
    switch (day) {
        case 1:
            alert("Понедельник");
            break;
        case 2:
            alert("Вторник");
            break;
        case 3:
            alert("Среда");
            break;
        default:
            alert("Неизвестный день");
    }

    // Оператор for
    for (let i = 0; i < 3; i++) {
        console.log("Итерация " + i);
    }

    // Оператор while
    let count = 0;
    while (count < 3) {
        console.log("Счётчик " + count);
        count++;
    }

    // Оператор do...while
    let x = 0;
    do {
        console.log("Значение x " + x);
        x++;
    } while (x < 3);

    // Оператор break и continue
    for (let i = 0; i < 5; i++) {
        if (i === 2) continue;
        if (i === 4) break;
        console.log("Значение " + i);
    }

    // Оператор return
    function sum(a, b) {
        return a + b;
    }
    alert("Сумма 2 и 3: " + sum(2, 3));
}