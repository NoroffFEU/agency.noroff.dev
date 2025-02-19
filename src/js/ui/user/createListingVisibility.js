const isCompany = localStorage.getItem("role");
const newListing = document.getElementById("companyListing");

export function newListingOption() {
  if (newListing) {
    if (isCompany === '"Client"') {
      newListing.classList.remove("d-none");
      newListing.classList.add("d-block");
    } else {
      newListing.classList.remove("d-block");
      newListing.classList.add("d-none");
    }
  }
}