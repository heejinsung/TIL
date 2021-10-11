let kim = { name: 'kim', first: 10, second: 20 };
let lee = { name: 'lee', first: 10, second: 10 };
function sum(prefix) {
  // this = kim;
  return prefix + (this.first + this.second);
}
// sum();
console.log('kim.call(kim)', sum.call(kim, '=> ')); // apply와 비슷
console.log('lee.call(kim)', sum.call(lee, ': '));
let kimSum = sum.bind(kim, '-> ');
console.log('kimSum()', kimSum());
