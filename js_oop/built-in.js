console.log("Math.PI", Math.PI);
console.log("Math.random()", Math.random()); // 함수가 객체에 소속되어 있을땐 method
console.log("Math.floor(3,9)", Math.floor(3.9));

// 객체 활용
let MyMath = {
  PI: Math.PI,
  random: function () {
    return Math.random();
  },
  floor: function (val) {
    return Math.floor(val);
  }
}
console.log("MyMath.PI", MyMath.PI);
console.log("MyMath.random()", MyMath.random());
console.log("MyMath.floor(3,9)", MyMath.floor(3.9));

// 객체 활용하지않음, 구분하기 위해서 접두사를 사용함
let MyMath_PI = Math.PI;
function MyMath_random() {
  return Math.random();
}
function MyMath_floor(val) {
  return Math.floor(val);
}
