export const handleActiveLinks = () => {
const footerNavLinks = document.querySelectorAll('.footer-nav-link');
/**
 * function that gets the pathname of the current location and checks each element if it links to the current page, the function then toggles the active-footer-link based
 * on whether it's the current page
 */
const updateActiveLink = () => {
  const currentPath = window.location.pathname;
  footerNavLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    const isCurrentPage = linkPath === currentPath;

    link.classList.toggle('active-footer-link', isCurrentPage);
  });
};

footerNavLinks.forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault();

    footerNavLinks.forEach(link => link.classList.remove('active-footer-link'));

    this.classList.add('active-footer-link');

    const href = this.getAttribute('href');
    // The href !== "#" is just temporary because there are links that have not yet gotten a page to redirect to
    if (href && href !== '#') {
      window.location.href = href;
    }
  });
});

updateActiveLink();
}