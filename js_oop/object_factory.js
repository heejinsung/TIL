function Person(name, first, second, third) {
  this.name = name;
  this.first = first;
  this.second = second;
  this.third = third;
    this.sum = function(){
        return this.first+this.second+this.third;
    }
}

let kim = new Person('kim', 10, 20, 30);
let sung = new Person('sung', 10, 10, 20);
console.log("kim.sum()", kim.sum());
console.log("sung.sum()", sung.sum());

// console.log('Person()', Person());
// constructor
// console.log('new Person()', new Person());
// 함수를 호출하면 그냥 함수이고, 앞에 new 키워드를 붙혀서 호출하면 일반적인 함수가 아니라 객체를 생성하는 생성자 함수가 된다.
