function Person(name, first, second) {
  this.name = name;
  this.first = first;
  this.second = second;
}

Person.prototype.sum = function () {
  return 'prototype : ' + (this.first + this.second);
};

let kim = new Person('kim', 10, 20);
kim.sum = function () {
  return 'this : ' + (this.first + this.second);
};
let sung = new Person('sung', 10, 10);
console.log('kim.sum()', kim.sum());
console.log('sung.sum()', sung.sum());
