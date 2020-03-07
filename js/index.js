function add(value) {
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = resultElement.innerHTML + value;
}

function display() {
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = eval(resultElement.innerHTML.replace('÷', '/').replace('x', '*'))
}

function clearScreen() {
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = "";
}
