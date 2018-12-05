var boutonsScroll = function() {
  //On fait disparaitre les boutons de scroll up et top si on est en haut de la page
  //Et le bouton scrollDown si on est en bas
  var scrollTop = document.querySelector('.scrollTopButton');
  var scrollUp = document.querySelector('.scrollUpButton');
  var scrollDown = document.querySelector('.scrollDownButton');
  var divScroll = document.querySelector('.scroll');
  if (window.scrollY === 0) {
    scrollTop.classList.remove('visible');
    scrollUp.classList.remove('visible');
    scrollDown.classList.remove('visible');
    divScroll.style.justifyContent = 'flex-end';
  } else if (window.scrollY === window.scrollMaxY) {
    scrollTop.classList.add('visible');
    scrollUp.classList.add('visible');
    scrollDown.classList.add('visible');
    divScroll.style.justifyContent = 'flex-start';
  } else {
    scrollTop.classList.add('visible');
    scrollUp.classList.add('visible');
    scrollDown.classList.remove('visible');
    divScroll.style.justifyContent = 'space-between';
  }
};


var body = document.querySelector('body');
var projet = document.querySelectorAll('.projet');
var slider = document.querySelector('.slider');
var i = 0;
// On empêche le scroll naturel pour ne pas tomber entre 2 div
body.addEventListener('wheel', function(event) {
  event.preventDefault();

  //On récupère les bords droite et gauche du slider et des div les plus à droite et à gauche
  var leftSlider = slider.getBoundingClientRect().left;
  var rightSlider = slider.getBoundingClientRect().right;
  var leftMost = document.getElementById('leftMostProject').getBoundingClientRect().left;
  var rightMost = document.getElementById('rightMostProject').getBoundingClientRect().right;

  //On scroll horizontalement quand on hover la div slider
  if (slider.classList.contains('hovered')) {
    //Si on est trop à gauche ou trop à droite on ne scroll pas
    if (Math.abs(leftSlider - leftMost) > 20) {
      console.log(leftSlider + leftMost);
      if (event.deltaY > 0) {
      } else {
        i += event.deltaY;
        projet.forEach(function(p) {
          p.style.transform = 'translateX(' + i + 'vw)';
        });
      }
    } else if (Math.abs(rightSlider - rightMost) > 20) {
      if (event.deltaY < 0) {
      } else {
        i += event.deltaY;
        projet.forEach(function(p) {
          p.style.transform = 'translateX(' + i + 'vw)';
        });
      }
    } else {
      i += event.deltaY;
      projet.forEach(function(p) {
        p.style.transform = 'translateX(' + i + 'vw)';
      });
    }

  //Si on scroll en haut, on remonte de 100vh
  } else if (event.deltaY < 0) {
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
    var barreRemplie = document.querySelectorAll('.barreRemplie');
    barreRemplie.forEach(function(e) {
      e.classList.add('visible');
    });
  };

  //Je délaye la fonction pour qu'elle s'exécute une fois le smooth scroll terminé et pas avant
  setTimeout(function(){
    boutonsScroll();
  }, 625);
});


//On fait apparaître la div du projet
var workshop = document.querySelector('.workshop');
var abc = document.querySelector('.abc');
var abcFull = document.querySelector('.abcFull');
abc.addEventListener('click', function(event) {
   abcFull.classList.add(visible);
});


// On empêche le scroll par les flèches
body.addEventListener('keydown', function(event) {
  event.preventDefault();
});
body.addEventListener('keyup', function(event) {
  event.preventDefault();
});

//Bouton scrollTop pour remonter tout en haut de la page
var scrollTop = document.querySelector('.scrollTopButton');
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
    boutonsScroll();
  }, 785);
});

//Bouton de scroll up : on remonte de 100vh
var scrollUp = document.querySelector('.scrollUpButton');
scrollUp.addEventListener('click', function (){
  window.scrollBy({
    top: -window.innerHeight,
    behavior: 'smooth'
  });

  var ripple = document.getElementById('rippleUp');
  ripple.classList.toggle('visible');
  //Au bout de 300ms, soit le temps de l'animation du ripple, on désactive sa classe visible
  setTimeout(function(){
    ripple.classList.toggle('visible');
  }, 300);

  //Je délaye la fonction pour qu'elle s'exécute une fois le smooth scroll terminé et pas avant
  setTimeout(function(){
    boutonsScroll();
  }, 625);
});

//Bouton de scroll down : on descend de 100vh
var scrollDown = document.querySelector('.scrollDownButton');
scrollDown.addEventListener('click', function (){
  window.scrollBy({
    top: window.innerHeight,
    behavior: 'smooth'
  });

  //Quand on apparaît sur la div du CV, les animations se lancent
  var barreRemplie = document.querySelectorAll('.barreRemplie');
  barreRemplie.forEach(function(e) {
    e.classList.add('visible');
  });

  //On met l'eefet de ripple sur le bouton
  var ripple = document.getElementById('rippleDown');
  ripple.classList.toggle('visible');
  //Au bout de 300ms, soit le temps de l'animation du ripple, on désactive sa classe visible
  setTimeout(function(){
    ripple.classList.toggle('visible');
  }, 300);

  //Je délaye la fonction pour qu'elle s'exécute une fois le smooth scroll terminé et pas avant
  setTimeout(function(){
    boutonsScroll();
  }, 625);
});


var slider = document.querySelector('.slider');
//On ajoute la classe hovered quand le curseur est sur le slider
slider.addEventListener('mouseover', function(event) {
  slider.classList.add('hovered');
});
//On retire la classe hovered quand le curseur n'est plus sur le slider
slider.addEventListener('mouseleave', function(event) {
  slider.classList.remove('hovered');
});
