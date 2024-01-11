// Author: Roar Falch Hanssen
// Team: Holmenkollen

const toggleStudentView = document.getElementById("studentView"); 

export function showApplicantRole() {
if (localStorage.getItem('role') === 'Applicant') {     
  toggleStudentView.addEventListener('click', function() {
    this.classList.toggle('d-none'); 
  }); 
}
}

