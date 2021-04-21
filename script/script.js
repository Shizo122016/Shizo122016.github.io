var slideIndex = 1;
showSlides(slideIndex);

//Kontrola nastepny/poprzedni
function plusSlides(n){
    showSlides(slideIndex +=n);
}

//Kontrola miniaturek
function currentSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n){
    let i;
    let slides = document.getElementsByClassName("moje_slajdy");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");
    if (n > slides.length){
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i ++) {
        dots[i].className = dots[i].className.replace(" aktywny", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " aktywny";
    captionText.innerHTML = dots[slideIndex-1].alt;
}