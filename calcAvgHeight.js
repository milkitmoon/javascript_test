
function calcAvgHeight(data) {
    var arr = Object.values(data);

/*
    var avg = arr.reduce(
        function(prev, cur){
            return (prev.height + cur.height);
          }, 0
    ).height / arr.length;
*/

    var sum = (prev, cur) => ({height: prev.height + cur.height});
    var avg = arr.reduce(sum, { height: 0, weight: 0 }).height / arr.length;

    return avg;
  }

  var avgHeight = calcAvgHeight({
    Matt: { height: 174, weight: 69 },
    Jason: { height: 190, weight: 103 }
  });
  console.log(avgHeight);
