window.onload = function () {
	confirm('Do you accept the use of cookies?');
};

let h2Title = document.getElementById('h2Title');
h2Title.innerHTML = 'Är ni i behov av en byggfirma?';

function mouseOver(img) {
	let manipulationImage = document.getElementsByClassName('image-size');
	for (let i = 0; i < manipulationImage.length; i++) {
		manipulationImage[i].style.borderRadius = '8px';
	}
	img.style.width = '300px';
	img.style.height = '250px';
}

function backToNormal(img) {
	let manipulationImage = document.getElementsByClassName('image-size');
	for (let i = 0; i < manipulationImage.length; i++) {
		manipulationImage[i].style.borderRadius = '';
	}
	img.style.width = '';
	img.style.height = '';
}

function myFunction() {
	confirm('Press a button!');
}

window.onload = function () {
	confirm('Do you accept the use of cookies?');
};
