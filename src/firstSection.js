function firstSection() {
    const firstCont = document.createElement("div");
    const top = document.createElement("div");
    const botttom = document.createElement("div");
    const h1 = document.createElement("h1");
    const btn = document.createElement("button");
    const span1 = document.createElement("span");
    const food1 = new Image();

    span1.textContent = "WELCOME TO THE FAMOUS RATATOUILLE RESTAURANT";
    h1.appendChild(span1);
    btn.innerText = "DISHES";
    top.appendChild(h1);
    top.appendChild(btn);

    food1.src = Food1;
    botttom.appendChild(food1);

    firstCont.appendChild(top);
    firstCont.appendChild(botttom);

    return firstCont;
}

export default firstSection