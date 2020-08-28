function johnMary(str) {
    var nameArr = str.split('&').map(v => v.toLowerCase());

console.log(nameArr);

    var johnLength = nameArr.filter(function(item){ return item === "john"; }).length
    var maryLength = nameArr.filter(function(item){ return item === "mary"; }).length

console.log('johnLength:'+johnLength);
console.log('maryLength:'+maryLength);

    return (johnLength == maryLength);
}
  
console.log(johnMary("John&Mary&john&Mary"));