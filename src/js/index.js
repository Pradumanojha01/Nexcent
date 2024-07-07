"use strict";

//selecting elements
const nav_toggle_btn = document.getElementById('nav-toggle-btn');
const mob_nav = document.getElementById('mob-nav');
const footerYear = document.getElementById('footer_current_year');
//functions
const elemClassToggler = function(elem, classToToggle){
    elem.classList.toggle(classToToggle)
}
const getCurrentYear = function(){
    const date = new Date
    return date.getFullYear()
}
//eventListners
nav_toggle_btn.addEventListener("click",()=>{
    elemClassToggler(mob_nav, "hidden");
})
window.addEventListener("DOMContentLoaded",()=>{
    footerYear.innerHTML= getCurrentYear()
})
document.addEventListener("DOMContentLoaded", () => {
    const toggleSwitch = document.getElementById("dark-mode-toggle");
    const currentTheme = localStorage.getItem("theme");
  
    if (currentTheme) {
      document.body.classList.add(currentTheme);
      if (currentTheme === "dark") {
        toggleSwitch.checked = true;
      }
    }
  
    toggleSwitch.addEventListener("change", () => {
      if (toggleSwitch.checked) {
        document.body.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.body.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    });
  });
  
//consoles for debugging