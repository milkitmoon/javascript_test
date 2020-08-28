function Timer() {
  this.counter++;

  console.log(counter);
  return counter < 5;
  }


function startTimer(callback, interval) {
//    var counter = 1
    var myVar = setInterval(callback, interval);

}


startTimer(this.Timer, 50);
