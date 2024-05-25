const spinnerContainer = document.getElementById('spinner-container');

function showSpinner() {
  spinnerContainer.classList.remove('d-none');
}

function hideSpinner() {
  spinnerContainer.classList.add('d-none');
}

export { showSpinner, hideSpinner };

