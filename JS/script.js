window.onload = function() {
  let c = document.getElementById("celc");
  let f = document.getElementById("ferh");
  let k = document.getElementById("kelv");
  //from Celsius to (Fahrenheit && Kelvin);
  c.oninput = function() {
    f.value = (c.value * (9/5) + 32);
    k.value = (c.value * 1) + 273.15;
  }
  //from Fahrenheit to (Celsius && Kelvin);
  f.oninput = function() {
    c.value = ((f.value - 32) / (9/5));
    k.value = ((f.value - 32) * 5/9 + 273.15);
  }
  //from Kevin to (Celsius && Fahrenheit);
  k.oninput = function() {
    c.value = (k.value - 273.15);
    f.value = (k.value - 273.15) * 9/5 + 32;
  }
}
