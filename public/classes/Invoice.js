export default class Invoice {
    constructor(type, client, details, amount) {
        this.type = type;
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        if (this.type === "invoice") {
            return `${this.client} owes ${this.amount} for ${this.details}.`;
        }
        else {
            return `${this.client} is owed ${this.amount} for ${this.details}.`;
        }
    }
}
