console.log("Welcome to Devstella");

//        Fade-In Js For Scroll evenet
const fadeIns = document.querySelectorAll('.fade-in');

function checkFadeIns() {
  fadeIns.forEach(fadeIn => {
    const fadeInTop = fadeIn.getBoundingClientRect().top;
    const fadeInBottom = fadeIn.getBoundingClientRect().bottom;

    if (fadeInTop < window.innerHeight && fadeInBottom >= 0) {
      fadeIn.classList.add('active');
    } else {
      fadeIn.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', checkFadeIns);

//     move bottom to top animation


//               end of Js