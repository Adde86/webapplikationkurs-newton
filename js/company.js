let imageArray = [
    ["../resources/images/bar/bar1.jpg", "Bar på Cafe Ellie i Skanstull."], 
    ["../resources/images/kontor/kontor2.jpg", "kontorsnickeri för IT-Sweden."],
    ["../resources/images/cafe/cafe4.jpg", "Snickeri för Cafè Jones"],
    ["../resources/images/paddel/paddel2.jpg", "Tillbyggnad av världens största paddelhall i Södertälje"],
    ["../resources/images/bar/bar2.jpg", "Ny byggd bardisk för restaurang Viking."], 
    ["../resources/images/kontor/kontor4.jpg", "Renovering av hemmakontor."],
    ["../resources/images/cafe/cafe2.jpg", "Snickeri bord och stolar för Cafè i Tumba."],
    ["../resources/images/paddel/paddel3.jpg", "Nya glaspartier för Paddelhall."],
    ["../resources/images/bar/bar3.jpg", "Utbyggnad av bar på gärdet."],
    ["../resources/images/kontor/kontor3.jpg", "Hemma renovering samt kontorsyta för privatkund."],
    ["../resources/images/cafe/cafe3.jpg", "Ny inredning och snickeri för Cafè Dubai."],
    ["../resources/images/paddel/paddel1.jpg", "Fler barnor för Södertälje Paddelhall."],
    ["../resources/images/bar/bar4.jpg", "Nybyggd bar för restaurang Italy."],
    ["../resources/images/kontor/kontor1.jpg", "Utbyggnad av kontor för Bill Gates."], 
    ["../resources/images/cafe/cafe1.jpg", "cafè"],  
    ["../resources/images/cafe/altan1.jpg", "Ny altan för restaurang Star i spanien"],
    ["../resources/images/kontor/kontor5.jpg", "kontor"],
    ["../resources/images/paddel/paddel4.jpg", "Ny disk på södertälje paddelhall"]];
    
let counter = 0;
let stop = 0;
let roll = true;
let imageSection = document.getElementById("image-section");
let image = document.createElement('img');
image.style.height = "450px";
imageSection.appendChild(image); 

let infoText = document.getElementById('info-text');
let p = document.createElement('p');
infoText.appendChild(p);

imageRoller();

async function imageRoller(){
    while(counter < imageArray.length && roll){
        image.src = imageArray[counter][0];
        image.alt = imageArray[counter][1];
        p.innerText = imageArray[counter][1]
        counter++;
        await sleep(4000); 
    }
 }

 /* function pic(type) {
    for(let i = 0; i < imageArray.length-1; i++){
        roll = false;
        if(imageArray[i][1] === type){
            imageSlider(i);
        }
    }   
 } */

 function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  function plusSlides(n) {
    imageSlider(counter += n)
  }

  function imageSlider(counter){
      roll = false;
     if (counter >= imageArray.length){
         counter = imageArray.length -1;
     }else if (counter < 0){
         counter = 0;
     }else{
        image.src = imageArray[counter][0];
        image.alt = imageArray[counter][1]; 
        p.innerText = imageArray[counter][1];
     }
}










    
    
    
    

    
    
    
    

    


