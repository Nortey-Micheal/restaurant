import firstSection from "./firstSection";
import secSection from "./secSection";

function homePage(){
    const main = document.querySelector("main")
    const mainCont = document.querySelector("main>div");
    const section = document.querySelector("section");
    const sectionCont = document.querySelector("section>div");
    const newSectionCont = document.createElement("div")
    const newMainCont = document.createElement("div");

    newSectionCont.classList.add("container")
    newMainCont.classList.add("container");
    
    main.removeChild(mainCont);
    newMainCont.appendChild(firstSection());
    main.appendChild(newMainCont);

    section.style.display = "block";
    section.removeChild(sectionCont);

    newSectionCont.appendChild(secSection());
    section.appendChild(newSectionCont);
}

export default homePage;