let kim = { name: 'kim', first: 10, second: 20 };
let lee = { name: 'lee', first: 10, second: 10 };
function sum(prefix) {
  // this = kim;
  return prefix + (this.first + this.second);
}
// sum()과 똑같음
// 모든 함수는 call이라는 객체를 가지고있다.
// .call() 첫번째 인자로는 함수의 내부적으로 this를 뭘로 할것인지 오고
// 두번째 인자부터는 호출하려는 함수의 파라미터에 들어갈 인자값들이 온다.
console.log('kim.call(kim)', sum.call(kim, '=> '));
console.log('lee.call(kim)', sum.call(lee, ': '));
