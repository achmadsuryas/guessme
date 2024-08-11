//Guess Me - Tebak Angka
let targetNumber;
let numberOfGuesses;
let timeLeft;
let timerInterval;
let gamePaused;
let currentTime;
let score = 0;

function startGame(duration) {
  clearInterval(timerInterval);
  
  targetNumber = Math.floor(Math.random() * 50) + 1;
  numberOfGuesses = 0;
  timeLeft = duration;
  currentTime = duration;
  updateTimer();
  document.getElementById("guessInput").disabled = false;
  document.getElementById("message").textContent = "";
  document.getElementById("timeLeft").textContent = timeLeft;
  document.getElementById("guessInput").value = "";
  document.getElementById("guessInput").focus();
  gamePaused = false;
}

function updateTimer() {
  const timer = document.getElementById("timeLeft");
  if (timeLeft > 0 && !gamePaused) {
    timer.textContent = timeLeft + " detik";
    timerInterval = setTimeout(updateTimer, 1000);
    timeLeft--;
  } else if (timeLeft === 0 && !gamePaused) {
    timer.textContent = "Habis!";
    document.getElementById("guessInput").disabled = true;
    document.getElementById("tebak").disabled = true;
    document.getElementById("message").textContent = `Waktu telah habis. Angka yang benar adalah ${targetNumber}.`;
  }
}

function checkGuess() {
  const guessInput = document.getElementById("guessInput");
  const message = document.getElementById("message");
  const userGuess = parseInt(guessInput.value);
  
  if (isNaN(userGuess) || userGuess < 1 || userGuess > 50) {
    message.textContent = "Masukkan angka antara 1 - 50.";
  } else {
    numberOfGuesses++;
    if (userGuess === targetNumber) {
      message.textContent = `Selamat! Anda menebak angka ${targetNumber} dengan ${numberOfGuesses} tebakan.`;
      clearInterval(timerInterval);
      guessInput.disabled = true;
    } else if (userGuess < targetNumber) {
      message.textContent = "Tebakan Anda terlalu rendah. Coba lagi!";
    } else {
      message.textContent = "Tebakan Anda terlalu tinggi. Coba lagi!";
    }
  }

  guessInput.value = "";
  guessInput.focus();
}

//Audio Controller GuessMe
const audio = document.getElementById('backsound');
const audioControl = document.getElementById('audio-control');

audioControl.addEventListener('click', function () {
    if (audio.muted) {
        audio.muted = false;
        audioControl.classList.remove('fa-volume-mute');
        audioControl.classList.add('fa-volume-up');
    } else {
        audio.muted = true;
        audioControl.classList.remove('fa-volume-up');
        audioControl.classList.add('fa-volume-mute');
    }
});

//Disabled Inspect
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});


//Cek (CLick) -> Enter
window.addEventListener("keyup", (event) => {
  if (event.code == "Enter") {
    cekTebakan();
  }
});