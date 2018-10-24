var body = document.querySelector('body');

//On empêche le scroll pour ne pas tomber entre 2 div
// body.addEventListener('wheel', function(event) {
//   event.preventDefault();
// });

//Bouton de scroll down : on descend de 100vh
var scrollDown = document.querySelector('.scrollDownButton');
scrollDown.addEventListener('click', function (){
  window.scrollBy({
  top: window.innerHeight,
  // marche pas
  behaviour: 'smooth'
  // ----------
  });
});

//Bouton de scroll up : on remonte de 100vh
var scrollUp = document.querySelector('.scrollUpButton');
scrollUp.addEventListener('click', function (){
  window.scrollBy({
  top: -window.innerHeight,
  // marche pas
  behaviour: 'smooth'
  // ----------
  });
});
