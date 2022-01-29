function Get() {
  var tot = 0;

  fetch("/adventofcode/2015/Day2/input.txt")
    .then((response) => response.text())
    .then((data) => {
      data.split("\r\n").forEach((element) => {
        var elementDizi = [];
        element.split("x").forEach((element2) => {
          elementDizi.push(parseInt(element2));
        });
        elementDizi.sort(function (a, b) {
          return a - b;
        });
        tot += 2 * (elementDizi[0] + elementDizi[1]);
        tot += elementDizi[1] * elementDizi[2] * elementDizi[0];
      });
      console.log(tot);
    });
}

Get();
