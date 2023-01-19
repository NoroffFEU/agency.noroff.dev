import { isLoginUser } from '../api/auth/loginUser.js'



const checkLoginStatus = function () {

  const loggedIn = document.querySelectorAll("data-visible="loggedIn");
  const loggedOut = document.querySelectorAll("data-visible="loggedOut");

   const store = new Store("token", {});
  const isLoggedIn = store.state;                                   

  if (isLoginUser()) {
    loggedOut.forEach((item) => item.classList.add("d-none"));
  } else {

    loggedIn.forEach((item) => item.classList.add("d-none"));
  }
};


checkLoginStatus();
