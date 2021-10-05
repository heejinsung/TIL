// 배열과 객체

let memberArray = ['egoing', 'graphittile', 'leezhce'];
console.log("memberArray[2]", memberArray[2]);

let memberObject = {
  manager: 'egoing',
  developer: 'graphittile',
  designer: 'leezhce'
}
// Update(수정)
memberObject.designer = 'leezche';

console.log("memberObject.desinger", memberObject.designer);
console.log("memberObject['desinger']", memberObject['designer']);
// Delete(삭제)
delete memberObject.manager
console.log("after delete memberObject.manager", memberObject.manager); // undefined