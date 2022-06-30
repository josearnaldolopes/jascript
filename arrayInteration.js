const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction, 100);
function myFunction(total, value) {
  return total + value;
}
console.log(sum)

// O forEach() chama a function (callback). Isso tudo está pré ES6 dê atenção pra isso.
let txt = "";
numbers.forEach(forEachValue);
console.log(txt)
function forEachValue(value) {
  txt += value + "\n"; 
}

const map = numbers.map(mapFunction);
function mapFunction(value) {
  return value * 2;
}
console.log(map)

const over18 = numbers.filter(filterFunction);
function filterFunction(value) {
  return value > 18;
}
console.log(over18)

let someOver18 = numbers.some(myFunction);
function myFunction(value) {
  return value > 18;
}
console.log(someOver18)

let position = numbers.indexOf(9);
console.log(position)

const fruits = ["Maça", "Laranja", "Maça", "Banana"];
let positionFruits = fruits.lastIndexOf("Maça") + 1;
console.log(positionFruits)

let first = numbers.find(firstNumber)
function firstNumber(number) {
  return number > 18;
}
console.log(first)

let findTheIndex = numbers.findIndex(theIndex)
function theIndex(number) {
  return number > 8;
}
console.log(findTheIndex)

const myNewArray = Array.from("Coisas");
console.log(myNewArray)
console.log(Array.isArray(myNewArray))
console.log(myNewArray[0] + " - " + myNewArray[3])

const keys = numbers.keys()
let value = ""
for (let x of keys) {
  value += x + "\n";
}
console.log(value)

const f = numbers.entries();
for (let x of f) {
  console.log(x)
}

const include = numbers.includes(9)
console.log(include)
