// async & await
// clear style of using promise :)

// 1. async 어떻게 쓰는지
// function fetchUser() {
//   // // do network reqeust in 10 secs...
//   // return 'jini';
//   return new Promise((resolve, reject) => {
//     resolve('jini');
//   });
// }

// promise를 이용하지않고 더 간편하게 비동기를 작성하는 방법은! 함수앞에 async를 써주면 된다!
async function fetchUser() {
  return 'jjini';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await
// - await은 async가 붙은 함수 안에서만 쓸수 있다.

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(1000);
  return '🍎';
}

async function getBanana() {
  await delay(1000);
  return '🍌';
}

// callback hell!!
// function pickFruits() {
//   return getApple().then((apple) => {
//     return getBanana().then((banana) => `${apple} + ${banana}`);
//   });
// }

// 콜백지옥 -> async 사용으로 간단하게 작성
async function pickFruits() {
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 5. 유용한 Promise APIs
// promise에 있는 all이란 API를 사용하게 되면 promise 배열을 전달하게 되면 모든 promise들이 병렬적으로 다 받을때까지 모아준다.
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join(' + ')
  );
}

pickAllFruits().then(console.log);

// 어떤 것이든 상관없고 먼저 따지는 첫번째 과일만 받아오고 싶다면
// race를 사용하면 배열의 전달된 promise 중에서 가장 먼저 값을 리턴하는 것만 전달이된다.
function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);
