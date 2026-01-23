// Select all keys
const keys = document.querySelectorAll('.key');

// -- Listeners -- //
// Add event listeners to each key
keys.forEach((key) => {
  key.addEventListener('click', () => playNote(key));
});

// Handlers -- //
// Function to play the note associated with a key
function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note);
  noteAudio.currentTime = 0;
  noteAudio.play();
}