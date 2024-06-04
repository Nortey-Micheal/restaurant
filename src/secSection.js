function secSection(){
    const secCont = document.createElement("div");

    const firstPart = document.createElement("div")
    const firstPartPara = document.createElement("p");
    const firstPartH2 = document.createElement("h2");

    firstPartH2.textContent = "RATATOUILLE?";
    firstPart.appendChild(firstPartH2);
    
    firstPartPara.textContent = `Ratatouille is a charming French restaurant located in the heart of Paris. 
    Known for its traditional French cuisine with a modern twist, Ratatouille offers a cozy and inviting 
    atmosphere for guests to enjoy a culinary experience like no other.
     The menu features classic French dishes such as Coq au Vin, Bouillabaisse, and, of course, Ratatouille. 
     The restaurant prides itself on using fresh, locally sourced ingredients to create flavorful and authentic dishes that showcase the best of French gastronomy.
      With impeccable service and a carefully curated wine list, Ratatouille promises a delightful dining experience for food enthusiasts and casual diners alike.`;
    firstPart.appendChild(firstPartPara);

    secCont.appendChild(firstPart);

    return secCont;
}

export default secSection;