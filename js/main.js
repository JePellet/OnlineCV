var boutonsScroll = function() {
  //On fait disparaitre les boutons de scroll up et top si on est en haut de la page
  //Et le bouton scrollDown si on est en bas
  var scrollTop = document.querySelector('.scrollTopButton');
  var scrollUp = document.querySelector('.scrollUpButton');
  var scrollDown = document.querySelector('.scrollDownButton');
  if (window.scrollY === 0) {
    scrollTop.classList.remove('visible');
    scrollUp.classList.remove('visible');
    scrollDown.classList.remove('visible');
  } else if (window.scrollY === window.scrollMaxY) {
    scrollTop.classList.add('visible');
    scrollUp.classList.add('visible');
    scrollDown.classList.add('visible');
  } else {
    scrollTop.classList.add('visible');
    scrollUp.classList.add('visible');
    scrollDown.classList.remove('visible');
  }
};


var body = document.querySelector('body');
var logo = document.getElementById('logo');
var nav = document.getElementById('nav');
// On empêche le scroll naturel pour ne pas tomber entre 2 div
body.addEventListener('wheel', function(event) {
  event.preventDefault();

  //Si la nav est visible, on en scroll pas
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
    }

    //Je délaye la fonction pour qu'elle s'exécute une fois le smooth scroll terminé et pas avant
    setTimeout(function(){
      boutonsScroll();
    }, 625);
  }
});


//On affiche la nav en cliquant sur le logo
logo.addEventListener('click', function () {
  nav.classList.toggle('visible');
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
