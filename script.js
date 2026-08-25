const btn_secondary1 = document.getElementById('btn_secondary1');

btn_secondary1.addEventListener('mouseover', MoveButtonRandomly);

function MoveButtonRandomly() {
    
const maxX = window.innerWidth - btn_secondary1.offsetWidth;
const maxY = window.innerHeight - btn_secondary1.offsetHeight;

const randomX = Math.random() * maxX;
const randomY = Math.random() * maxY;

btn_secondary1.style.position = 'absolute';
btn_secondary1.style.left = randomX + 'px';
btn_secondary1.style.top = randomY + 'px';
}

const btn_primary1 = document.getElementById('btn_primary1');
const img = document.getElementById('image-first');
const text = document.getElementById('text-first');


