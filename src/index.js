import { KEPLISTA } from "./KepekLista.js";
import Kepek from "./Kepek.js";

/**
 * A nagykép megjelenítésére szolgáló DOM elem.
 * @type {HTMLElement}
 */
const nagyKep = document.querySelector(".nagykep");

/**
 * A kisképek megjelenítésére szolgáló DOM elem.
 * @type {HTMLElement}
 */
const kicsiKep = document.querySelector(".kiskepek");

/**
 * A balra navigáló gomb DOM eleme.
 * @type {HTMLElement}
 */
const balGomb = document.querySelector(".bal");

/**
 * A jobbra navigáló gomb DOM eleme.
 * @type {HTMLElement}
 */
const jobbGomb = document.querySelector(".jobb");

/**
 * A képgaléria példánya.
 * @type {Kepek}
 */
const galeria = new Kepek(KEPLISTA, nagyKep, kicsiKep);

/**
 * Jobbra navigálás eseménykezelője.
 * A következő képet jeleníti meg.
 */
jobbGomb.addEventListener("click", function () {
    galeria.jobbra();
});

/**
 * Balra navigálás eseménykezelője.
 * Az előző képet jeleníti meg.
 */
balGomb.addEventListener("click", function () {
    galeria.balra();
});