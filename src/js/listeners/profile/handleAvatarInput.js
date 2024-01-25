export function handleAvatarInput() {
  const applicantInput = document.querySelector('#avatarInput');
  const applicantLabel = document.querySelector('#avatarLabel');
  const companyInput = document.querySelector('#logoInput');
  const companyLabel = document.querySelector('#logoLabel');

  // Open logo or avatar input
  window.addEventListener('click', (e) => {
    if (e.target === applicantLabel || e.target === companyLabel) {
      applicantInput.classList.remove('d-none');
      companyInput.classList.remove('d-none');
    }
  });

  // To close avatar input
  window.addEventListener('click', (e) => {
    if (e.target !== applicantLabel && e.target !== applicantInput) {
      applicantInput.classList.add('d-none');
    }
  });

  // To close logo input
  window.addEventListener('click', (e) => {
    if (e.target !== companyLabel && e.target !== companyInput) {
      companyInput.classList.add('d-none');
    }
  });
}
