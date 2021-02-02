const exteriorButton = document.getElementById("btn-exterior");
const interiorButton = document.getElementById("btn-interior");
const main = document.getElementById("main");


let interior = ['./resources/images/altan1.jpg', './resources/images/altan2.jpg', './resources/images/altan3.jpg', './resources/images/shower1.jpg',
 './resources/images/shower2.jpg', './resources/images/bathroom-sink.jpg']

 let exterior = ['./resources/images/altan1.jpg'];

loadPictures(interior);

exteriorButton.onclick = function(){
    loadPictures(exterior)
}

interiorButton.onclick = function(){
    loadPictures(interior);
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
            this.classList.toggle("image-full-screen")
        })
    }

}

