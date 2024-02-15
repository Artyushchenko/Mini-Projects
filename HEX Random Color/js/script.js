let colorArea = document.querySelector(".color-area");
let spanElement = document.querySelector("span");
let button = document.querySelector("#button");

function getRandomColor() {
    let symbols = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color = color + symbols[Math.floor(Math.random() * 16)];
    }

    colorArea.style.background = color;
    spanElement.textContent = color;
}

button.addEventListener("click", getRandomColor);

spanElement.addEventListener("click", () => {
    navigator.clipboard.writeText(spanElement.textContent).then(alert("Successfully copied to clipboard."));
});