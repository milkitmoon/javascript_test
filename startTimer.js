function startTimer(callback, interval) {
    var counter = 1
    var intervalId = setInterval(function() {
        if(callback(counter)) {
            counter++;
        } else {
            clearInterval(intervalId);
        }
    }, interval);

  }

  function callback(counter) {
    console.log(counter);
    return counter < 5;
  }

  startTimer(callback, 50);
