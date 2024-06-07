// console.log('Start');
//
// example()
// setTimeout(function setTimeoutFn1() {
//     console.log('Timeout finished1');
// }, 0);
//
// console.log('End');
//
// function example () {
//     console.log('example')
//
//     setTimeout(function setTimeoutFn2() {
//         console.log('Timeout finished2');
//     }, 0)
// }

///////////////////////
// function bar() {
//     console.log('bar start');
//     setTimeout(() => {
//         console.log('bar end');
//     }, 1000);
// }
//
// function baz() {
//     console.log('baz start');
//     setTimeout(() => {
//         console.log('baz end');
//     }, 500);
// }
//
// function foo() {
//     console.log('foo start');
//     bar();
//     baz();
//     console.log('foo end');
// }
//
// console.log('Script start');
// foo();
// console.log('Script end');

// ответ
// Script start
// foo start
// bar start
// baz start
// foo end
// Script end
// baz end

///////////////////////

// function bar() {
//     console.log('bar start');
//     setTimeout(() => {
//         console.log('bar end');
//     }, 2000);
// }
//
// function baz() {
//     console.log('baz start');
//     setTimeout(() => {
//         console.log('baz end');
//     }, 0);
// }
//
// function foo() {
//     console.log('foo start');
//
//     function sleep(ms) {
//         const start = Date.now();
//
//         while (Date.now() < start + ms) {
//
//         }
//     }
//
//     function loop() {
//         const start = new Date().getTime();
//         sleep(3000)
//         const end = new Date().getTime();
//         console.log(`SecondWay: ${end - start}ms`);
//     }
//     bar();
//     loop();
//
//     baz();
//     console.log('foo end');
// }
//
// console.log('Script start');
// foo();
// console.log('Script end');
///////////////////////////////////
// setTimeout(()=> {
//     console.log('t1')
// },0)
//
// const promise1 = Promise.resolve();
// promise1
//     .then(()=> console.log('promise1'))
//     .then(()=>  console.log('promise2'))
//
// const promise2 = Promise.resolve();
//
// setTimeout(()=> {
//     console.log('t2')
// },0)
// promise1
//     .then(()=> console.log('promise3'))
//     .then(()=> console.log('promise4'))
//
// setTimeout(()=> {
//     console.log('t3')
// },0)
///////////////////////////////
// console.log("1");
//
// setTimeout(() => console.log("2"), 1);
//
// let promise = new Promise((resolve) => {
//   console.log("3");
//   resolve();
// });
//
// promise.then(() => console.log("4"));
//
// setTimeout(() => console.log("5"));
//
// console.log("6");

///////////////////////////////
// Promise
//     .reject('a')
//     .catch(p => p + 'b')
//     .catch(p => p + 'с')
//     .then(p => p + 'd')
//     .finally(p => p + 'e')
//     .then(p => console.log(p)) //

///////////////////////
// function a() {
//     console.log('1')
//     Promise.resolve().then(a)
// }
//
// function b() {
//     console.log('2')
//     setTimeout(b);
// }
// a()
// b()


/////////////////////////

/////////////////////
// const asyncFn = async () => {
//     console.log(1)
//     const data = () => {
//         console.log('async')
//     }
//
//     await data()
//     console.log(2)
//     console.log('hello')
// }
//
// asyncFn()
// console.log(3)

// альтернативный код на промис
// const asyncFn = () => {
//     console.log(1);
//     const data = () => {
//         return new Promise((resolve) => {
//             console.log('async');
//             resolve();
//         });
//     };
//
//     return data()
//         .then(() => {
//             console.log(2);
//             console.log('hello');
//
//             return 456
//         });
// };
//
// asyncFn()
//
// console.log(3)
