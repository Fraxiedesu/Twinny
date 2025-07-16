const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const modal = document.getElementById('modal');
const letter = document.getElementById('letter');

let grow = 1;

noBtn.addEventListener('mouseenter', moveButton);
noBtn.addEventListener('click', () => {
  moveButton();
  grow += 0.1;
  yesBtn.style.transform = `scale(${grow})`;
});

yesBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
  letter.classList.remove('hidden');
});

function moveButton() {
  const maxX = window.innerWidth - noBtn.offsetWidth - 20;
  const maxY = window.innerHeight - noBtn.offsetHeight - 20;
  const x = Math.random() * maxX;
  const y = Math.random() * maxY;
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}