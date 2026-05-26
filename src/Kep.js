/**
 * @class Kep
 * @classdesc Egyetlen kiskép megjelenítéséért és a hozzá tartozó eseménykezelésért felelős osztály.
 */
export default class Kep {

    /**
     * Létrehoz egy új Kep példányt, megjeleníti a képet és beállítja az eseményeket.
     * 
     * @param {Object} adat - A kép adatait tartalmazó objektum.
     * @param {string} adat.kep - A kép elérési útja.
     * @param {string} adat.modell - A képhez tartozó modell neve.
     * @param {number} index - A kép indexe a listában.
     * @param {HTMLElement} szuloElem - A szülő DOM elem, ahová a kiskép kerül.
     */
    constructor(adat, index, szuloElem) {
        this.adat = adat;
        this.index = index;
        this.szuloElem = szuloElem;
        this.megjelenit();
        this.esemeny();
    }

    /**
     * Létrehozza és megjeleníti a kiskép HTML elemét.
     */
    megjelenit() {
        this.elem = document.createElement("div");
        this.elem.classList.add("kiskep");
        this.elem.innerHTML = `
            <img src="${this.adat.kep}" alt="">
            <p>${this.adat.modell}</p>
        `;
        this.szuloElem.appendChild(this.elem);
    }

    /**
     * Kattintási eseményt kezel a kisképen.
     * Egyedi "kepValaszt" eseményt küld az aktuális indexszel.
     */
    esemeny() {
        this.elem.addEventListener("click", () => {
            window.dispatchEvent(new CustomEvent("kepValaszt", {
                detail: this.index
            }));
            console.log("kiskép index: " + this.index);
        });
    }
}