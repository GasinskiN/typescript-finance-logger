export default class Payment {
    constructor(seller, details, amount) {
        this.seller = seller;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.seller} is owed ${this.amount} for ${this.details}.`;
    }
}
