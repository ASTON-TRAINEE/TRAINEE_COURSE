// const promise = new Promise(function(resolve, reject) {
//     setTimeout(()=> {
//         resolve(123)
//     }, 1000)
// });
//
// promise
//     .then((data)=> console.log('data', data), (error)=> console.log('err', error))

// const promise2 = new Promise(function(resolve, reject) {
//     setTimeout(()=> {
//         console.log('reject')
//         reject(123)
//     }, 1000)
// });
//
// promise2
//     .catch((error)=> {
//         console.log('catch error', error)
//
//         return 456
//     })
//     .then((data)=>console.log('next promise', data))

// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("value"), 2000);
// })
//
// promise3
//     .finally((data) => console.log("Промис завершён", data))
//     .then(result => console.log(result));

// неправильный чейнинг

// const promise = new Promise(function(resolve, reject) {
//     setTimeout(() => resolve(1), 1000);
// });
//
// promise.then(function(result) {
//     console.log(result);
//     return result * 2;
// });
//
// promise.then(function(result) {
//     console.log(result);
//     return result * 2;
// });
//
// promise.then(function(result) {
//     console.log(result);
//     return result * 2;
// });

// цепочка возвращаемых новых промисов

// new Promise(function(resolve, reject) {
//
//     setTimeout(() => resolve(1), 1000);
//
// }).then(function(result) {
//
//     console.log(result); // 1
//
//     return new Promise((resolve, reject) => { // (*)
//         setTimeout(() => resolve(result * 2), 1000);
//     });
//
// }).then(function(result) { // (**)
//
//     console.log(result); // 2
//
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve(result * 2), 1000);
//     });
//
// }).then(function(result) {
//
//     console.log(result); // 4
//
// });

////////// PROMISE API /////////////

// PROMISE.ALL

// Метод Promise.all принимает массив промисов (может принимать любой перебираемый объект,
// но обычно используется массив) и возвращает новый промис.
//
// Новый промис завершится, когда завершится ВЕСЬ переданный список промисов,
// и его результатом будет массив их результатов.

// Promise.all([
//     new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
//     new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
//     new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
// ]).then(console.log);

// Если любой из промисов завершится с ошибкой, то промис,
// возвращённый Promise.all, немедленно завершается с этой ошибкой.

// Promise.all([
//   new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
//   new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка!")), 2000)),
//   new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
// ]).catch(console.log);

// !!! Если один промис завершается с ошибкой, то весь Promise.all завершается с ней,
// полностью забывая про остальные промисы в списке. Их результаты игнорируются.

// Promise.race

//Метод очень похож на Promise.all, но ждёт только первый выполненный промис, из которого берёт результат (или ошибку).

// Promise.race([
//     new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
//     new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка!")), 2000)),
//     new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
// ]).then(console.log); // 1

// Promise.allSettled

//Метод Promise.allSettled всегда ждёт завершения всех промисов. В массиве результатов будет
//
// {status:"fulfilled", value:результат} для успешных завершений,
// {status:"rejected", reason:ошибка} для ошибок.

// Promise.allSettled([
//     new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
//     new Promise((resolve, reject) => setTimeout(() => reject("Error"), 2000)),
//     new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
// ]).then(console.log);

// Promise.any

// Promise.any
// Метод очень похож на Promise.race, но ждёт только первый успешно выполненный промис, из которого берёт результат.
//
// Если ни один из переданных промисов не завершится успешно,
// тогда возвращённый объект Promise будет отклонён с помощью AggregateError – специального объекта ошибок,
// который хранит все ошибки промисов в своём свойстве errors.
//
// Promise.any([
//   new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка!")), 1000)),
//   new Promise((resolve, reject) => setTimeout(() => resolve(1), 2000)),
//   new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
// ]).then(console.log);

// P.S возможно у вас будет ошибка "Promise.any is not a function" , потому что в js нет ES2021, в браузере у вас все отработаботает
