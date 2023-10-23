const showMoreButton = document.querySelector('#showMore');

const plus = `<img class="icon-sm" src="../../../../public/assets/icons/plus.svg" alt="">`;
const minus = `<img class="icon-sm" src="../../../../public/assets/icons/minus.svg" alt="">`;
var currentValue = plus;

showMoreButton.addEventListener('click', function () {
  if (currentValue === plus) {
    showMoreButton.innerHTML = minus;
    currentValue = minus;
  } else {
    showMoreButton.innerHTML = plus;
    currentValue = plus;
  }
});
