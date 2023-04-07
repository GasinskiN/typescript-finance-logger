import Invoice from "./classes/Invoice.js";
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const toFrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
const invoices = [];
form.addEventListener("submit", (e) => {
    e.preventDefault();
    invoices.push(new Invoice(toFrom.value, details.value, amount.valueAsNumber));
    toFrom.value = "";
    details.value = "";
    amount.value = "";
    invoices.forEach(inv => { console.log(inv.format()); });
});
console.log(invoices);
