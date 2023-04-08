import Invoice from "./classes/Invoice.js";
import Payment from "./classes/Payment.js";

const form = document.querySelector(".new-item-form") as HTMLFormElement;
const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

const invoices: Invoice[] = [];
const payments: Payment[] = [];

form.addEventListener("submit", (e: Event) => {
    e.preventDefault();
    if (type.value === "invoice"){
        invoices.push(new Invoice(toFrom.value, details.value, amount.valueAsNumber));
    } else if (type.value === "payment"){
        payments.push(new Payment(toFrom.value, details.value, amount.valueAsNumber))
    }
    toFrom.value = "";
    details.value = "";
    amount.value = "";
    invoices.forEach(inv => {console.log(inv.format())});
    payments.forEach(pay => {console.log(pay.format())});
})