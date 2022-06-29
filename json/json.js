const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
  const jsonObj = JSON.parse(this.responseText);
  document.getElementById("name").innerHTML = "O " + jsonObj.name + " tem " + jsonObj.age + " anos.";
  document.getElementById("animal").innerHTML = jsonObj.pets[1].name + " é um " + jsonObj.pets[1].animal + ".";
  document.getElementById("json").innerHTML = "JSON completo: " + this.responseText;
};
xmlhttp.open("GET", "json.json");
xmlhttp.send();