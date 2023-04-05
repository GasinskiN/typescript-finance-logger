let character = "wario";
let age = 30;
let isBlackBelt = false;


character = "luigi";

const circ = (diameter: number) => {
    return diameter * Math.PI;
}
console.log(circ(10))

let ninjaOne: object;

ninjaOne = {name: "yoshi", age: 33};
console.log(ninjaOne);
ninjaOne = {height: 180};
console.log(ninjaOne);

let ale: any=25;

let greet: Function;

greet = () => {
    console.log("Hello, there");
}

let add = (a:number, b:number, c?:number|string) =>{
    return a+b;
}

console.log(add(10,22));

type StringOrNum = string | number;

const logDetails = (uid: StringOrNum, item: string) => {
    console.log(`${item} has the id of ${uid}`)
}