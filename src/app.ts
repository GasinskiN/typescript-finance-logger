import Invoice from "./classes/Invoice.js";
import ListElements from "./classes/ListElements.js";
import HasFormatter from "./interfaces/HasFormatter.js";



const form = document.querySelector(".new-item-form") as HTMLFormElement;
const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

const dataForRendering: HasFormatter[] = [];

let ul = document.querySelector(".item-list") as HTMLUListElement;
const list = new ListElements(ul);



form.addEventListener("submit", (e: Event) => {
    e.preventDefault();
    dataForRendering.push(new Invoice(type.value as "payment"|"invoice", toFrom.value, details.value, amount.valueAsNumber));
    toFrom.value = "";
    details.value = "";
    amount.value = "";
    ul.innerHTML = "";
    list.render(dataForRendering, "newest");
})