// frontpage script
const defaultContentContainer = document.querySelector('#default-homepage-content');

const userRole = localStorage.getItem('Role');
console.log(userRole);

function displayHtmlByUserRole() {
  console.log(userRole);
  if (userRole === 'user') {
    defaultContentContainer.style.display = 'none';
  }
}
displayHtmlByUserRole();
