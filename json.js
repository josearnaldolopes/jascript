const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
  const jsonObj = JSON.parse(this.responseText);
  document.getElementById("name").innerHTML = jsonObj.name;
  document.getElementById("animal").innerHTML = jsonObj.pets[1].name + " (" + jsonObj.pets[1].animal + ")";
};
xmlhttp.open("GET", "json.json");
xmlhttp.send();