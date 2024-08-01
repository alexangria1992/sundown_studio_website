const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true,
});

// let a = document.querySelector('#elem1');
// var image = a.getAttribute('data-image');
// console.log(image);

var elemC = document.querySelector('#elem-container');
var fixed = document.querySelector('#fixed-image');
var elem1 = document.querySelector('#elem1');
elemC.addEventListener('mouseenter', () => {
  // console.log('mouse over');
  fixed.style.display = 'block';
});

elemC.addEventListener('mouseleave', () => {
  // console.log('mouse over');
  fixed.style.display = 'none';
});

var elems = document.querySelectorAll('.elem');
elems.forEach((e) => {
  // console.log(e);
  e.addEventListener('mouseenter', () => {
    var image = e.getAttribute('data-image');
    fixed.style.backgroundImage = `url(${image})`;
  });
});
