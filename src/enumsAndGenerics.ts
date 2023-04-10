// I didn't find the place for the us of these features in the project.
// But i wanted to use them so here is this file

const addNum = <T extends {age: number}>(obj: T) => {
    let num = Math.random();
    return {...obj, num}
}

let firstObject = addNum({name: "maria", age: 22});

console.log(firstObject.name)

enum ResourceType {MECHANIC, DRIVER, PITCREW, MANAGER}



interface Resource<T> {
    id: number;
    resourceType: ResourceType;
    data: T
}



const secondObject: Resource<object>  = {
    id: 10,
    resourceType: ResourceType.MANAGER,
    data: {name: "express", type: "automatic"}, 
}
const thirdObject: Resource<string>  = {
    id: 11,
    resourceType: ResourceType.MECHANIC,
    data: "water", 
}