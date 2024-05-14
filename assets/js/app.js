const targetWord = "banana";

function checkGuess() {
  const guess = document.getElementById("guess").value.toLowerCase().trim();

  if (guess === targetWord) {
    displayFeedback("Congratulations! You guessed the word correctly!");
  } else {
    const feedback = generateFeedback(guess);
    displayFeedback(feedback);
  }
}

function generateFeedback(guess) {
  let feedback = "";

  for (let i = 0; i < targetWord.length; i++) {
    if (targetWord[i] === guess[i]) {
      feedback += guess[i];
    } else {
      feedback += "-";
    }
  }

  return feedback;
}

function displayFeedback(feedback) {
  const feedbackDiv = document.getElementById("feedback");
  feedbackDiv.textContent = feedback;
}
