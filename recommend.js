
let image = document.querySelector('.main');
let text = document.querySelector('.scent')
let scents = ['wood', 'sanitizer', 'chlorine', 'shampoo', 'sunscreen', 'cinnamon'];
let chosenScent;

function randomImage() {
	chosenScent = scents[Math.floor(Math.random()*scents.length)];
	// console.log(chosenScent);

	if (chosenScent == 'wood') {
		image.src = 'images/wood-450.jpg'
		image.srcset = 'images/wood-450.jpg 450w, images/wood-900.jpg 900w'
		image.alt = 'Wooden playground'
		text.innerHTML = "Wood"
	} else if (chosenScent == 'sanitizer') {
		image.src = 'images/sanitizer-450.jpg'
		image.srcset = 'images/sanitizer-450.jpg 450w, images/sanitizer-900.jpg 900w'
		image.alt = 'Close-up of green liquid hand sanitizer'
		text.innerHTML = "Hand Sanitizer"
	} else if (chosenScent == 'chlorine') {
		image.src = 'images/chlorine-450.jpg'
		image.srcset = 'images/chlorine-450.jpg 450w, images/chlorine-900.jpg 900w'
		image.alt = 'Close-up of pool pattern'
		text.innerHTML = "Chlorine"
	} else if (chosenScent == 'shampoo') {
		image.src = 'images/shampoo-450.jpg'
		image.srcset = 'images/shampoo-450.jpg 450w, images/shampoo-900.jpg 900w'
		image.alt = 'Bathroom countertop with bath products'
		text.innerHTML = "Shampoo"
	} else if (chosenScent == 'sunscreen') {
		image.src = 'images/sunscreen-450.jpg'
		image.srcset = 'images/sunscreen-450.jpg 450w, images/sunscreen-900.jpg 900w'
		image.alt = 'Pink and orange sunset'
		text.innerHTML = "Sunscreen"
	} else if (chosenScent == 'cinnamon') {
		image.src = 'images/cinnamon-450.jpg'
		image.srcset = 'images/cinnamon-450.jpg 450w, images/cinnamon-900.jpg 900w'
		image.alt = 'Plate of chocolate chip cookies'
		text.innerHTML = "The Holidays"
	}
}

image.addEventListener('click', randomImage);