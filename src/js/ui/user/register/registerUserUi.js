const formContainer = document.getElementById('formContainer');

export const showRegForm = (buttonId) => {
  if (buttonId == 'companyReg') {
    formContainer.innerHTML = `<form class="container mb-3 mt-3 shadow bg-white p-3">
        <h2>Register Company</h2>
        <div class="d-flex gap-3 mt-5">
          <div class="container d-flex flex-column gap-2">
            <img src="https://via.placeholder.com/150" class="rounded-circle w-25 align-self-center" alt="placeholder image">
            <a href="" class="text-black align-self-center">Add image</a>

            <label for="contactPerson">Contact person*</label>
            <input type="text" class="form-control" aria-label="Contact person" id="contactPerson">

            <label for="contactNumber">Contact number*</label>
            <input type="text" class="form-control" aria-label="Contact number" id="contactNumber">
          </div>
          <div class="container d-flex flex-column gap-2">
            <label for="companyName">Company name*</label>
            <input type="text" class="form-control" aria-label="Company name" id="companyName">
            
            <label for="emailStudent">Email*</label>
            <input type="email" class="form-control" aria-label="Email" id="emailStudent">

            <label for="password">Password*</label>
            <input type="password" class="form-control" aria-label="Password" id="password">

            <label for="repPassword">Repeat password*</label>
            <input type="password" class="form-control" aria-label="Repeat password" id="repPassword">
          </div>
        </div>
        <div class="d-flex flex-column gap-3 mt-5">
          <button class="btn btn-theme-secondary mx-auto btn-lg">Register</button>
          <button class="btn text-black align-self-center" id="companyReg" data-button-companyReg>Not an company? Register as applicant instead!</button>
        </div>
      </form>`;
    return;
  }

  if (buttonId == 'studentReg') {
    formContainer.innerHTML = `<form class="container mb-3 mt-3 shadow bg-white p-3">
        <h2>Register Applicants</h2>
        <div class="d-flex gap-3 mt-5">
          <div class="container d-flex flex-column gap-2">
            <img src="https://via.placeholder.com/150" class="rounded-circle w-25 align-self-center" alt="placeholder image">
            <a href="" class="text-black align-self-center">Add image</a>
            <label for="fullName">Full Name*</label>
            <input type="text" class="form-control" aria-label="Full name" id="fullName">
          </div>
          <div class="container d-flex flex-column gap-2">
            <label for="emailStudent">Email*</label>
            <input type="email" class="form-control" aria-label="Email" id="emailStudent">

            <label for="password">Password*</label>
            <input type="password" class="form-control" aria-label="Password" id="password">

            <label for="repPassword">Repeat password*</label>
            <input type="password" class="form-control" aria-label="Repeat password" id="repPassword">

            <label for="degrees">Degree(s)</label>
            <select class="form-select" aria-label="Default select example">
              <option selected>Open this select menu</option>
              <option value="">Applied Machine Learning</option>
              <option value="">Front-end Development</option>
              <option value="">Back-end Development</option>
              <option value="Full-stack Developer">Full-stack Developer</option>
              <option value="">Data Analyst</option>
              <option value="">UX/UI Design</option>
              <option value="">Graphic Design</option>
              <option value="">Music production</option>
              <option value="">Film production</option>
              <option value="">Digital marketing</option>
              <option value="">Video marketing in social Media</option>
              <option value="">3D art and game technology</option>
              <option value="">Network and IT security</option>
              <option value="">Network and System administration</option>
              <option value="">Cyber security</option>
              <option value="">Applied data science</option>
              <option value="">Digital Forensics</option>
              <option value="">Interactive Media - Animation</option>
              <option value="">Interactive Media - Games</option>
              <option value="">Modern project management</option>
              <option value="">Other</option>
            </select>
          </div>
        </div>
        <div class="d-flex flex-column gap-3 mt-5">
          <button class="btn btn-theme-secondary mx-auto btn-lg">Register</button>
          <button class="btn text-black align-self-center" id="studentReg" data-button-studentReg>Not an applicant? Register as company instead!</button>
        </div>
      </form>`;
    return;
  }
};
