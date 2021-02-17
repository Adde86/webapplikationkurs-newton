const exteriorButton = document.getElementById("btn-exterior");
const interiorButton = document.getElementById("btn-interior");
const main = document.getElementById("main");
let imageList = 'interior';

var mobilSize = window.matchMedia("(max-width: 375px)")



let interior = [ './resources/images/kitchen.jpg', './resources/images/shower1.jpg',
 './resources/images/shower2.jpg', './resources/images/bathroom-sink.jpg']

 let exterior = ['./resources/images/altan1.jpg', './resources/images/altan2.jpg',
  './resources/images/altan3.jpg', './resources/images/uteservering.jpg'];


 smallScreenImages(mobilSize)
mobilSize.addListener(smallScreenImages)
//loadPictures(interior);

exteriorButton.onclick = function(){
    imageList = 'exterior'
    smallScreenImages(mobilSize)
    
}

interiorButton.onclick = function(){
    imageList = 'interior'
    smallScreenImages(mobilSize)
    
}



function loadPictures(images){
    let imageDivs = document.querySelectorAll(".image-wrapper");

    for(let imageDiv of imageDivs) {
        main.removeChild(imageDiv)
    }

    for(let imageUrl of images){
        let div = document.createElement("div")
        let image = document.createElement("img")
        image.setAttribute("src", imageUrl)
        div.classList.add("image-wrapper")
        div.append(image)
        main.append(div)

        div.addEventListener('click', function(){

            imageDivs = document.querySelectorAll(".image-wrapper")

            if(this.classList.contains("image-full-screen")){
                this.classList.remove("image-full-screen")
                main.classList.remove("single-image")

                for(let imageDiv of imageDivs){
                        imageDiv.classList.remove("invisible")
            
                }

            }else {
                this.classList.add("image-full-screen")
                main.classList.add("single-image")

            for(let imageDiv of imageDivs){
                if(!imageDiv.classList.contains("image-full-screen")){
                    imageDiv.classList.add("invisible")
                }
            }
            }
            
        })
    }

}


function smallScreenImages(mobileSize) {

    
        switch(imageList){
            case 'interior':
                mobilSize.matches ? mobileImageView(interior) : loadPictures(interior)
               break;
            case 'exterior':
                mobilSize.matches ? mobileImageView(exterior) : loadPictures(exterior)
                break;
        }
   
    
    
    

}

function mobileImageView(images){

    let imageDivs = document.querySelectorAll(".image-wrapper");

    for(let imageDiv of imageDivs) {
        main.removeChild(imageDiv)
    }

    let img = document.createElement("img")
    let div = document.createElement("div")
    let imageNavDiv = document.createElement("div")
    let leftButton = document.createElement("button")
    let rightButton = document.createElement("button")
    let imageNr = document.createElement("span")
    let totalNr = document.createElement("span")
    let nrText = document.createElement("p")
    imageNr.setAttribute("id", "image-nr")
    totalNr.setAttribute("id", "total-nr")
    nrText.append(imageNr)
    nrText.append(document.createTextNode(" / "))
    nrText.append(totalNr)

    rightButton.setAttribute("id", "right-btn")
    leftButton.setAttribute("id", "left-btn")
    div.classList.add("image-wrapper")
    div.classList.add("image-fullscreen")
    main.classList.add("single-image")
    img.setAttribute("src", images[0])
    let index = 0;

   
    imageNr.innerText = `${index +1}`;
    totalNr.innerText = images.length

    rightButton.innerText = "Next"
    leftButton.append(document.createTextNode("Prev"))

    imageNavDiv.append(leftButton)
    imageNavDiv.append(nrText)
    imageNavDiv.append(rightButton)
    imageNavDiv.setAttribute("id", "image-nav-div")
    
    
    div.append(img)
    div.append(imageNavDiv)
    main.append(div)

    leftButton.addEventListener('click', () => {
        if(index > 0){
            index--;
            img.setAttribute("src", images[index])
            imageNr.innerText = `${index +1}`;
            
        }
    })

    rightButton.addEventListener('click', () => {
        if(index < images.length -1){
            index++;
            img.setAttribute("src", images[index])
            imageNr.innerText = `${index +1}`;
        }

    })

}

