const display = document.querySelector('.display');

const appendToDisplay = (input) => {
    display.value += input;
}

const clearDisplay = () => {
    display.value = '';
}

const calculate = () => {
    try {
        display.value = eval(display.value);
    }
    catch(error) {
        display.value = 'error';
    }
};

const negate = () => {
   display.value = (display.value * -1);
}

const percent = () => {
    display.value = eval(display.value/100);
}