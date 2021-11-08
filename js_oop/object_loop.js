// 배열의 반복문
let memberArray = ['egoing', 'graphittile', 'leezhce'];
console.group('array loop');
let i = 0;
while (i < memberArray.length) {
  console.log(i, memberArray[i]);
  i = i + 1;
}
console.groupEnd('array loop');

let memberObject = {
  manager: 'egoing',
  developer: 'graphittile',
  designer: 'leezhce'
}

// 객체의 반복문
console.group('object loop');
for (let name in memberObject) {
  console.log(name, memberObject[name]);
}
console.groupEnd('object loop');
