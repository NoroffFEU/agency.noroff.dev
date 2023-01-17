export const footer = () => {
    const footerElement = document.querySelector("footer");
    footerElement.classList.add("bg-theme-dark", "p-3")
    footerElement.innerHTML = `<div class="container-fluid justify-content-center">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-4 justify-content-evenly">
      <div class="col" data-footer-col>
        <h4 class="text-white mb-3">About Noroff Job Agency</h4>
        <p class="text-white">Some contact information here about this concept</p>
      </div>
      <div class="col" data-footer-col>
        <h4 class="text-white">For Companies</h4>
        <p class="text-white">Some information here about this concept. Maybe we should ask for some actual content?</p>
      </div>
      <div class="col" data-footer-col>
        <h4 class="text-white mb-3">Contact us</h4>
        <ul class="p-0">
          <li class="list-group-item text-white">Noroff Education AS</li>
          <li class="list-group-item text-white">Tordenskjoldsgate 9</li>
          <li class="list-group-item text-white">4612 Kristiansand S</li>
        </ul>
        <div class="d-flex flex-column gap-1">
          <a href="tel:38000000" class="nav-link text-white"><img src="/src/assets/icons/phone.svg" class="footerIcon"/> 38000000</a>
          <a href="mailto:utdanning@noroff.no" class="nav-link text-white"><img src="/src/assets/icons/mail.svg" class="footerIcon"/> utdanning@noroff.no</a>
        </div>
      </div>
      <div class="col" data-footer-col>
        <h4 class="text-white mb-3">Help</h4>
        <p class="text-white">Some information here about this concept Maybe we should ask for some actual content?</p>
      </div>
    </div>
  </div>
    
    `
}