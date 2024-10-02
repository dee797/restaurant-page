function aboutPageLoad() {
    const divContent = document.querySelector("#content");
    divContent.textContent = "";
    
    const h2 = document.createElement("h2");
    h2.textContent = "About Us";

    const p1 = document.createElement("p");
    p1.textContent = "This restaurant is awesome";

    const p2 = document.createElement("p");
    p2.textContent = "Phone Number: 000-000-0000";

    const p3 = document.createElement("p");
    p3.textContent = "Email: awesomerestaurant@example.com";

    const footer = document.createElement("footer");
    footer.textContent = "Located at 123 Street, Some State, Some Country";

    const elements = [h2,p1,p2,p3,footer];

    for (const element of elements) {
        divContent.appendChild(element);
    }
}

export {aboutPageLoad};