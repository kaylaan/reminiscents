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
	wood.style.opacity = '1'
}
function sanitizerAppear() {
	sanitizer.style.opacity = '1'
}
function chlorineAppear() {
	chlorine.style.opacity = '1'
}
function shampooAppear() {
	shampoo.style.opacity = '1'
}
function sunscreenAppear() {
	sunscreen.style.opacity = '1'
}
function cinnamonAppear() {
	cinnamon.style.opacity = '1'
}

function textDisappear() {
	wood.style.opacity = '0'
	sanitizer.style.opacity = '0'
	chlorine.style.opacity = '0'
	shampoo.style.opacity = '0'
	sunscreen.style.opacity = '0'
	cinnamon.style.opacity = '0'
}


woodSticker.addEventListener('mousedown', woodAppear);
sanitizerSticker.addEventListener('mousedown', sanitizerAppear);
chlorineSticker.addEventListener('mousedown', chlorineAppear);
shampooSticker.addEventListener('mousedown', shampooAppear);
sunscreenSticker.addEventListener('mousedown', sunscreenAppear);
cinnamonSticker.addEventListener('mousedown', cinnamonAppear);

screen.addEventListener('mouseup', textDisappear);