var body = document.querySelector('body');
var scrollTop = document.querySelector('.scrollTopButton');
var logo = document.getElementById('logo');
var nav = document.getElementById('nav');
var link = document.querySelectorAll('.navLink');
var barreRemplie = document.querySelectorAll('.barreRemplie');
var closeP1 = document.querySelector('.btnCloseP1');
var closeP2 = document.querySelector('.btnCloseP2');
var closeP3 = document.querySelector('.btnCloseP3');
var slider = document.querySelector('.slider');
var workshop1Img = document.querySelector('.workshop1Img');
var workshop1 = document.querySelector('.workshop1');
var abcImg = document.querySelector('.abcImg');
var abc = document.querySelector('.abc');
var papImg = document.querySelector('.papImg');
var pap = document.querySelector('.pap');
var scrollLeftCV = document.querySelector('.scrollLeftCV');
var scrollRightCV = document.querySelector('.scrollRightCV');
var container = document.querySelector('.container');
var containerSlider = document.querySelector('.containerSlider');
var scrollLeftProjects = document.querySelector('.scrollLeftProjects');
var scrollRightProjects = document.querySelector('.scrollRightProjects');

 
//Bouton scrollTop pour remonter tout en haut de la page
var boutonScroll = function() {
  //On fait disparaitre le bouton de scroll top si on est en haut de la page
  if (window.scrollY === 0) {
    scrollTop.classList.remove('visible');
  } else {
    scrollTop.classList.add('visible');
  }
};
scrollTop.addEventListener('click', function() {
  window.scroll({
    top: 0,
    behavior: 'smooth'
  });

  var ripple = document.getElementById('rippleTop');
  ripple.classList.toggle('visible');
  //Au bout de 300ms, soit le temps de l'animation du ripple, on désactive sa classe visible
  setTimeout(function(){
    ripple.classList.toggle('visible');
  }, 300);

  //Je délaye la fonction pour qu'elle s'exécute une fois le smooth scroll terminé et pas avant
  setTimeout(function(){
    boutonScroll();
  }, 785);
});

var i = 0;
scrollLeftCV.addEventListener('click', function() {
  if (i === 0) {
  } else {
    i += 100;
    container.style.transform = "translateX(" + i + "vw)";
    container.style.transition = "transform 0.4s";
  }
});
scrollRightCV.addEventListener('click', function() {
  if (i === -200) {
  } else {
    i -= 100;
    container.style.transform = "translateX(" + i + "vw)";
    container.style.transition = "transform 0.4s";

  };
});

j = 0;
scrollLeftProjects.addEventListener('click', function() {
  if (workshop1Img.getBoundingClientRect().left >= slider.getBoundingClientRect().left+20) {
  } else {
    j +=50;
    containerSlider.style.transform = "translateX(" + j + "px)";
  }
});
scrollRightProjects.addEventListener('click', function() {
  if (papImg.getBoundingClientRect().right <= slider.getBoundingClientRect().right-20) {
  } else {
    j -=50;
    containerSlider.style.transform = "translateX(" + j + "px)";
  }
});

// On empêche le scroll naturel pour ne pas tomber entre 2 div
body.addEventListener('wheel', function(event) {
  event.preventDefault();
  //Si la nav est visible, on ne scroll pas
  if (!(nav.classList.contains('visible'))) {
    //Si on scroll en haut, on remonte de 100vh
    if (event.deltaY < 0) {
      window.scrollBy({
        top: -window.innerHeight,
        behavior: 'smooth'
      });

      //Si on scroll en bas, on descend de 100vh
    } else {
      window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth'
      });

      //Quand on apparaît sur la div du CV, les animations se lancent
      barreRemplie.forEach(function(e) {
        e.classList.add('visible');
      });
    }

    //Je délaye la fonction pour qu'elle s'exécute une fois le smooth scroll terminé et pas avant
    setTimeout(function(){
      boutonScroll();
    }, 625);
  }
});

// On empêche le scroll par les flèches
body.addEventListener('keydown', function(event) {
  event.preventDefault();
});
body.addEventListener('keyup', function(event) {
  event.preventDefault();
});

//On affiche la nav en cliquant sur le logo
logo.addEventListener('click', function() {
  nav.classList.toggle('visible');
});

//On referme la nav en cliquant sur les liens
link.forEach(function(l) {
  l.addEventListener('click', function() {
    nav.classList.toggle('visible');
    if (l.textContent === 'CV') {
      barreRemplie.forEach(function(e) {
        e.classList.add('visible');
      });
    };
  });
});

//On affiche la div du projet quand on clique dessus
workshop1Img.addEventListener('click', function() {
  workshop1.classList.toggle('visible');

  //On ferme la div quand on appuie sur close
  closeP1.addEventListener('click', function() {
    workshop1.classList.remove('visible')
  });
});
abcImg.addEventListener('click', function() {
  abc.classList.toggle('visible');

  //On ferme la div quand on appuie sur close
  closeP2.addEventListener('click', function() {
    abc.classList.remove('visible')
  });
});
papImg.addEventListener('click', function() {
  pap.classList.toggle('visible');

  //On ferme la div quand on appuie sur close
  closeP3.addEventListener('click', function() {
    pap.classList.remove('visible')
  });
});
