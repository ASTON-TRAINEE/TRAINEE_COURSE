// 1. Объявление функции (Function Declaration)
// function regularFunction(a, b) {
//     return a + b;
// }
//
// 2. Функциональное выражение (Function Expression)
// const functionExpression = function(a, b) {
//     return a * b;
// };
//
//  3. Стрелочная функция (Arrow Function)
// const arrowFunction = (a, b) => a - b;
//
//  4. Функция-конструктор
// function Person(name) {
//     this.name = name;
// }
//
//  5. Анонимная функция
// const anonymousFunction = function() {
//     console.log('Это анонимная функция');
// };
//
//
// 6. Самовызывающаяся функция (Immediately Invoked Function Expression - IIFE)
// (function() {
//     console.log('Это IIFE');
// })();
//
//
// 7. Функция генератор (Generator Function):
// function* generatorFunction() {
//     yield 1;
//     yield 2;
//     yield 3;
// }
//
// const generator = generatorFunction();

//
// console.log(generator.next()); // Output: 1
// console.log(generator.next()); // Output: 2
// console.log(generator.next()); // Output: 3
// console.log(generator.next()); // Output: undefined
//
// Еще один пример использования функций генераторов с Symbol.iterator
// const iterableObject = {
//     start: 1,
//     end: 5,
//     [Symbol.iterator]: function* () {
//         for (let i = this.start; i <= this.end; i++) {
//             yield i;
//         }
//     },
// };

// Symbol.iterator представляет собой встроенный символ в JavaScript,
// используемый для определения метода, который возвращает итератор для объекта.
// Итератор — это объект с методом next(), который возвращает следующий элемент в последовательности.

// Этот символ играет ключевую роль в реализации протокола итератора,
// который обеспечивает унифицированный способ перебора элементов в различных структурах данных,
// таких как массивы, строки, множества, и т.д.
//
// // Используем for...of для итерации по объекту
//  for (const number of iterableObject) {
//     console.log(number);
// }

// LexicalEnvironment

// Lexical Environment — это тип спецификации, используемый для разрешения имён идентификаторов
// при поиске конкретных переменных и функций на основе лексической структуры вложенности кода ECMAScript.
// Лексическое окружение (Lexical Environment) состоит из записи среды и, возможно, нулевой ссылки на внешнюю лексическую среду.

// let x = 10;
// let y = 20;
// const foo = z => {
//     let x = 100;
//     return x + y + z;
// }

// foo(30);//вернёт 150. ЛО для foo будет выглядеть так
// {record: {z: 30, x: 100}, parent: outer};
//  outer будет указывать на глобальное ЛО {record: {x: 10, y: 20}, outer: null}

// function testFn() {
//     var locaVar = 10; // свободная переменная для функции innerFn
//     function innerFn(p) {
//         console.log(p + localVar);
//     }
//
//     return innerFn; //возврат функции
// }
//
// var test = testFn();// присвоим innerFn в переменную
// test();

// концепция динамически распределяемой памяти (куча, heep) + сборщик мусора (garbage collector) + подсчёт ссылок.
// Суть этой концепции проста: пока на объект существует хоть одна ссылка, он не удаляется из памяти.

// Замыкание (Closures)
//
// Замыкание — совокупность блока кода и данных того контекста, в котором тот блок порождён,
// т.е. это связь сущности с порождающими контекстами через цепь ЛО

// Пример замыкания!

// function person() {
//   let name = 'Peter';
//
//   return function displayName() {
//     console.log(name);
//   };
// }
// let peter = person();
// peter(); // prints 'Peter'

// Когда выполняется функция person, JavaScript создаёт новый контекст выполнения и лексическое окружение для функции.
// После того, как эта функция завершится, она вернёт displayName функцию и назначится на переменную peter.
//
// Таким образом, её лексическое окружение будет выглядеть так:
//
// personLexicalEnvironment = {
//   environmentRecord: {
//     name : 'Peter',
//     displayName: < displayName function reference>
//   }
//   outer: <globalLexicalEnvironment>
// }

// Когда функция person завершится, её контекст выполнения выкинется из стека.
// Но её лексическое окружение всё ещё останется в памяти,
// так как на него ссылается лексическое окружение его внутренней функции displayName.
// Таким образом, её переменные всё ещё будут доступны в памяти.
//
// При выполнении функции peter (которая на самом деле является отсылкой к функции displayName),
// JavaScript создаёт новый контекст выполнения и лексическое окружение для этой функции.

// Так что его лексическое окружение будет выглядеть таким образом:
//
// displayNameLexicalEnvironment = {
//   environmentRecord: {
//
//   }
//   outer: <personLexicalEnvironment>
// }
//
// В функции displayName нет переменной, её запись окружения будет пуста.
// Во время выполнения этой функции, JavaScript будет пытаться найти переменную name в лексическом окружении функции.
//
// Так как там нет переменных в лексическом окружении функции displayName,
// она будет искать во внешнем лексическом окружении, то есть, лексическом окружении функции person,
// которое до сих пор в памяти. JavaScript найдёт эту переменную и name выводится в консоль.

//var a = 5;
//
// function testFn() {
//   alert(a);
// }
//
// (function(funArg) {
//   var a = 20;
//   funArg();
// })(testFn)

// выведет 5 т.к. в ScopeChain/LexicalEnvironment testFn будет глобальный объект, в котором а = 5

// пример каррирования

//function curry(f) { // curry(f) выполняет каррирование
//   return function(a) {
//     return function(b) {
//       return f(a, b);
//     };
//   };
// }
//
// Примеры использования ЗАМЫКАНИЙ:
//// 1. Сокрытие информации
// function createCounter() {
//     let count = 0; // Скрытая переменная
//     return function() {
//         return ++count;
//     };
// }
//
// const counter = createCounter();
// console.log(counter()); // 1
// console.log(counter()); // 2
//
// // 2. Реализация частичных применений
// function add(a, b) {
//     return a + b;
// }
//
// function partial(fn, ...args) {
//     return function(...restArgs) {
//         return fn(...args, ...restArgs);
//     };
// }
//
// const add5 = partial(add, 5);
// console.log(add5(3)); // 8
//
// // 3. Рекурсия
// function factorial(n) {
//     if (n <= 1) {
//         return 1;
//     }
//     return n * factorial(n - 1);
// }
//
// console.log(factorial(5)); // 120
//
// // 4. Фабричные функции
// function createGreeter(greeting) {
//     return function(name) {
//         return `${greeting}, ${name}!`;
//     };
// }
//
// const greetEn = createGreeter('Hello');
// console.log(greetEn('John')); // Hello, John!
//
// const greetFr = createGreeter('Bonjour');
// console.log(greetFr('Jean')); // Bonjour, Jean!
//
// // 5. Работа с асинхронным кодом
// function fetchData(url) {
//     return function(callback) {
//         setTimeout(() => {
//             const data = `Data from ${url}`;
//             callback(data);
//         }, 1000);
//     };
// }
//
// const fetchGoogleData = fetchData('https://www.google.com');
// fetchGoogleData(function(data) {
//     console.log(data); // Data from https://www.google.com
// });

// function sum(a, b) {
//   return a + b;
// }
//
// let curriedSum = curry(sum);
//
// console.log( curriedSum(1)(2) ); // 3



