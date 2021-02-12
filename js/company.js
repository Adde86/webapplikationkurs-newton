let imageArray = [
    ["../resources/images/bar/bar1.jpg", "bar"], 
    ["../resources/images/bar/bar2.jpg", "bar"], 
    ["../resources/images/bar/bar3.jpg", "bar"],
    ["../resources/images/bar/bar4.jpg", "bar"],

    ["../resources/images/kontor/kontor1.jpg", "kontor"], 
    ["../resources/images/kontor/kontor2.jpg", "kontor"], 
    ["../resources/images/kontor/kontor3.jpg", "kontor"],
    ["../resources/images/kontor/kontor4.jpg", "kontor"],
    ["../resources/images/kontor/kontor5.jpg", "kontor"],
    
    ["../resources/images/cafe/cafe1.jpg", "cafè"], 
    ["../resources/images/cafe/cafe2.jpg", "cafè"],
    ["../resources/images/cafe/cafe3.jpg", "cafè"],
    ["../resources/images/cafe/cafe4.jpg", "cafè"],
    ["../resources/images/cafe/altan1.jpg", "altan"],

    ["../resources/images/paddel/paddel1.jpg", "paddelhall"],
    ["../resources/images/paddel/paddel2.jpg", "paddelhall"],
    ["../resources/images/paddel/paddel3.jpg", "paddelhall"],
    ["../resources/images/paddel/paddel4.jpg", "paddelhall"]];
    

let counter = 0;
let stop = 0;
let roll = true;
let imageSection = document.getElementById("image-section");
let image = document.createElement('img');
image.style.height = "450px";
imageSection.appendChild(image); 
imageRoller();

async function imageRoller(){
    while(counter < imageArray.length && roll){
        image.src = imageArray[counter][0];
        image.alt = imageArray[counter][1];
        counter++;
        await sleep(4000); 
    }
 }

 function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  function plusSlides(n) {
     roll = false;
    imageSlider(counter += n)
  }


  function imageSlider(counter){
     if (counter >= imageArray.length){
         counter = imageArray.length -1;
     }else if (counter < 0){
         counter = 0;
     }else{
        image.src = imageArray[counter][0];
        image.alt = imageArray[counter][1]; 
     }
}










    
    
    
    

    
    
    
    

    


