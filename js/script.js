let slideIndex = 1;
const slides = document.getElementsByClassName('slider');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const dots = document.getElementsByClassName('dot');

showSlides(slideIndex);

function showSlides(n) {

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }


  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }


  slides[n - 1].style.display = 'block';
  dots[n - 1].className += ' active';
}


function plusSlides(n) {
  slideIndex += n;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  } else if (slideIndex < 1) {
    slideIndex = slides.length;
  }
  showSlides(slideIndex);
}


function currentSlide(n) {
  if (n > slides.length) {
    n = 1;
  } else if (n < 1) {
    n = slides.length;
  }
  slideIndex = n;
  showSlides(slideIndex);
}


function autoSlide() {
  plusSlides(1);
}


setInterval(autoSlide, 2500);


const form = document.getElementById('formulir');
const namaInput = document.getElementById('formnama');
const emailInput = document.getElementById('formemail');
const telpInput = document.getElementById('formtelp');
const msgInput = document.getElementById('formmsg');

form.addEventListener('submit', function(event) {

  event.preventDefault();

  validateForm();
});

function validateForm() {
  const namaValue = namaInput.value.trim();
  const emailValue = emailInput.value.trim();
  const telpValue = telpInput.value.trim();
  const msgValue = msgInput.value.trim();

  if (namaValue === '') {
    showError(namaInput, 'Nama harus diisi');
  } else {
    showSuccess(namaInput);
  }

  if (emailValue === '') {
    showError(emailInput, 'Email harus diisi');
  } else if (!isValidEmail(emailValue)) {
    showError(emailInput, 'Email tidak valid');
  } else {
    showSuccess(emailInput);
  }

  if (telpValue === '') {
    showError(telpInput, 'Nomor telepon harus diisi');
  } else if (!isValidTelp(telpValue)) {
    showError(telpInput, 'Nomor telepon tidak valid');
  } else {
    showSuccess(telpInput);
  }

  if (msgValue === '') {
    showError(msgInput, 'Pesan harus diisi');
  } else {
    showSuccess(msgInput);
  }
}

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const errorText = formControl.querySelector('small');
  errorText.innerText = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

function isValidEmail(email) {
  const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  return emailRegex.test(email);
}

function isValidTelp(telp) {
  const telpRegex = /^[0-9]{4} [0-9]{4} [0-9]{4}$/;
  return telpRegex.test(telp);
}
