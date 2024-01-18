const showMoreButton = document.querySelector('#showMore');

const plus = `<img class="icon-sm" src="../../../../public/assets/icons/plus.svg" alt="">`;
const minus = `<img class="icon-sm" src="../../../../public/assets/icons/minus.svg" alt="">`;
var currentValue = plus;
/**
 * event listener that runs if the showMoreButton is pressed it then sets the currentValue and showMoreButton to eighter plus or minus
 */
showMoreButton.addEventListener('click', function () {
  if (currentValue === plus) {
    showMoreButton.innerHTML = minus;
    currentValue = minus;
  } else {
    showMoreButton.innerHTML = plus;
    currentValue = plus;
  }
});
