const originalColor ='rgb(0, 235, 184)';
const newColor = 'rgb(105, 0, 204)';

const body = document.body;
const button = document.getElementById('themeBtn');

body.style.backgroundColor = originalColor;

function switchBackground() {
    const currentColor = window.getComputedStyle(body).backgroundColor;
    if (currentColor === 'rgb(105, 0, 204)') {
        body.style.backgroundColor = originalColor;
    } else {
        body.style.backgroundColor = newColor;
    }
}

button.addEventListener('click', switchBackground);




const button1 = document.getElementById('editJobBtn');
const output = document.getElementById('student');

function editJobPrompt() {
    const userInput = prompt("Edit my Occupation");

    if (userInput !== null) {
        output1.textContent = '${userInput}';
    } else {
        output1.textContent = "Cancelled";
    }
}
button1.addEventListener('click', editJobPrompt);


const button2 = document.getElementById('showhideSkills');
const skillSection = document.getElementById('skillSection');

function hideshowToggle()    {
    if (skillSection.classList.contains('hidden')) {
        button2.textContent = "Show Content";
    } else {
        button2.textContent = "Hide Content";
    }
}
button2.addEventListener('click', hideshowToggle);




const textInput = document.getElementById('messageBox');
const countDisplay = document.getElementById('countDisplay');

function countWords(text) {
    const trimmedText = text.trim();
    if (trimmedText == "") {
        return 0;
    }

    const words = trimmedText.split(/\s+/).filter(Boolean);
    return words.length;
}

function updatewordCount() {
    const currentText = textInput.value;
    const wordCount = countWords(currentText);
    countDisplay.textContent = wordCount;
}
textInput.addEventListener('input', updatewordCount);


function displayCurrentDate() {
    const today = new Date();

    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    const formattedDate = today.toLocaleDateString('en-US', options);
    const dateParagraph = document.getElementById("dateToday");

    if (dateParagraph) {
        dateParagraph.textContent = formattedDate;
    } else {
        console.error("Error");
    }
}
displayCurrentDate();