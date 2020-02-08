// function currentSlide(n) {
//   showSlides((slideIndex = n));
// }

// function showSlides(n) {
//   let i;
//   var slides = document.getElementsByClassName("details");
//   var dots = document.getElementsByClassName("poster");
//   var captionText = document.getElementById("caption");
//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace("active", "");
//   }
//   slides[slideIndex - 1].style.display = "block";
//   dots[slideIndex - 1].className += " active";
//   captionText.innerHTML = dots[slideIndex - 1].alt;
// }

// window.onload = function () {
//   //Formatting responsive navigation menu
//   var navbar = document.getElementById("navbar");
//   var checkbox = document.getElementById("check");
//   var wrapper = document.getElementById("wrapper");
//   // var upScroll = document.getElementById("top-scroll");

//   navbar.style.display = (document.documentElement.clientWidth > 767) ? "block" : "none";

//   checkbox.addEventListener("change", function () {
//   navbar.style.height = (this.checked) ? "auto" : "0";
//   navbar.style.display = (this.checked) ? "block" : "none";
//   }, false)

//   window.onresize = function () {
//   // navbar.style.top = (window.innerWidth <= 767) ? wrapper.scrollTop + 50 + "px" : wrapper.scrollTop + "px";
//   navbar.style.height = (document.documentElement.clientWidth > 767) ? "auto" : (checkbox.checked) ? "auto" : "0";
//   navbar.style.display = (document.documentElement.clientWidth > 767) ? "block" : (checkbox.checked) ? "block" : "none";
//   }
// }

const moviePoster = document.querySelectorAll('.poster');
const modalOuter = document.querySelector('.modal-outer');
const modalInner = document.querySelector('.modal-inner');

function handlePosterClick(e) {
  const elClicked = e.currentTarget;
  const movie = elClicked.closest('.movie-poster');
  console.log(this);
  console.log(movie);

  // Grab the image src
  const imgSrc = movie.querySelector('img').src;
  const desc = movie.dataset.description;

  // populate the modal with the new info
  modalInner.innerHTML =`
  <img src="${imgSrc}" />
  <p>${desc}</p>
  `;

  // show the modal
  modalOuter.classList.add('open');
}

moviePoster.forEach(poster => poster.addEventListener('click', handlePosterClick));
