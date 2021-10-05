let kim = {
    name:'kim',
    first:10,
    second:20,
    third:30,
    sum:function(){
        return this.first+this.second+this.third;
    }
}
let sung = {
    name:'sung',
    first:10,
    second:10,
    third:10,
    sum:function(){
        return this.first+this.second+this.third;
    }
}
console.log("kim.sum()", kim.sum());
console.log("sung.sum()", sung.sum());

let d1 = new Date('2021-10-05');
console.log('d1.getFullYear()', d1.getFullYear());