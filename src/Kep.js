export default class Kep {
    constructor(adat, index, szuloElem) {
        this.adat = adat;
        this.index = index;
        this.szuloElem = szuloElem;
        this.megjelenit();
        this.esemeny();
    }
    megjelenit() {
        this.elem = document.createElement("div");
        this.elem.classList.add("kiskep");
        this.elem.innerHTML = `
            <img src="${this.adat.kep}" alt="">
            <p>${this.adat.modell}</p>
        `;
        this.szuloElem.appendChild(this.elem);
    }
    esemeny() {
        this.elem.addEventListener("click", () => {
            window.dispatchEvent(new CustomEvent("kepValaszt", {
                detail: this.index
            }));
            console.log("kiskép index: " + this.index);
        });
    }
}