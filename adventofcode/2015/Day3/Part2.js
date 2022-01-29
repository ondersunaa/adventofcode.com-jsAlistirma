function Get() {
  var x = 0;
  var y = 0;
  var rx = 0;
  var ry = 0;
  var counter = 0;
  var homeArray = [];
  fetch("/adventofcode/2015/Day3/input.txt")
    .then((response) => response.text())
    .then((data) => {
      data.split("").forEach((element) => {
        var location = "";
        counter++;
        if (counter % 2 == 0) {
          if (element == ">") {
            x++;
          } else if (element == "<") {
            x--;
          } else if (element == "^") {
            y++;
          } else if (element == "v") {
            y--;
          }
          location = x.toString() +"/"+ y.toString();
        } else {
          if (element == ">") {
            rx++;
          } else if (element == "<") {
            rx--;
          } else if (element == "^") {
            ry++;
          } else if (element == "v") {
            ry--;
          }
          location = rx.toString() +"/"+ ry.toString();
        }
        homeArray.push(location);
        
      });
      var list = homeArray.filter((x, i, a) => a.indexOf(x) === i);
      console.log(list.length);
    });
}

Get();
