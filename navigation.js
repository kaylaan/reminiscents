let icon = document.querySelector('.menu')
let navigation = document.querySelector('nav')

function toggleIcon() {
	navigation.classList.toggle('visibility');
}

icon.addEventListener('click', toggleIcon);