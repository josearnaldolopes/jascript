let varString = "Eu sou o Batman.";
let varObject = new String("John Doe");  // y is an object
console.log(typeof varString)
console.log(typeof varObject)
console.log(varString === varObject)
console.log(varString == varObject)

let alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = alfabeto.length;
console.log(length)

let slice = alfabeto.slice(2, 18);
console.log(slice)

let substring = alfabeto.substring(2, 11);
console.log(substring)

let replace = alfabeto.replace("A", "B");
console.log(replace)

let fraseOriginal = "Eu não mentiria para você. Bem... Isso é uma mentira - Rick";
let fraseSemGraca = fraseOriginal.replace("mentira", "verdade");
console.log(fraseSemGraca)

let lowercase = alfabeto.toLowerCase();
console.log(lowercase)

let uppercase = fraseOriginal.toUpperCase();
console.log(uppercase)

let concat = alfabeto.concat(" + ", fraseOriginal);
console.log(concat)

let string1 = "      Hello World!      ";
let trim = string1.trim();
console.log(string1)
console.log(trim)

let indexOf = fraseOriginal.search("você")
console.log(indexOf)

let search = fraseOriginal.search("para")
console.log(search)

let lastIndexOf = fraseOriginal.lastIndexOf("Bem")
console.log(lastIndexOf)

let match = fraseOriginal.match(/Isso/g)
console.log(match)

let startsWith = fraseOriginal.startsWith("Quem")
console.log(startsWith)

let endsWith = fraseOriginal.endsWith("k")
console.log(endsWith)