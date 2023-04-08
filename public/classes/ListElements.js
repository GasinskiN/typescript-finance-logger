export default class ListElements {
    constructor(container) {
        this.container = container;
    }
    render(data, sorting) {
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
}
