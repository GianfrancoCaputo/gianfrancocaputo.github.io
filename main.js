// Picture changer
let myPicture = document.querySelector('.pfp');
let changePicture = function() {
    myPicture.style.backgroundImage = 'url(resources/images/pfp.png)';
    }
let returnPicture = function() {    
    myPicture.style.backgroundImage = 'url(resources/images/pfp2.png)';
}
myPicture.onmousedown = changePicture;
myPicture.onmouseup = returnPicture;

// Disappearing navigation bar 
let navBar = document.getElementById("navbar");
let prevScrollpos = window.scrollY;
let hideNavBar = () => {
  let currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    navBar.style.top = "0";
  } else {
    navBar.style.top = "-70px";
  }
  prevScrollpos = currentScrollPos;
} 
window.onscroll = hideNavBar;

let hiddenMenu = document.getElementsByClassName('dropdown')[0];
let hiddenMenuCont = document.getElementsByClassName('dropdown-content')[0];
let hiddenMenubtn = document.getElementsByClassName('dropdown-content')[0].children;
let closeMenubtn = document.getElementById('close-btn');
let openMenubtn = document.getElementsByClassName('dropbtn')[0];

let appearMenu = () => {
    hiddenMenuCont.style.display = 'block';
}

let disappearMenu = () => {
    hiddenMenuCont.style.display = 'none';
}

let changeColorBack = () => {
    openMenubtn.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
}

hiddenMenu.onmouseover = appearMenu;
hiddenMenu.onmouseout = disappearMenu;
openMenubtn.onclick = appearMenu;
closeMenubtn.addEventListener("click", disappearMenu, changeColorBack);
//closeMenubtn.onclick = disappearMenu;


// Current year setter
const year = document.getElementById('current-year');
year.innerHTML = new Date().getFullYear();