var PersonL = (function () {

  function PersonL(name) {
    this._name = name;
  }

  PersonL.prototype.sayHi = function () {
    console.log('Hi~~! ' + this._name);
  };

  return PersonL;
}());

var me = new PersonL('Lee');
me.sayHi(); // Hi! Lee.

console.log(me instanceof PersonL);
