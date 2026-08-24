const btn_secondary = document.getElementById('btn_secondary');

btn_secondary.addEventListener('mouseover', MoveButtonRandomly);

function MoveButtonRandomly() {
    
const maxX = window.innerWidth - btn_secondary.offsetWidth;
const maxY = window.innerHeight - btn_secondary.offsetHeight;

const randomX = Math.random() * maxX;
const randomY = Math.random() * maxY;

btn_secondary.style.position = 'absolute';
btn_secondary.style.left = randomX + 'px';
btn_secondary.style.top = randomY + 'px';
}