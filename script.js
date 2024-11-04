var slideIndex = 0;
showSlides();

function plusSlides(n) {
    slideIndex += n;
    showSlides();
    resetAutoSlide();
}

function currentSlide(n) {
    slideIndex = n - 1;
    showSlides();
    resetAutoSlide();
}

function showSlides() {
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (slideIndex >= slides.length) { slideIndex = 0; }
    if (slideIndex < 0) { slideIndex = slides.length - 1; }
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (var i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += " active";
}

var slideTimer;
function startAutoSlide() {
    slideTimer = setInterval(function() {
        slideIndex++;
        showSlides();
    }, 2000);
}

function resetAutoSlide() {
    clearInterval(slideTimer);
    startAutoSlide();
}

startAutoSlide();
