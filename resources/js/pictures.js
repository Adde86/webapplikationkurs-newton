let imagesection = document.getElementById('imagesection');
let image = document.createElement('img');
image.style.height = '450px';
let counter = 0;
let roll = true;

let imageArray = [["./resources/images/private/kitchen/kitchen1.jpg", "kök"], ["./resources/images/private/kitchen/kitchen2.jpg", 'kök'],
["./resources/images/private/bathroom/bathroom1.jpg", 'badrum'], ["./resources/images/private/bathroom/bathroom2.jpg", 'badrum'],
["./resources/images/private/pool/pool1.jpg", 'pool'], ["./resources/images/private/pool/pool2.jpg", 'pool'], ["./resources/images/private/stairs/stairs.jpg", 'trappa']];

imagerollFunction();

imagesection.appendChild(image);

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function imagerollFunction() {
    while (counter < imageArray.length && roll) {
        image.src = imageArray[counter][0];
        image.alt = imageArray[counter][1];
        counter++;
        await sleep(1000);
    }
}

// Next/previous controls
function plusSlides(n) {
    roll = false;
    showSlides(counter += n);
}

function showSlides(counter) {
    if (counter >= imageArray.length) {
        counter = imageArray.length - 1;
    } else if (counter < 0) {
        counter = 0;
    } else {
        image.src = imageArray[counter][0];
        image.alt = imageArray[counter][1];
    }
}





