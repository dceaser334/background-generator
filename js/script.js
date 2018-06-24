var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.querySelector('body');

color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);
setGradient();

function setGradient() {
  body.style.background = 'linear-gradient(to right, ' + color1.value + ', ' + color2.value + ')';
  css.textContent = body.style.background + ';';
}

function randGrad() {
  body.style.background = 'linear-gradient(to right, ' + randColor() + ', ' + randColor() + ')';
  css.textContent = body.style.background + ';'; 
}

function randColor() {
  var r = randColorProp();
  var g = randColorProp();
  var b = randColorProp();

  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

function randColorProp() {
  return Math.floor(Math.random()*256);
}