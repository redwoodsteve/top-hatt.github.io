const sentences = [
    'The quick brown fox jumps over the lazy dog.',
    'How old is the kid?.',
    'Woah! That is amazing!',
    'The sun rises in the east.,
    'We love reading books.',
    'She is baking a cake.',
    'The dog is chasing its tail.',
    'It’s raining outside.',
    'He is playing the guitar.',
    'The baby is sleeping.',
    'I am learning a new language.',
    'She is painting a picture.',
    'The cat is climbing the tree.',
    'He is writing a novel.',
    'They are playing soccer in the park.',
    'We are going on a trip.',
    'She is dancing in the rain.',
    'The bird is singing on the branch.',
    'He is cooking dinner.',
    'I am watching a movie.',
    'They are building a sandcastle.',
    'The leaves are falling from the trees.',
    'She is swimming in the pool.'

];
let currentSentenceIndex = 0;

const sentenceDiv = document.getElementById('sentence');
const inputField = document.getElementById('inputField');
const timerDiv = document.getElementById('timer');

let timeLeft = 15;
let intervalId;

function startGame() {
    sentenceDiv.innerText = sentences[currentSentenceIndex];
    inputField.value = '';
    timeLeft = 15;
    timerDiv.innerText = timeLeft;

    inputField.addEventListener('input', checkInput);
    intervalId = setInterval(updateTimer, 1000);
}

function checkInput() {
    if (inputField.value === sentences[currentSentenceIndex]) {
        clearInterval(intervalId);
        inputField.removeEventListener('input', checkInput);

        if (currentSentenceIndex < sentences.length - 1) {
            currentSentenceIndex++;
            setTimeout(startGame, 5000); // Wait for 5 seconds before starting the next round
        } else {
            alert('Congratulations! You completed all the sentences.');
        }
    }
}

function updateTimer() {
    timeLeft--;
    timerDiv.innerText = timeLeft;

    if (timeLeft === 0) {
        clearInterval(intervalId);
        inputField.removeEventListener('input', checkInput);
        alert('Time\'s up!');
    }
}

startGame();
