var slideIndex = 1;
showSlides(slideIndex);

// Start autoplaying automatically
var autoplayInterval = setInterval(function() {

    // Get element via id and click next
    document.getElementById("next").click();
    
   
  }, 2500); // Do this every 1 second, increase this!

// Stop function added to button
function stopAutoplay() {

  // Stop the autoplay
  clearInterval(autoplayInterval);

}



// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slider");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function validateForm() {
  var fullname = document.getElementById("formnama").value;
  var email = document.getElementById("formemail").value;
  var phone = document.getElementById("formtelp").value;
  var message = document.getElementById("formmsg").value;

  if (fullname == "") {
    alert("Nama harus diisi");
    return false;
  }

  if (email !== "") {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Format email tidak valid");
      return false;
    }
  }

  if (phone !== "") {
    var phonePattern = /^[0-9]{9,12}$/;
    if (!phonePattern.test(phone)) {
      alert("Format nomor telepon tidak valid");
      return false;
    }
  }

  if (message == "") {
    alert("Pesan harus diisi");
    return false;
  }

  if (option == "") {
    alert("Silakan pilih opsi");
    return false;
  }

  return true;
}
