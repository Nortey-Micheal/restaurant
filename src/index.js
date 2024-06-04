import "./index.css";
import Menu from "./menu.js";
import homePage from "./homePage.js"

(function addToDocument(){
    const menuBtn = document.querySelector(".menu");
    const homeBtn = document.querySelector(".home");

    window.addEventListener("load",homePage);
    homeBtn.addEventListener("click",homePage);
    menuBtn.addEventListener("click",Menu);
})()