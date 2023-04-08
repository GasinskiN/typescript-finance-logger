import HasFormatter from "../interfaces/HasFormatter"


export default class Invoice implements HasFormatter {
    constructor(
        readonly type: "invoice" | "payment",
        readonly client: string,
        readonly details: string,
        readonly amount: number
    ){}

    format(){
        if (this.type === "invoice"){
            return `${this.client} owes ${this.amount} for ${this.details}.`;
        } else {
            return `${this.client} is owed ${this.amount} for ${this.details}.`;
        } 
    }
}