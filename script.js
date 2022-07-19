// About
text_about_me = document.querySelector(".text_about_me")
window.onscroll = function() {scrollText()};

function scrollText() {
    if (document.documentElement.scrollTop > 350) {  
      text_about_me.style.transform = "scale(1)";
    }
    else {
      text_about_me.style.transform = "scale(.1)";
    }
}
// About


// Carousel
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    

  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 7000);
}
// Carousel


// Icon
setInterval(instagram, 1000)
function instagram() {
  document.querySelectorAll("#insta").forEach(element => {element.classList.toggle("instagram");       
  })
}

setInterval(facebook, 1000)
function facebook() {
  document.querySelectorAll("#face").forEach(element => {element.classList.toggle("facebook");       
  })
}

setInterval(github, 1000)
function github() {
  document.querySelectorAll("#gith").forEach(element => {element.classList.toggle("github");       
  })
}

setInterval(linkedin, 1000)
function linkedin() {
  document.querySelectorAll("#link").forEach(element => {element.classList.toggle("linkedin");       
  })
}

setInterval(twitter, 1000)
function twitter() {
  document.querySelectorAll("#twit").forEach(element => {element.classList.toggle("twitter");       
  })
}

setInterval(whatsapp, 1000)
function whatsapp() {
  document.querySelectorAll("#what").forEach(element => {element.classList.toggle("whatsapp");       
  })
}
// Icon

