function menuPageLoad() {
    const divContent = document.querySelector("#content");
    divContent.textContent = "";
    
    const h2 = document.createElement("h2");
    h2.textContent = "Menu Items";

    const p1 = document.createElement("p");
    p1.textContent = "Pizza";

    const p2 = document.createElement("p");
    p2.textContent = "Spaghetti";

    const p3 = document.createElement("p");
    p3.textContent = "Lasagna";

    const footer = document.createElement("footer");
    footer.textContent = "Located at 123 Street, Some State, Some Country";

    const elements = [h2,p1,p2,p3,footer];

    for (const element of elements) {
        divContent.appendChild(element);
    }
}

export {menuPageLoad};