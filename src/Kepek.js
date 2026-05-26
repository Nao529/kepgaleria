import Kep from "./Kep.js";

export default class Kepek {
    constructor(lista, nagykepElem, kiskepekElem) {
        this.lista = lista;
        this.nagykepElem = nagykepElem;
        this.kiskepekElem = kiskepekElem;
        this.index = 0;
        this.megjelenit();
        this.esemeny();
    }

    megjelenit() {
        this.nagykepElem.innerHTML = `
            <img src="${this.lista[this.index].kep}">
            <h3>${this.lista[this.index].modell}</h3>`;
        this.kiskepekElem.innerHTML = "";
        for (let i = 0; i < this.lista.length; i++) {
            new Kep(this.lista[i], i, this.kiskepekElem);
        }
    }
    esemeny() {
        window.addEventListener("kepValaszt", (e) => {
            this.index = e.detail;
            this.megjelenit();
        });
    }
    jobbra() {
        this.index++;
        if (this.index >= this.lista.length) {
            this.index = 0;
        }
        this.megjelenit();
        console.log("jobbra gomb");
    }
    balra() {
        this.index--;
        if (this.index < 0) {
            this.index = this.lista.length - 1;
        }
        this.megjelenit();
        console.log("balra gomb");
    }
}