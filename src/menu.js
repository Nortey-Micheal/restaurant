import BlanquetteDeVeau from "./images/BlanquetteDeVeau.webp";
import BoeufBourguignon from "./images/BoeufBourguignon.webp";
import Bouillabaisse from "./images/Bouillabaisse.webp";
import Cassoulet from "./images/Cassoulet.webp";
import PotAuFeu from "./images/Pot-au-feu.webp";
import Ratatouille from "./images/Ratatouille.webp";

function Menu() {
    const main = document.querySelector("main")
    const mainCont = document.querySelector("main>div");
    const section = document.querySelector("section");
    const menuList = document.createElement("div");
    const newMainCont = document.createElement("div");
    const menuH2 = document.createElement("h2");

    menuH2.textContent = "MENU";
    newMainCont.appendChild(menuH2);

    newMainCont.classList.add("container");
    newMainCont.classList.add("menuList");

    main.removeChild(mainCont);
    section.style.display = "none";

    const BlanquetteDiv = document.createElement("div")
    const FoodBlanq = new Image();
    const FoodBlanqH3 = document.createElement("h3");
    FoodBlanqH3.textContent = "Blanquette De Veau";
    FoodBlanq.src = BlanquetteDeVeau;
    BlanquetteDiv.appendChild(FoodBlanqH3);
    BlanquetteDiv.appendChild(FoodBlanq);

    const BoeufDiv = document.createElement("div")
    const FoodBoeuf = new Image();
    const FoodBoeufH3 = document.createElement("h3");
    FoodBoeufH3.textContent = "Boeuf Bourguignon";
    FoodBoeuf.src = BoeufBourguignon;
    BoeufDiv.appendChild(FoodBoeufH3);
    BoeufDiv.appendChild(FoodBoeuf);

    const BouilDiv = document.createElement("div")
    const FoodBouil = new Image();
    const FoodBouilH3 = document.createElement("h3");
    FoodBouilH3.textContent = "Boullabaisse"
    FoodBouil.src = Bouillabaisse;
    BouilDiv.appendChild(FoodBouilH3);
    BouilDiv.appendChild(FoodBouil);

    const CassouletDiv = document.createElement("div")
    const FoodCass = new Image();
    const FoodCassH3 = document.createElement("h3");
    FoodCassH3.textContent = "Cassoulet";
    FoodCass.src = Cassoulet;
    CassouletDiv.appendChild(FoodCassH3);
    CassouletDiv.appendChild(FoodCass);

    const PotDiv = document.createElement("div")
    const FoodPot = new Image();
    const FoodPotH3 = document.createElement("h3");
    FoodPotH3.textContent = "Pot-au-feu";
    FoodPot.src = PotAuFeu;
    PotDiv.appendChild(FoodPotH3);
    PotDiv.appendChild(FoodPot);

    const RataDiv = document.createElement("div")
    const FoodRata = new Image();
    const FoodRataH3 = document.createElement("h3");
    FoodRataH3.textContent = "Ratatouille";
    FoodRata.src = Ratatouille;
    RataDiv.appendChild(FoodRataH3);
    RataDiv.appendChild(FoodRata);

    menuList.appendChild(BlanquetteDiv);
    menuList.appendChild(BoeufDiv);
    menuList.appendChild(BouilDiv);
    menuList.appendChild(CassouletDiv);
    menuList.appendChild(PotDiv);
    menuList.appendChild(RataDiv);
    
    newMainCont.appendChild(menuList);
    main.appendChild(newMainCont);
    return main;
}

export default Menu