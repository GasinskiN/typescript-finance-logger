import Invoice from "./classes/Invoice.js";
import ListElements from "./classes/ListElements.js";
import HasFormatter from "./interfaces/HasFormatter.js";

const form = document.querySelector(".new-item-form") as HTMLFormElement;
const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;
const sort = document.querySelector("#sort") as HTMLSelectElement;

const dataForRendering: HasFormatter[] = [];

let ul = document.querySelector(".item-list") as HTMLUListElement;
const list = new ListElements(ul);

sort.addEventListener("change", (e: Event) =>{
    list.renderAll(dataForRendering, sort.value);
});


form.addEventListener("submit", (e: Event) => {
    e.preventDefault();
    const addedInvoice = new Invoice(type.value, toFrom.value, details.value, amount.valueAsNumber);
    dataForRendering.push(addedInvoice);
    toFrom.value = "";
    details.value = "";
    amount.value = "";
    list.renderAdded(addedInvoice, sort.value);
});