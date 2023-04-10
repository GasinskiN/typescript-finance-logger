export default class ListElements {
    constructor(container) {
        this.container = container;
    }
    renderAll(data, sorting) {
        this.container.innerHTML = "";
        data.forEach(doc => {
            const li = document.createElement("li");
            const p = document.createElement("p");
            const h4 = document.createElement("h4");
            h4.innerText = doc.type;
            li.append(h4);
            p.innerText = doc.format();
            li.append(p);
            sorting === "newest" ? this.container.prepend(li) : this.container.append(li);
        });
    }
    renderAdded(data, sorting) {
        const li = document.createElement("li");
        const p = document.createElement("p");
        const h4 = document.createElement("h4");
        h4.innerText = data.type;
        li.append(h4);
        p.innerText = data.format();
        li.append(p);
        sorting === "newest" ? this.container.prepend(li) : this.container.append(li);
    }
}
