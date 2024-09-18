/*import Scrollbar from 'smooth-scrollbar';

Scrollbar.init(document.querySelector('#my-scrollbar'));
*/
document.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    const opacityImage = document.querySelector('.nav-title');
   // Calculate the desired opacity based on scroll position
   const targetOpacity = 1 - scrollPosition * 0.0015;

   // Apply a smooth transition using CSS transition property
   opacityImage.style.transition = 'opacity .5s ease';
   opacityImage.style.opacity = targetOpacity;
});
document.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    const parallaxImage = document.querySelector('.sky');
    parallaxImage.style.transform = 'translateY(' + scrollPosition * -0.3 + 'px)';
});
document.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    const parallaxImage = document.querySelector('.mountain');
    parallaxImage.style.transform = 'translateY(' + scrollPosition * -0.015 + 'px)';
});
document.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    const parallaxImage = document.querySelector('.forest-1');
    parallaxImage.style.transform = 'translateY(' + scrollPosition * -0.2 + 'px)';
});
document.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    const parallaxImage = document.querySelector('.forest-2');
    parallaxImage.style.transform = 'translateY(' + scrollPosition * -0.4 + 'px)';
});
document.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    const parallaxImage = document.querySelector('.forest-3');
    parallaxImage.style.transform = 'translateY(' + scrollPosition * -0.55 + 'px)';
});


/*
// Calculate and set the height of the parent container
function setParentHeight() {
    const parent = document.querySelector('.section1');
    const fixedChild1 = document.querySelector('.mountain-image');
    const fixedChild2 = document.querySelector('.forest1');
    const fixedChild3 = document.querySelector('.forest2');
    const fixedChild4 = document.querySelector('.forest3');
    const fixedChild5 = document.querySelector('.trees');
    const fixedChildHeight = fixedChild1.offsetHeight + fixedChild2.offsetHeight + fixedChild3.offsetHeight + fixedChild4.offsetHeight + fixedChild5.offsetHeight;

    parent.style.height += fixedChildHeight + 'px';
}
*/
// Run the function on page load and resize
window.addEventListener('load', setParentHeight);
window.addEventListener('resize', setParentHeight);
