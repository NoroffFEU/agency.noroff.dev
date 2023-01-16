export const footer = () => {
    const footerElement = document.querySelector("footer");
    footerElement.innerHTML = `<div class="container-fluid">
    <div class="row justify-content-evenly">
      <div class="col-2">
        <h4>About Noroff Job Agency</h4>
        <p>Some contact information here about this concept</p>
      </div>
      <div class="col-2">
        <h4>For Companies</h4>
        <p>Some information here about this concept. Maybe we should ask for some actual content?</p>
      </div>
      <div class="col-2">
        <h4>Contact us</h4>
        <ul class="p-0">
          <li class="list-group-item">Noroff Education AS</li>
          <li class="list-group-item">Tordenskjoldsgate 9</li>
          <li class="list-group-item">4612 Kristiansand S</li>
        </ul>
        <div class="d-flex flex-column gap-1">
          <a href="tel:38000000" class="nav-link text-black">38000000</a>
          <a href="mailto:utdanning@noroff.no" class="nav-link text-black">utdanning@noroff.no</a>
        </div>
      </div>
      <div class="col-2">
        <h4>Help</h4>
        <p>Some information here about this concept Maybe we should ask for some actual content?</p>
      </div>
    </div>
  </div>
    
    `
}