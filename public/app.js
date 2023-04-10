import Invoice from "./classes/Invoice.js";
import ListElements from "./classes/ListElements.js";
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const toFrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
const sort = document.querySelector("#sort");
const dataForRendering = [];
let ul = document.querySelector(".item-list");
const list = new ListElements(ul);
sort.addEventListener("change", (e) => {
    list.renderAll(dataForRendering, sort.value);
});
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const addedInvoice = new Invoice(type.value, toFrom.value, details.value, amount.valueAsNumber);
    dataForRendering.push(addedInvoice);
    toFrom.value = "";
    details.value = "";
    amount.value = "";
    list.renderAdded(addedInvoice, sort.value);
});
