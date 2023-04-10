// I didn't find the place for the us of these features in the project.
// But i wanted to use them so here is this file

const addNum = <T extends {age: number}>(obj: T) => {
    let num = Math.random();
    return {...obj, num}
}

let firstObject = addNum({name: "maria", age: 22});

console.log(firstObject.name)

interface Resource<T> {
    id: number;
    resourceName: string;
    data: T
}

const secondObject: Resource<object>  = {
    id: 10,
    resourceName: "chocolate",
    data: {name: "express", type: "automatic"}, 
}
const thirdObject: Resource<string>  = {
    id: 10,
    resourceName: "chocolate",
    data: "water", 
}