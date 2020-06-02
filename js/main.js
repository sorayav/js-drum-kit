'use strict';

window.addEventListener('keydown', (ev) => {
  const audio = document.querySelector(`audio[data-key="${ev.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${ev.keyCode}"]`);
  if (!audio) return; // stops the function if there's not audio associated with the key pressed.
  audio.currentTime = 0; // rewind to the start to 'force' key sounding whenever pressed even if its sound's still playing. 
  audio.play();
  key.classList.add('playing');
});

function removeTransition (ev) {
  if (ev.propertyName !== 'transform') return; // skip property if it's not a transform.
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));