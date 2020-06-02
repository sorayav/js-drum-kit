'use strict';

window.addEventListener('keydown', (ev) => {
  const audio = document.querySelector(`audio[data-key="${ev.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${ev.keyCode}"]`);
  console.log(key)
  if (!audio) return; // stops the function if there's not audio associated with the key pressed.
  audio.currentTime = 0; // rewind to the start to 'force' key sounding whenever pressed even if its sound's still playing. 
  audio.play();
});