let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("MyNFTs");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < slides.length; i++) {
    slides[i].className = slides[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 400); // Change image every 0.4 seconds
}