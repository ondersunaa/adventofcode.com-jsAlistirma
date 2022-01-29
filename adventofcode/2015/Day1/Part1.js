
  function Get() {
  var ust = 0;
  var alt = 0;
  fetch("/adventofcode/2015/Day1/input.txt")
  .then((response) => response.text())
  .then((data) => {
    data.split("").forEach((element) => {
      if (element == "(") {
        ust++;
      } else if (element == ")") {
        alt++;
      }
    });
    console.log(ust - alt);
  
  });
}

Get();


