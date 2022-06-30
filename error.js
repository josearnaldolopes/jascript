//Fonte: https://www.w3schools.com/js/js_errors.asp
function tryCatch() {
    // const message = 4;
    result = "";
    let x = 4;
    try {
      if(x == "") throw "empty";
      if(isNaN(x)) throw "not a number";
      x = Number(x);
      if(x < 5) throw "too low";
      if(x > 10) throw "too high";
    }
    catch(err) {
      result = "Input is " + err;
      return result;
    }
    finally {
        // return "ok"
        // console.log("Acabou")
    }
  }

console.log(tryCatch())