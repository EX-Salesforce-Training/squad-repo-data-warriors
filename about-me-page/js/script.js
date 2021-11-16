// create array of buttons
const buttons = document.querySelectorAll('button');
const display = document.querySelector('#calc-display');

// add eventListener to each button
buttons.forEach(function (button) {
    button.addEventListener('click', calculate);
});

// calculate function
function calculate(event) {
    // current clicked buttons value
    const clickedButtonValue = event.target.value;

    if (clickedButtonValue === '=') {
        // check if the display is not empty then only do the calculation
        if (display.value !== '') {
            // using eval() funct to determing arithmetic expression
            display.value = eval(display.value);
        }
    } else if (clickedButtonValue === 'C') {
        // clear display
        display.value = ''; 
    } else {
        // else display current expression
        display.value += clickedButtonValue;
    }
}