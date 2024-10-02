function homePageLoad() {
    const divContent = document.querySelector("#content");
    
    const main = document.createElement("main");
    main.textContent = "Restaurant with awesome food and amazing prices";

    const footer = document.createElement("footer");
    footer.textContent = "Located at 123 Street, Some State, Some Country";

    const elements = [main, footer];

    for (const element of elements) {
        divContent.appendChild(element);
    }
}

export {homePageLoad};