import Invoice from "./classes/Invoice.js";

const form = document.querySelector(".new-item-form") as HTMLFormElement;
const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

const invoices: Invoice[] = [];

form.addEventListener("submit", (e: Event) => {
    e.preventDefault();
    invoices.push(new Invoice(toFrom.value, details.value, amount.valueAsNumber));
    toFrom.value = "";
    details.value = "";
    amount.value = "";
    invoices.forEach(inv => {console.log(inv.format())});
})
console.log(invoices);