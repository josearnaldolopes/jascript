let texto = ""
for (let inc = 0; inc < 10; inc++) {
    if (inc === 3) { continue; }
    texto += "O número é " + inc + "\n";
}
console.log(texto)

const cars = ["BMW", "Volvo", "Saab", "Ford"];
list: {
  texto += cars[0] + "\n";
  texto += cars[1] + "\n";
  break list;
  texto += cars[2] + "\n";
  texto += cars[3] + "\n";
}
console.log(texto)