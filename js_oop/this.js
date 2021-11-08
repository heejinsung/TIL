let kim = {
  name: 'kim',
  first: 10,
  second: 20,
  sum: function () {
    //return kim.first + kim.second;
    return this.first + this.second;
  }
}
//console.log("kim.sum(kim.first, kim.second)", kim.sum(kim.first, kim.second));
console.log("kim.sum(kim.first, kim.second)", kim.sum());
