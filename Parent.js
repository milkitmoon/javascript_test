class Parent {
    static staticMethod() {
        return 'staticMethod';
    }
}

class Child extends Parent {
  constructor() {
      super();
  }


  static staticMethod() {
    return `${super.staticMethod()} wolrd`;
  }

  prototypeMethod() {
    //자식 클래스의 일반 메소드(프로토타입 메소드) 내부에서는 super 키워드를 사용하여 부모 클래스의 정적 메소드를 호출할 수 없다
//    return `${super.staticMethod()} wolrd`;

    return Parent.staticMethod();
  }
}

const child = new Child();

console.log(Child.__proto__ === Parent); // true
console.log(Child.prototype.__proto__ === Parent.prototype); // true

console.log(Parent.staticMethod()); // 'staticMethod'
console.log(Child.staticMethod());  // 'staticMethod'
console.log(new Child().prototypeMethod());
