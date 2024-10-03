function add(number1, number2){
    return number1 + number2;
}

function subtract(number1, number2){
    return number1 - number2;
}

function multiply(number1, number2){
    return number1 * number2;
}

function divide(number1, number2){
    return number1 / number2;
}

let addition = document.getElementById('add');
addition.addEventListener('click', function(){
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;

    const result = add(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});

let subtraction = document.getElementById('subtract');
subtraction.addEventListener('click', function(){
    const number3 = parseFloat(document.getElementById('number1').value) || 0;
    const number4 = parseFloat(document.getElementById('number2').value) || 0;

    const result = subtract(number3, number4);
    document.getElementById('calculation-result').textContent = result;
});

let multiplication = document.getElementById('multiply');
multiplication.addEventListener('click', function(){
    const number5 = parseFloat(document.getElementById('number1').value) || 0;
    const number6 = parseFloat(document.getElementById('number2').value) || 0;

    const result = multiply(number5, number6);
    document.getElementById('calculation-result').textContent = result;
});

let division = document.getElementById('divide');
division.addEventListener('click', function(){
    const number7 = parseFloat(document.getElementById('number1').value) || 0;
    const number8 = parseFloat(document.getElementById('number2').value) || 0;

    const result = divide(number7, number8);
    document.getElementById('calculation-result').textContent = result;
});