function johnMary(str) {
    var johnLength = str.toLowerCase().split("john").length - 1;
    var maryLength = str.toLowerCase().split("mary").length - 1;


console.log('johnLength:'+johnLength);
console.log('maryLength:'+maryLength);

    return (johnLength == maryLength);
}
  
console.log(johnMary("John&Mary&john&Mary"));