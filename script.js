document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const menuOverlay = document.querySelector('.menu-overlay');

  menuOverlay.addEventListener('click', function() {
    menuToggle.checked = false;
  });
});




// Save scroll position before animation frame
let scrollPos = window.scrollY;
// After animation update, restore scroll position
window.scrollTo(0, scrollPos);



const words = ["Web Developer", "Bomb Designer", "Web Designer", "Script Writer"];
let i = 0;
const typingSpan = document.querySelector('.typing-text');

function typeWord(word, callback) {
  let idx = 0;
  typingSpan.textContent = "";
  const interval = setInterval(() => {
    typingSpan.textContent += word[idx];
    idx++;
    if (idx === word.length) {
      clearInterval(interval);
      setTimeout(callback, 2000); // pause before next word
    }
  }, 150);
}

function loopWords() {
  typeWord(words[i], () => {
    i = (i + 1) % words.length;
    loopWords();
  });
}

document.addEventListener("DOMContentLoaded", loopWords);
