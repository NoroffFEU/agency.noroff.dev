const showMoreButton = document.querySelector('#showMore');

const plus = `<img class="icon-sm" src="/assets/icons/plus.svg" alt="Illustration of close icon">`;
const minus = `<img class="icon-sm" src="/assets/icons/minus.svg" alt="Illustration of close icon">`;
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
