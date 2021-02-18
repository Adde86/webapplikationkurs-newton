let imagesection = document.getElementById('imagesection');
let image = document.createElement('img');
image.style.height = '100%';
let counter = 0;
let roll = true;

let imageArray = 
[["./resources/images/private/kitchen/kitchen1.jpg","Nybyggt kök i Södertälje"], ["./resources/images/private/kitchen/kitchen2.jpg", 'Modernt kök'],
["./resources/images/private/bathroom/bathroom1.jpg", 'Badrum i ljusa färger'], ["./resources/images/private/bathroom/bathroom2.jpg", 'Nya badrum på hotellet'],
["./resources/images/private/pool/pool1.jpg", 'Modern pool'], ["./resources/images/private/pool/pool2.jpg", 'Nybyggd pool söder om Stockholm'], ["./resources/images/private/stairs/stairs.jpg", 'Modern trappa']];



imagesection.appendChild(image);

let navText = document.getElementById('info-text');
let p = document.createElement('p');
navText.appendChild(p);

imagerollFunction();

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//Loops images in array
async function imagerollFunction() {
    while (counter < imageArray.length && roll) {
        image.src = imageArray[counter][0];
        image.alt = imageArray[counter][1];
        p.innerText = imageArray[counter][1];
        counter++;
        await sleep(4000);
    }
}

//Function for buttons forward/backwards on pictures
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
        p.innerText = imageArray[counter][1];
    }
}


   





