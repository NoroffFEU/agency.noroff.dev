// It is unable to create anything at the moment, until the proper API is here.
// import { create } from '../../api/posts/create.js';

export async function postApplication() {
  const appForm = document.querySelector('#appForm');

  if (appForm) {
    appForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const appForm = event.target;
      const appFormData = new FormData(appForm);
      const postData = Object.fromEntries(appFormData.entries());
      console.log(postData);

      const appEmail = document.querySelector('#inputEmail');
      const appAddress = document.querySelector('#inputAddress');
      const appPhone = document.querySelector('#inputPhone');
      const appLink = document.querySelector('#inputLink');
      const appFile = document.querySelector('#inputFile');
      const appLetter = document.querySelector('#inputLetter');

      
    //   await create(postData);
    // Will make more responsive errors and elements when submitting, later tho :)
    });
  }
}
