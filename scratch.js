let woodSticker = document.querySelector('.b');
let sanitizerSticker = document.querySelector('.e');
let chlorineSticker = document.querySelector('.h');
let shampooSticker = document.querySelector('.k');
let sunscreenSticker = document.querySelector('.n');
let cinnamonSticker = document.querySelector('.q');

let wood = document.querySelector('.a');
let sanitizer = document.querySelector('.f');
let chlorine = document.querySelector('.g');
let shampoo = document.querySelector('.l');
let sunscreen = document.querySelector('.m');
let cinnamon = document.querySelector('.r');


let screen = document.querySelector('body');

function woodAppear() {
	wood.style.display = 'flex'
}
function sanitizerAppear() {
	sanitizer.style.display = 'flex'
}
function chlorineAppear() {
	chlorine.style.display = 'flex'
}
function shampooAppear() {
	shampoo.style.display = 'flex'
}
function sunscreenAppear() {
	sunscreen.style.display = 'flex'
}
function cinnamonAppear() {
	cinnamon.style.display = 'flex'
}

function textDisappear() {
	wood.style.display = 'none'
	sanitizer.style.display = 'none'
	chlorine.style.display = 'none'
	shampoo.style.display = 'none'
	sunscreen.style.display = 'none'
	cinnamon.style.display = 'none'
}


woodSticker.addEventListener('mousedown', woodAppear);
sanitizerSticker.addEventListener('mousedown', sanitizerAppear);
chlorineSticker.addEventListener('mousedown', chlorineAppear);
shampooSticker.addEventListener('mousedown', shampooAppear);
sunscreenSticker.addEventListener('mousedown', sunscreenAppear);
cinnamonSticker.addEventListener('mousedown', cinnamonAppear);

screen.addEventListener('mouseup', textDisappear);