const player = document.getElementById("player")
const toggle = document.querySelector('[aria-pressed]');

toggle.addEventListener('click', (e) => {  
  let pressed = e.target.getAttribute('aria-pressed') === 'true';
  e.target.setAttribute('aria-pressed', String(!pressed));
  if (pressed) {
    player.classList.add("visually-hidden")
    toggle.textContent = "Show player"
  } else {
    player.classList.remove("visually-hidden")
    toggle.textContent = "Hide player"
  }
});

function playSong(id) {
  player.src = `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&enablejsapi=1`
}