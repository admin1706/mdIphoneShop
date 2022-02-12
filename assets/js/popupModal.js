 // Popup Open
 const modal = document.querySelector("#modal");
 const overlay = document.querySelector(".modal__overlay");
 const modalLogin = document.querySelector("#modal__login");
 const modalRegister = document.querySelector("#modal__register");

 function
 popupLogin() {

     modalLogin.classList.remove('modal__inner--login');
     document.getElementById("modal").style.display = "flex";

 }

 function popupRegister() {

     modalRegister.classList.remove('modal__inner--register');
     document.getElementById("modal").style.display = "flex";

 }

 // Popup Close
 function popupCloseLogin() {

     modalLogin.classList.add('modal__inner--login');
     document.getElementById("modal").style.display = "none";

 }

 function popupCloseRegister() {
     modalRegister.classList.add('modal__inner--register');
     document.getElementById("modal").style.display = "none";

 }

 // Popup change Login->Register
 function loginChangeRegister() {

     modalLogin.classList.add('modal__inner--login');
     modalRegister.classList.remove('modal__inner--register');
 }

 function registerChangeLogin() {
     modalRegister.classList.add('modal__inner--register');
     modalLogin.classList.remove('modal__inner--login');
 }
 window.onclick = function(e) {
     if (e.target == overlay) {
         modal.style.display = "none";
         modalLogin.classList.add('modal__inner--login');
         modalRegister.classList.add('modal__inner--register');
         document.getElementById("modal").style.display = "none";
     }
 }