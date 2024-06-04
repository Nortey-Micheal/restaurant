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
    const order1 = document.createElement("button");
    order1.textContent = "ORDER";
    order1.classList.add("order");
    const p1 = document.createElement("p");
    p1.textContent = `Description: The dish typically consists of tender veal (or sometimes chicken), mushrooms, 
     onions, carrots, and a creamy white sauce.`;
    FoodBlanqH3.textContent = "Blanquette De Veau";
    FoodBlanq.src = BlanquetteDeVeau;
    BlanquetteDiv.appendChild(FoodBlanqH3);
    BlanquetteDiv.appendChild(FoodBlanq);
    BlanquetteDiv.appendChild(p1);
    BlanquetteDiv.appendChild(order1);

    const BoeufDiv = document.createElement("div")
    const FoodBoeuf = new Image();
    const FoodBoeufH3 = document.createElement("h3");
    const order2 = document.createElement("button");
    order2.textContent = "ORDER";
    order2.classList.add("order");
    const p2 = document.createElement("p");
    p2.textContent = `Description: Boeuf Bourguignon, also known as Beef Bourguignon,
     is a classic French dish that combines tender chunks of beef with a rich red 
     wine gravy, bacon, mushrooms, and onions.`;
    FoodBoeufH3.textContent = "Boeuf Bourguignon";
    FoodBoeuf.src = BoeufBourguignon;
    BoeufDiv.appendChild(FoodBoeufH3);
    BoeufDiv.appendChild(FoodBoeuf);
    BoeufDiv.appendChild(p2);
    BoeufDiv.appendChild(order2);

    const BouilDiv = document.createElement("div")
    const FoodBouil = new Image();
    const FoodBouilH3 = document.createElement("h3");
    const order3 = document.createElement("button");
    order3.textContent = "ORDER";
    order3.classList.add("order");
    const p3 = document.createElement("p");
    p3.textContent = `Description: Bouillabaisse is a classic French seafood soup with an enchantingly complex broth.
     Originating from the port town of Marseille in southern France, bouillabaisse traditionally includes various varieties of fish,
      mussels, squid, and crab.`;
    FoodBouilH3.textContent = "Boullabaisse"
    FoodBouil.src = Bouillabaisse;
    BouilDiv.appendChild(FoodBouilH3);
    BouilDiv.appendChild(FoodBouil);
    BouilDiv.appendChild(p3)
    BouilDiv.appendChild(order3);

    const CassouletDiv = document.createElement("div")
    const FoodCass = new Image();
    const FoodCassH3 = document.createElement("h3");
    const order4 = document.createElement("button");
    order4.textContent = "ORDER";
    order4.classList.add("order");
    const p4 = document.createElement("p");
    p4.textContent = `Description:  Cassoulet is a hearty French dish that combines beans, preserved meats, and aromatic flavors.`;
    FoodCassH3.textContent = "Cassoulet";
    FoodCass.src = Cassoulet;
    CassouletDiv.appendChild(FoodCassH3);
    CassouletDiv.appendChild(FoodCass);
    CassouletDiv.appendChild(p4);
    CassouletDiv.appendChild(order4);

    const PotDiv = document.createElement("div")
    const FoodPot = new Image();
    const FoodPotH3 = document.createElement("h3");
    const order5 = document.createElement("button");
    order5.textContent = "ORDER";
    order5.classList.add("order");
    const p5 = document.createElement("p");
    p5.textContent = `Description: Pot-au-feu is a classic French dish that translates to “pot on the fire.” It’s a comforting stew made 
    by simmering an assortment of beef cuts and vegetables in a flavorful broth until they become tender and buttery.`;
    FoodPotH3.textContent = "Pot-au-feu";
    FoodPot.src = PotAuFeu;
    PotDiv.appendChild(FoodPotH3);
    PotDiv.appendChild(FoodPot);
    PotDiv.appendChild(p5);
    PotDiv.appendChild(order5);

    const RataDiv = document.createElement("div")
    const FoodRata = new Image();
    const FoodRataH3 = document.createElement("h3");
    const order6 = document.createElement("button");
    order6.textContent = "ORDER";
    order6.classList.add("order");
    const p6 = document.createElement("p");
    p6.textContent =`Description: Ratatouille is a classic French dish that captures the essence of summer with its medley of fresh vegetables 
    and aromatic herbs.`;
    FoodRataH3.textContent = "Ratatouille";
    FoodRata.src = Ratatouille;
    RataDiv.appendChild(FoodRataH3);
    RataDiv.appendChild(FoodRata);
    RataDiv.appendChild(p6);
    RataDiv.appendChild(order6);

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