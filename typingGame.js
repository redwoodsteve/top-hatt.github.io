const sentence = document.getElementById('sentence').innerText;
const inputField = document.getElementById('inputField');
const timer = document.getElementById('timer');

let timeLeft = 10;
let intervalId;

inputField.addEventListener('input', () => {
    if (inputField.value === sentence) {
        alert('Congratulations! You typed the sentence correctly.');
        clearInterval(intervalId);
    }
});

intervalId = setInterval(() => {
    timeLeft--;
    timer.innerText = timeLeft;

    if (timeLeft === 0) {
        alert('Time\'s up!');
        clearInterval(intervalId);
    }
}, 1000);
