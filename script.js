// Navigation functions
function goToColorGame() {
  document.getElementById("intro").classList.add("hidden");
  document.getElementById("colorGame").classList.remove("hidden");
}

// Mini game logic
function wrong(game) {
  alert(`Oops! Wrong ${game} 😈 Try again!`);
}

function correct(game) {
  if(game === 'color') {
    alert("YAAAY! You guessed my favorite color 💜");
    document.getElementById("colorGame").classList.add("hidden");
    document.getElementById("foodGame").classList.remove("hidden");
  }
  if(game === 'food') {
    alert("Correct! Pizza 🍕 You know me too well 😏");
    document.getElementById("foodGame").classList.add("hidden");
    document.getElementById("proposal").classList.remove("hidden");
  }
}

// Runaway NO button
function runAway() {
  const noBtn = document.getElementById("noBtn");
  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * 80 + "%";
  noBtn.style.top = Math.random() * 80 + "%";
}

// YES button
function yes() {
  document.getElementById("proposal").classList.add("hidden");
  document.getElementById("final").classList.remove("hidden");
}
