export function handleAvatarInput() {
  const input = document.getElementById('avatarInput');
  const companyInput = document.getElementById('logoInput');
  const label = document.getElementById('avatarLabel');
  const companyLabel = document.getElementById('logoLabel');

  // Open logo or avatar input
  window.addEventListener('click', (e) => {
    if (e.target === label || e.target === companyLabel) {
      input.classList.remove('d-none');
      companyInput.classList.remove('d-none');
    }
  });

  // To close avatar input
  window.addEventListener('click', (e) => {
    if (e.target !== label && e.target !== input) {
      input.classList.add('d-none');
    }
  });

  // To close logo input
  window.addEventListener('click', (e) => {
    if (e.target !== companyLabel && e.target !== companyInput) {
      companyInput.classList.add('d-none');
    }
  });
}
