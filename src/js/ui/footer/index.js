export const footer = () => {
  const footerElement = document.querySelector('footer');
  footerElement.classList.add('bg-theme-dark', 'mt-auto');
  footerElement.innerHTML = `<div class="container container-fluid text-white">
                                <div class="row p-4 d-flex">
                                  <div class="col p-4">
                                    <h4>About Noroff Jobs</h4>
                                    <p>Noroff Jobs is a student-built and student-run employment agency designed to link Industry Partners with skilled candidates.</p> 
                                    <p>Noroff Jobs is a non-profit organisation dedicated to placing students into their ideal workplace.</p>
                                  </div>
                                  <div class="col p-4">
                                    <h4>For Companies</h4>
                                    <ul class="p-0">
                                      <li class="list-group-item"><a href="#" class="nav-link " target="_blanc">About Noroff Jobs</a></li>
                                      <li class="list-group-item"><a href="#" class="nav-link " target="_blanc">Company User Guide</a></li>
                                      <li class="list-group-item"><a href="#" class="nav-link " target="_blanc">FAQ</a></li>
                                    </ul>
                                  </div>
                                  <div class="col p-4">
                                    <h4>Contact us</h4>
                                    <ul class="p-0">
                                      <li class="list-group-item">Noroff Education AS</li>
                                      <li class="list-group-item">Tordenskjoldsgate 9</li>
                                      <li class="list-group-item">4612 Kristiansand S</li>
                                    </ul>
                                    <div class="d-flex flex-column gap-1">
                                      <a href="tel:38000000" class="nav-link "><img src="/src/assets/icons/phone.svg" class="footerIcon"/> 38000000</a>
                                      <a href="mailto:utdanning@noroff.no" class="nav-link "><img src="/src/assets/icons/mail.svg" class="footerIcon"/> utdanning@noroff.no</a>
                                    </div>
                                  </div>
                                  <div class="col p-4">
                                    <h4>Resources</h4>
                                    <ul class="p-0">
                                      <li class="list-group-item"><a href="/pages/privacy_policy.html" class="nav-link ">Privacy Policy</a></li>
                                      <li class="list-group-item"><a href="/pages/terms_of_use.html" class="nav-link">Terms of use</a></li>
                                    </ul>
                                  </div>
                                </div>
                            </div>`;
};
