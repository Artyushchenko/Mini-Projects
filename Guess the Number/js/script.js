let input = document.querySelector("#number");
let output = document.querySelector("#message");

document.querySelector("#checkButton").addEventListener("click", checkValue);

let max = 100;
let timerId = null;
let elapsed = 0;

let attemp = 0;
let randomValue = Math.floor(Math.random() * max + 1);

alert("Бот загадал случайное число! Оно находится в диапазоне от 0 до " + max + ".");

timerId = setInterval(() => elapsed++, 1000);

output.innerHTML = "Попробуйте отгадать! Вводите значение в поле ввода!";

function checkValue() {
    attemp++;
    let currentValue = input.value;

    if (currentValue > randomValue) {
        output.innerHTML = "Бот загадал значение меньше чем " + currentValue;
    } else if (currentValue < randomValue) {
        output.innerHTML = "Бот загадал значение больше чем " + currentValue;
    }
    if (currentValue == randomValue) {
        clearInterval(timerId);
        alert(
            "Поздравляем! Вы отгадали загаданное число за " + elapsed + " секунд(ы) и с " + attemp + " попытки. " + "Это было число - " + randomValue + ".");
    }
    input.value = "";
}