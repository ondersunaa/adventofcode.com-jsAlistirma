function Get() {
  var ust = 0;
  var alt = 0;
  var counter = 0;
  fetch("/adventofcode/2015/Day1/input.txt")
  .then((response) => response.text())
  .then((data) => {
    data.split("").forEach((element) => {
      counter++;
      if (element == "(") {
        ust++;
      } else if (element == ")") {
        alt++;
      }
      if (ust - alt == -1) {
        console.log(counter);
      }
    });
  
  });
}


Get();
