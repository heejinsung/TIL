'use strict';
// JavaScript is synchronous. 자바스크립트는 동기적이다.
// hositing이 된 이후부터 코드가 작성한 순서에 맞춰 하나하나씩 동기적으로 실행된다는 말이다
// hositing: var, function declaration 자동적으로 선언들이 제일 위로 올라가는 것이 호이스팅이다.

// Synchronous callback
function printImmdeiately(print) {
  print();
}

// Asynchronous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}

// 비동기적은 언제 코드가 실행될지 예측할수 없는 것을 말한다.
console.log('1'); // 동기
setTimeout(() => console.log('2'), 1000); // 비동기
console.log('3'); // 동기

printImmdeiately(() => console.log('hello')); // 동기
printWithDelay(() => console.log('async callback'), 2000); // 비동기

// Callback Hell example
// 1. 사용자에게 id,password 입력받아오기
// 2. login
// 3. login한 id를 받아오고, 받아온 id로 Role요청
// 4. 사용자 object name,role 출력
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === 'ellie' && password === 'dream') ||
        (id === 'coder' && password === 'academy')
      ) {
        onSuccess(id);
      } else {
        onError(new Error('not found'));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === 'ellie') {
        onSuccess({ name: 'ellie', role: 'admin' });
      } else {
        onError(new Error('no access'));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getRoles(
      user,
      (userWithRole) => {
        alert(
          `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
        );
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);

// 콜백 체인의 문제점
// 1. 가독성이 너무 많이 떨어진다.
//  - 어디서 어떤식으로 연결되어있는지,
//  - 비즈니스 로직을 한눈에 이해하는것도 어려움.
// 2. 에러가 발생하거나 디버깅을 해야하는 경우에도 어려움. 체인이 길어지면 길어질수록 분석하기 어렵다. 유지보수도 어려움
