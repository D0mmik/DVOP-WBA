let array = ["Lodash","React","Next","Strapi","Axios","Typescript"]


function printArray(array){
    for(let i = 0; i < array.length; i++){
        console.log(array[i])
    }
}

printArray(array)
printArray(array.reverse())
printArray(array.sort())

let car = {
    brand: "Ford",
    model: "Mustang",
    year: 1964
}

console.log(...[car])


let randomNumber = Math.floor(Math.random() * 555);

console.log("Náhodné číslo je: " + randomNumber)