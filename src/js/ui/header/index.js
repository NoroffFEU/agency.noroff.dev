export const header = () => {
    const headerElement = document.querySelector("header");
    headerElement.classList.add("bg-theme-dark")

    return headerElement.innerHTML = `<div class="container-fluid">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src="" class="Logo-noroff" />
            <div class="d-flex flex-column">
                <span class="company_name text-white">Noroff</span>
                <span class="company_branch text-white">Job Agency</span>
            </div>
        </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav gap-2">
              <li class="nav-item">
                <a class="nav-link text-white" aria-current="page" href="#">Profile</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#">Listings</a>
              </li>
              <li class="nav-item">
                <a class="btn btn-outline-light text-white" href="#">Sign in</a>
              </li>
              <li class="nav-item">
                <a class="btn btn-theme-secondary text-black">Register</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
</div>`
}

