
// manual slider

let imageIndex = 1;
let images = document.getElementsByClassName("image");
let prevButton = document.getElementById("prev_button");
let nextButton = document.getElementById("next_button");

function slider(num){

   if (num > images.length){
      imageIndex = 1;
   }
   if (num < 1){
      imageIndex = images.length;

   }
   for (let item of images){
      item.style.display = "none";

   }
   images[imageIndex-1].style.display = "block";
   
}
// prev 
function prevImage(){
   slider(imageIndex -= 1);
}
//next 
function nextImage() {
   slider(imageIndex +=1);
}

slider(imageIndex);
nextButton.addEventListener("click",nextImage);
prevButton.addEventListener("click",prevImage);

//auto slider

let inter;
function myFunction() {
  inter = setInterval(nextImage, 3000);
}

let startButton = document.getElementById("start");
let pauseButton = document.getElementById("pause");

startButton.onclick = function(){
   startButton.style.display ="none";
   pauseButton.style.display = "block";
   myFunction();
}
pauseButton.onclick = function(){
   startButton.style.display ="block";
   pauseButton.style.display = "none";
   clearInterval(inter);
} 
// click on image

let modal = document.getElementById("modal");
let modalImage = document.getElementById("modal_image");

for (let i = 0; i<images.length; i++){
   images[i].onclick = function () {
      modal.style.display = "block";
      modalImage.src = this.src;  
   }
}
 let close = document.getElementById("close");
 close.onclick = function(){
    modal.style.display = "none";
 }