const formContainer = document.getElementById("formContainer")

export const showRegForm = (buttonId) => {
    if (buttonId == "companyReg") {
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
      </form>`
        return;
    }

    if (buttonId == "studentReg") {
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
            <input type="email" class="form-control" aria-label="Degree(s)" id="degrees">
          </div>
        </div>
        <div class="d-flex flex-column gap-3 mt-5">
          <button class="btn btn-theme-secondary mx-auto btn-lg">Register</button>
          <button class="btn text-black align-self-center" id="studentReg" data-button-studentReg>Not an applicant? Register as company instead!</button>
        </div>
      </form>`
        return;
    }

}