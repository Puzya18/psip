function calculate(a, x, b, c) {
    let y;

    if (a < 0 && c !== 0) {
        y = a * Math.pow(x, 2) + a * b + c;
    } else if (a > 0 && c === 0) {
        if (x === c) {
            alert("Ошибка: деление на ноль");
            return;
        }
        y = -a / (x - c);
    } else {
        y = a * (x + c);
    }

    return y;
}

// Пример использования функции с выводом результата
const a = -2;  // Задайте значения переменных a, x, b, c для тестирования
const x = 4;
const b = 3;
const c = 5;

const result = calculate(a, x, b, c);

document.getElementById("mathOutput").innerHTML = `Результат вычислений: ${result}`;
