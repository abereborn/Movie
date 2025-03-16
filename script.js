// Get the modal
let openedMovieId = ''
const modal = document.getElementById("modal");
const movieIframe = document.getElementById('modal-movie-iframe')
// Get the button that opens the modal
const images = document.querySelectorAll(".movie-image")

images.forEach((image) => {
    image.addEventListener('click', function () {
        openedMovieId = this.dataset.id
        modal.style.display = 'block'
        movieIframe.src = openedMovieId
    })
})

// Get the <span> element that closes the modal
const closeButton = document.getElementsByClassName("close")[0];

closeButton.onclick = function() {
    modal.style.display = "none";
    movieIframe.src = ""
  }

// When the user clicks on the button, open the modal
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }


//slideshow
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    console.log(n)
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1 }

    if (n < 1) { slideIndex = slides.length }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    if (slides.length) {
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }
}

