// window.onload = function () {
// 	confirm('Do you accept the use of cookies?');
// };

let h2Title = document.getElementById('h2Title');
h2Title.innerHTML = 'Är ni i behov av en byggfirma?';

function mouseOver(img) {
	let manipulationImage = document.getElementsByClassName('image-size');
	let manipulationText = document.getElementsByClassName('centered');

	for (let i = 0; i < manipulationImage.length; i++) {
		manipulationImage[i].style.borderRadius = '8px';
	}
	img.style.width = '270px';
	img.style.height = '220px';

	for (let i = 0; i < manipulationText.length; i++) {
		manipulationText[i].style.fontSize = '110%';
	}
}

function backToNormal(img) {
	let manipulationImage = document.getElementsByClassName('image-size');
	let manipulationText = document.getElementsByClassName('centered');
	for (let i = 0; i < manipulationImage.length; i++) {
		manipulationImage[i].style.borderRadius = '';
	}
	img.style.width = '';
	img.style.height = '';

	for (let i = 0; i < manipulationText.length; i++) {
		manipulationText[i].style.fontSize = '';
	}
}
// function TextAffectImageSize() {
// 	let manipulationImage = document.getElementsByClassName('image-size');
// 	let manipulationText = document.getElementsByClassName('centered');
// 	if (mouseOver()) {
// 		img.style.width = '270px';
// 		img.style.height = '220px';
// 	} else {
// 		img.style.width = '';
// 		img.style.height = '';
// 	}
// }
$('#img').hover(function () {
	$('image-size').hemsida - style.css('height', '220px');
});
