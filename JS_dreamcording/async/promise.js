'use strict';

// Promise is a JavaScript object for asynchronous operation.
// 1. state 상태
// state: pending -> fulfilled or rejected
//  - 프로세스가 무거운 operation을 수행하고 있는 중인지
//  - 기능 수행이 다 완료가 되어서 성공했는지 실패했는지 상태에 대해서 이해!
// 2. Producer vs Consumer
//  - 정보를 제공하는 프로듀서 vs 정보를 소비하는 컨슈머

// 1. Producer
// 새로운 promise가 만들어질때는 executor(실행함수) 콜백 함수가 바로 실행이된다.
const promise = new Promise((resolve, reject) => {
  // doing some heavy work(network, read files)
  console.log('doing something...');
  setTimeout(() => {
    resolve('ellie');
    //reject(new Error('no network'));
  }, 2000);
});

// 2 .Consumers: then,catch, finally 로 값을 받아올 수 있다.
promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  // 성공,실패 상관없이 무조건 마지막에 호출됨
  .finally(() => {
    console.log('finally');
  });

// 3. Promise chaining (연결하기)
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});
fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

// then 에서는 값을 바로 전달할 수 있고, 또 다른 비동기인 promise를 전달할 수 있다.

// 4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('🐓'), 1000);
  });
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    //setTimeout(() => resolve(`${hen} => 🥚`), 1000);
    setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
  });
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

getHen()
  // 한가지만 받아오는 경우 생략이 가능
  //.then((hen) => getEgg(hen))
  .then(getEgg) // 여기서 발생하는 에러를 처리 하고 싶을때 바로 다음에 catch를 통해 에러처리할수있다.
  .catch((error) => {
    return '🥨';
  })
  .then(cook)
  .then(console.log)
  .catch(console.log);
