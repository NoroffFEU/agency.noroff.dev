
//This should be uncommented when we use the new Store("token")
//import { Store } from "../../storage/localStorage.mjs";


const checkLoginStatus = function () {

  const loggedIn = document.querySelectorAll("data-visible="loggedIn");
  const loggedOut = document.querySelectorAll("data-visible="loggedOut");
                                             
 // The following code should be applied for this scenario 
 // but i couldnot make it work  so i have used the direct  getItem method.
                                             

       //const store = new Store("token");
        // const token = store.state

  const token = localStorage.getItem("token");
  
  if (token) {
    loggedOut.forEach((item) => item.classList.add("d-none"));
    
  } else {

    loggedIn.forEach((item) => item.classList.add("d-none"));
  }
};


checkLoginStatus();
