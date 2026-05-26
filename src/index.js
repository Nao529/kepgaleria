import { KEPLISTA } from "./KepekLista.js";
import Kepek from "./Kepek.js";

const nagyKep = document.querySelector(".nagykep");
const kicsiKep = document.querySelector(".kiskepek");
const balGomb = document.querySelector(".bal");
const jobbGomb = document.querySelector(".jobb");
const galeria = new Kepek(KEPLISTA, nagyKep, kicsiKep);

jobbGomb.addEventListener("click", function () {
    galeria.jobbra();
});

balGomb.addEventListener("click", function () {
    galeria.balra();
});