import "./index.css";
import Food1 from "./food1.jpeg"
import firstSection from "./firstSection";
import secSection from "./secSection";

(function addToDocument(){
    const mainCont = document.querySelector("main>div");
    const sectionCont = document.querySelector("section>div");

    mainCont.appendChild(firstSection());
    sectionCont.appendChild(secSection());
})()