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
    if (sort.value === "newest") {
        list.render(dataForRendering, "newest");
    }
    else {
        list.render(dataForRendering, "oldest");
    }
});
form.addEventListener("submit", (e) => {
    e.preventDefault();
    dataForRendering.push(new Invoice(type.value, toFrom.value, details.value, amount.valueAsNumber));
    toFrom.value = "";
    details.value = "";
    amount.value = "";
    list.render(dataForRendering, sort.value);
});
