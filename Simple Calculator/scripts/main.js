/////////////// VARIABLES ///////////////

/* OPERANDS */

let firstOperand = document.querySelector("#first-operand");
let secondOperand = document.querySelector("#second-operand");

/* OPERATION BUTTONS */

let plusBtn = document.querySelector("#plus-btn");
let minusBtn = document.querySelector("#minus-btn");
let divideBtn = document.querySelector("#divide-btn");
let multiplyBtn = document.querySelector("#multiply-btn");

/* OUTPUT */

let output = document.querySelector("#output-part p");
let result = 0;

/////////////// LOGIC ///////////////

function performOperation(operation) {
    if (firstOperand.value && secondOperand.value) {
        let result;
        switch (operation) {
            case 'plus':
                result = Number(firstOperand.value) + Number(secondOperand.value);
                break;
            case 'minus':
                result = Number(firstOperand.value) - Number(secondOperand.value);
                break;
            case 'divide':
                result = Number(firstOperand.value) / Number(secondOperand.value);
                break;
            case 'multiply':
                result = Number(firstOperand.value) * Number(secondOperand.value);
                break;
            default:
                output.innerHTML = 'Неподдерживаемая операция';
                return;
        }
        const formattedResult = result.toLocaleString();
        output.style.color = 'black';
        output.innerHTML = formattedResult;

        firstOperand.value = '';
        secondOperand.value = '';
    } else {
        output.style.color = 'red';
        output.innerHTML = 'Missing value(s) when attempting to perform an operation. Try again!';
    }
}

plusBtn.addEventListener("click", () => { performOperation('plus'); });
minusBtn.addEventListener("click", () => { performOperation('minus'); });
divideBtn.addEventListener("click", () => { performOperation('divide'); });
multiplyBtn.addEventListener("click", () => { performOperation('multiply'); });