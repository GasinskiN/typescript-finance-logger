import Invoice from "./classes/Invoice.js";
import Payment from "./classes/Payment.js";
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const toFrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
const invoices = [];
const payments = [];
form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (type.value === "invoice") {
        invoices.push(new Invoice(toFrom.value, details.value, amount.valueAsNumber));
    }
    else if (type.value === "payment") {
        payments.push(new Payment(toFrom.value, details.value, amount.valueAsNumber));
    }
    toFrom.value = "";
    details.value = "";
    amount.value = "";
    invoices.forEach(inv => { console.log(inv.format()); });
    payments.forEach(pay => { console.log(pay.format()); });
});
