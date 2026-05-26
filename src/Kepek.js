import Kep from "./Kep.js";

/**
 * @class Kepek
 * @classdesc A képgaléria kezeléséért felelős osztály. 
 * Megjeleníti a nagyképet, a kisképeket és kezeli a navigációt.
 */
export default class Kepek {

    /**
     * Létrehoz egy új Kepek példányt és megjeleníti a galériát.
     * 
     * @param {Array<Object>} lista - A képek adatait tartalmazó tömb.
     * @param {HTMLElement} nagykepElem - A nagykép megjelenítésére szolgáló DOM elem.
     * @param {HTMLElement} kiskepekElem - A kisképek megjelenítésére szolgáló DOM elem.
     */
    constructor(lista, nagykepElem, kiskepekElem) {
        this.lista = lista;
        this.nagykepElem = nagykepElem;
        this.kiskepekElem = kiskepekElem;
        this.index = 0;
        this.megjelenit();
        this.esemeny();
    }

    /**
     * Megjeleníti az aktuális nagyképet és létrehozza a kisképeket.
     */
    megjelenit() {
        this.nagykepElem.innerHTML = `
            <img src="${this.lista[this.index].kep}">
            <h3>${this.lista[this.index].modell}</h3>`;
        this.kiskepekElem.innerHTML = "";
        for (let i = 0; i < this.lista.length; i++) {
            new Kep(this.lista[i], i, this.kiskepekElem);
        }
    }

    /**
     * Figyeli a "kepValaszt" egyedi eseményt,
     * majd frissíti az aktuálisan megjelenített képet.
     */
    esemeny() {
        window.addEventListener("kepValaszt", (e) => {
            this.index = e.detail;
            this.megjelenit();
        });
    }

    /**
     * A következő képre léptet a galériában.
     * Ha a lista végére ér, visszalép az első képre.
     */
    jobbra() {
        this.index++;
        if (this.index >= this.lista.length) {
            this.index = 0;
        }
        this.megjelenit();
        console.log("jobbra gomb");
    }

    /**
     * Az előző képre léptet a galériában.
     * Ha az első kép előtt jár, a lista utolsó elemére ugrik.
     */
    balra() {
        this.index--;
        if (this.index < 0) {
            this.index = this.lista.length - 1;
        }
        this.megjelenit();
        console.log("balra gomb");
    }
}