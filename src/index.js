import { homePageLoad } from "./home.js";
import { menuPageLoad } from "./menu.js";
import { aboutPageLoad } from "./about.js";
import "./styles.css";

const navBtns = document.querySelectorAll("button");

navBtns[0].addEventListener("click", () => {
    homePageLoad();
});

navBtns[1].addEventListener("click", () => {
    menuPageLoad();
});

navBtns[2].addEventListener("click", () => {
    aboutPageLoad();
})

homePageLoad();