let superObj = { superVal: 'super' };
// let subObj = { subVal: 'sub' };
// subObj.__proto__ = superObj;
// 밑에 코드와 동일한 값 출력.(두줄)
let subObj = Object.create(superObj);
subObj.subVal = 'sub';
debugger; // 자바스크립트의 실행을 일시중지 시킬수 있고, 객체의 상태를 자세히 들여다 볼 수 있다.
console.log('subObj.subVal =>', subObj.subVal);
console.log('subObj.superVal =>', subObj.superVal);
subObj.superVal = 'sub';
console.log('superObj.superVal =>', superObj.superVal);

// 예제
let kim = {
  name: 'kim',
  first: 10,
  second: 20,
  sum: function () {
    return this.first + this.second;
  },
};
let lee = Object.create(kim);
lee.name = 'lee';
lee.first = 10;
lee.second = 10;
lee.avg = function () {
  return (this.first + this.second) / 2;
};
// let lee = {
//   name: 'lee',
//   first: 10,
//   second: 10,
//   avg: function () {
//     return (this.first + this.second) / 2;
//   },
// };
// lee.__proto__ = kim;
console.log('lee.sum() :', lee.sum());
console.log('lee.avg() :', lee.avg());
