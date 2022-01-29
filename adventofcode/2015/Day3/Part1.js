function Get() {
  var x = 0;
  var y = 0;
  var homeArray = [];
  fetch("/adventofcode/2015/Day3/input.txt")
    .then((response) => response.text())
    .then((data) => {
      data.split("").forEach((element) => {
        if (element == ">") {
          x++;
        } else if (element == "<") {
          x--;
        } else if (element == "^") {
          y++;
        } else if (element == "v") {
          y--;
        }
        var location = x.toString() + y.toString();
        homeArray.push(location);
      });
      var list = homeArray.filter((x, i, a) => a.indexOf(x) === i);
      console.log(list.length);
    });
}

Get();
