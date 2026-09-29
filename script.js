const codeElement = document.getElementById("code");
const speedSlider = document.getElementById("speed");

const codeText = `// Welcome to Auto Code Typing 🚀

function welcomeUser(name) {
    console.log("Hello " + name);
}

function calculateSum(a, b) {
    return a + b;
}

const user = "Om";
const number1 = 10;
const number2 = 20;

welcomeUser(user);

const result = calculateSum(number1, number2);

console.log("Result:", result);

// Auto typing continues... 🔥
`;

let index = 0;
let typingTimer = null;
let isTyping = false;

function typeCode() {

    if (!isTyping) return;

    if (index >= codeText.length) {
        index = 0;
        codeElement.textContent = "";
    }

    codeElement.textContent += codeText.charAt(index);
    index++;

    const speed = 210 - Number(speedSlider.value);

    typingTimer = setTimeout(typeCode, speed);
}

function startTyping() {

    if (isTyping) return;

    isTyping = true;
    typeCode();
}

function pauseTyping() {

    isTyping = false;
    clearTimeout(typingTimer);
}

function resetTyping() {

    isTyping = false;
    clearTimeout(typingTimer);

    index = 0;
    codeElement.textContent = "";
}
