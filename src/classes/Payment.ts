import HasFormatter from "../interfaces/HasFormatter"


export default class Payment implements HasFormatter {
    constructor(
        readonly seller: string,
        private details: string,
        public amount: number
    ){}

    format(){
        return `${this.seller} is owed ${this.amount} for ${this.details}.`
    }
}