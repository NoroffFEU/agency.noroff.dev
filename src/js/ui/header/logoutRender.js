import { isLoginUser } from '../api/auth/loginUser.js'



const checkLoginStatus = function () {

  const loggedIn = document.querySelectorAll(".loginUserButton");
  const loggedOut = document.querySelectorAll("logoutUserButton");


  if (isLoginUser()) {
    loggedOut.forEach((item) => item.classList.add("d-none"));
  } else {

    loggedIn.forEach((item) => item.classList.add("d-none"));
  }
};


checkLoginStatus();
