function createCheckDigit(membershipId) {
  var sum = -1;
  var idLength = numberLength(membershipId);

  if(idLength > 1) {
    var subSum = sumDigit(membershipId);
    while( numberLength(subSum) > 1 ) {
      subSum = sumDigit(subSum);
    }
    sum = subSum;
  }

  return sum;
}

function numberLength(numbers) {
  return numbers.toString().length
}

function sumDigit(numbers) {
  return numbers
        .toString()
        .split('')
        .map(Number)
        .reduce(function (a, b) {
            return a + b;
        }, 0);
}

console.log(createCheckDigit("55555"));
