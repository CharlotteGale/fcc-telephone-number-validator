const userInput = document.getElementById('user-input');
const outputElement = document.getElementById('results');
const checkButton = document.getElementById('check-btn');
const clearButton = document.getElementById('clear-btn');

function validatePhoneNumber(str) {
    const regex = /^(1\s?)?(\d{3}|\(\d{3}\))[\s\-]?\d{3}[\s\-]?\d{4}$/;
    return regex.test(str);
}

const handleCheckButtonClick = (userInput) => {
    
    let errorMessage;

    if (userInput === '') {
        errorMessage = 'Please provide a phone number';
    };

    if (!errorMessage) {
        const validatedNumber = validatePhoneNumber(userInput);
        outputElement.innerText = validatedNumber;
    } else {
        outputElement.textContent = errorMessage;
    };

    outputElement.classList.toggle('hidden', !errorMessage)
}

const handleClearButtonClick = () => {
    outputElement.textContent = '';
}

checkButton.addEventListener("click", handleCheckButtonClick);
clearButton.addEventListener("click", handleClearButtonClick)