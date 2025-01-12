const userInput = document.getElementById('user-input');
const outputElement = document.getElementById('results-div');
const checkButton = document.getElementById('check-btn');
const clearButton = document.getElementById('clear-btn');

function validatePhoneNumber(str) {
    const regex = /^(1\s?)?(\d{3}|\(\d{3}\))[\s\-]?\d{3}[\s\-]?\d{4}$/;
    return regex.test(str);
}

const handleCheckButtonClick = () => {
    const input = userInput.value;

    if (input === '') { 
        alert('Please provide a phone number'); 
    } else { 
        const isValid = validatePhoneNumber(input); 
        outputElement.innerText = isValid ? `Valid US number: ${input}` : `Invalid US number: ${input}`; 
        outputElement.classList.remove('hidden'); 
    } 
}

const handleClearButtonClick = () => {
    outputElement.textContent = '';
    outputElement.classList.add('hidden')
}

checkButton.addEventListener("click", handleCheckButtonClick);
clearButton.addEventListener("click", handleClearButtonClick)