/**
 * @constant
 * @type {string}
 * @description The HTML template displayed to a logged in student.
 */
export const studentView = `
<div class="bg-theme-light col-12 col-lg-10 d-flex row text-center offset-lg-2 text-md-start p-3">
<div class="col-12 col-md-4 mb-3 mb-md-0">
<h2 class="d-md-none fw-bold">Update your profile to showcase your skills</h2>

<div class="imgContainer">
<img class="" src="
https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png
" alt="Illustration of close icon" />
</div>
</div>
<div class="col-12 col-md-6 ms-md-5 row col-xxl-4">
<h2 class="d-none d-md-block fw-bold">Update your profile to showcase your skills</h2>
<p><span class="fw-semibold">Find talents for your organisation.</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<div class="buttonContainer mx-auto mx-md-0">
<button class="btn customButton btn-theme-primary text-theme-light fw-semibold w-100">Update Profile</button>
</div>
</div>
</div>
<div class="bg-theme-light col-12 col-lg-10 d-flex row text-center text-md-start mt-5 justify-content-end p-3">
<div class="col-12 col-md-6 col-xxl-4 order-1 me-md-5 order-md-0 row justify-content-end">
<h2 class="d-none d-md-block fw-bold">View all of your applications</h2>
<p><span class="fw-semibold">Talents for your organisation.</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<div class="buttonContainer mx-auto mx-md-0">
<button class="btn customButton btn-theme-primary text-theme-light fw-semibold w-100">View applications</button>
</div>
</div>
<div class="col-12 col-md-4 mb-3 mb-md-0">
<h2 class="d-md-none fw-bold">View all of your applications</h2>
<div class="imgContainer">
<img class="img-fluid" src="
https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png
" alt="Illustration of close icon" />
</div>
</div>
</div>
`;

/**
 * @constant
 * @type {string}
 * @description The HTML template displayed to a logged in organization.
 */
export const organisationView = `

<div class="col">
<div class="shadow-sm d-flex p-3">
  <div style="width: 200px">
    <img src="https://www.seekpng.com/png/detail/246-2468199_logo-placeholder-png-white.png" alt="logo" />
  </div>
  <div class="ms-3">
    <h3 class="fw-semibold">Listing title</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
    <div class="d-flex justify-content-between align-items-baseline">
      <p>(3) Applications</p>
      <p>EndsAt</p>
      <button class="btn btn-theme-primary text-theme-light d-none d-md-flex">View</button>
    </div>
  </div>
</div>
</div>
`;
