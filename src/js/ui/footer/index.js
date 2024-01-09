export const footer = () => {
  const footerElement = document.querySelector('footer');
  footerElement.classList.add('bg-theme-dark', 'pt-5', 'p-2', 'mt-auto');
  footerElement.innerHTML = `<div class="container-fluid justify-content-center">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-4 center-desktop">
     
      <div class="col mb-5 mb-md-0" data-footer-col>
        <h4 class="text-white mb-3 fw-bold">About Noroff Job Agency</h4>
        <p class="text-white">Noroff Jobs is a student-built and student-run employment agency designed to link Industry Partners with skilled candidates.</p> 
        <p class="text-white">Noroff Jobs is a non-profit organisation dedicated to placing students into their ideal workplace.</p>
      </div>
      <div class="col mb-5 mb-md-0" data-footer-col>
        <h4 class="text-white mb-3 fw-bold">For Companies</h4>
        <ul class="p-0 d-flex flex-column gap-1">
        <li class="list-group-item"><a href="#" class="nav-link text-white" target="_blanc" id="navlink-footer-id">About Noroff Jobs</a></li>
        <li class="list-group-item"><a href="#" class="nav-link text-white" target="_blanc" id="navlink-footer-id">Company User Guide</a></li>
        <li class="list-group-item"><a href="#" class="nav-link text-white" target="_blanc" id="navlink-footer-id">FAQ</a></li>
        </ul>
      </div>
      <div class="col mb-5 mb-md-0" data-footer-col>
        <h4 class="text-white mb-3 fw-bold">Contact us</h4>
        <ul class="p-0 d-flex flex-column gap-1">
          <li class="list-group-item text-white">Noroff Education AS</li>
          <li class="list-group-item text-white">Tordenskjoldsgate 9</li>
          <li class="list-group-item text-white">4612 Kristiansand S</li>
        </ul>
        <div class="d-flex flex-column gap-1">
          <a href="tel:38000000" class="nav-link text-white" id="navlink-footer-id"><img src="../../../public/assets/icons/phone.svg" class="footerIcon" alt="phone icon for footer navigation"/> 38000000</a>
          <a href="mailto:utdanning@noroff.no" class="nav-link text-white" id="navlink-footer-id"><img src="../../../public/assets/icons/mail.svg" class="footerIcon" alt="email icon for footer navigation" id="navlink-footer-id"/> utdanning@noroff.no</a>
        </div>
      </div>
      <div class="col" data-footer-col>
        <h4 class="text-white mb-3 fw-bold">Help</h4>
        <ul class="p-0 d-flex flex-column gap-1">
       <li class="list-group-item"><a href="#" class="nav-link text-white" id="navlink-footer-id">Customer Service</a></li>
       <li class="list-group-item"><a href="/privacy_policy.html" class="nav-link text-white" id="navlink-footer-id">Privacy Policy</a></li>
       <li class="list-group-item"><a href="/terms_of_use.html" class="nav-link text-white" id="navlink-footer-id">Terms of use</a></li>
       <li class="list-group-item"><a href="#" class="nav-link text-white" id="navlink-footer-id">Ad policies</a></li>
       </ul>
      </div>
    </div>
  </div>
    
    `;
};
