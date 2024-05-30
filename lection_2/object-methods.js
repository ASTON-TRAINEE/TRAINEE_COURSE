/**
 * Методы копирования объекта
 */

// 1. Object.assign:
// const originalObject = {
//     sayHi() {
//         console.log('Hi!')
//     },
//     a: 1,
//     b: {
//         c: 2
//     },con
//     und: undefined,
//     null: null,
//     date: new Date(),
//     set: new Set(),
//     map: new Map(),
//     symbol: Symbol('id'),
// }
// const copiedObject = Object.assign({}, originalObject);
//
// console.log(copiedObject.b === originalObject.b)

//2. Spread оператор:
// const copiedObject = {...originalObject};

//3. JSON.parse и JSON.stringify:
// const copiedObject = JSON.parse(JSON.stringify(originalObject));

// console.log(copiedObject)
//4. Object.create
// const clone = Object.create(Object.getPrototypeOf(originalObject), Object.getOwnPropertyDescriptors(originalObject));
//
// console.log(originalObject)


/**
 * Методы создания объекта
 */

// 1. Литерально
// const person = {
//   name: 'John',
//   age: 30,
// };

// 2. С помощью встроенного конструктора new Object();
// const person2 = new Object();
// person2.name = 'John';
// person2.age = 30;
// console.log(person2);

// 3. С помощью функций-конструкторов
// function Person(name, age, occupation) {
//   this.name = name;
//   this.age = age;
//   this.occupation = occupation;
// }
//
// const person3 = new Person('John', 30, 'Developer');
// console.log(person3);

// 4. С помощью Object.create()

// const person = Object.create({}, {
//     name: {
//         value: "John",
//         writable: false, // запретить присвоение "person.name="
//          configurable: false ,// запретить удаление "person.name",
//         enumerable: false, // запретить перебирать в циклах
//     }
// })
//
//
// person.name = 'qwewqe'
//
// for (const personKey in person) {
//     console.log(person[personKey])
// }
// console.log(person.name)

// const user = {
//     firstName: "Вася",
//     surname: "Петров",
//
//     get fullName() {
//         return this.firstName + ' ' + this.surname;
//     },
//
//     set fullName(value) {
//         const split = value.split(' ');
//         this.firstName = split[0];
//         this.surname = split[1];
//     }
// };
//
// console.log( user.fullName ); // Вася Петров (из геттера)
//
// user.fullName = "Петя Иванов";
// console.log( user.firstName ); // Петя  (поставил сеттер)
// console.log( user.surname ); // Иванов (поставил сеттер)


// либо вторая запись
// const user2 = {
//     firstName: "Вася",
//     surname: "Петров"
// }
//
// Object.defineProperty(user2, "fullName", {
//     get: function() {
//         return this.firstName + ' ' + this.surname;
//     },
//
//     set: function(value) {
//         var split = value.split(' ');
//         this.firstName = split[0];
//         this.surname = split[1];
//     }
// });
//
// user2.fullName = "Петя Иванов";
// console.log( user2.firstName ); // Петя  (поставил сеттер)

//value – значение свойства, по умолчанию undefined
// writable – значение свойства можно менять, если true. По умолчанию false.
// configurable – если true, то свойство можно удалять, а также менять его в дальнейшем при помощи новых вызовов defineProperty. По умолчанию false.
// enumerable – если true, то свойство просматривается в цикле for..in и методе Object.keys(). По умолчанию false.
// get – функция, которая возвращает значение свойства. По умолчанию undefined.
// set – функция, которая записывает значение свойства. По умолчанию undefined.

// Чтобы избежать конфликта, запрещено одновременно указывать значение value и функции get/set.
// Либо значение, либо функции для его чтения-записи, одно из двух.
// Также запрещено и не имеет смысла указывать writable при наличии get/set-функций.

//5. с помощью класса
// class Person {
//   constructor(name, age, occupation) {
//     this.name = name;
//     this.age = age;
//     this.occupation = occupation;
//   }
//
//   greet() {
//     console.log(`Hello, my name is ${this.name}.`);
//   }
// }
//
// const person = new Person('John', 30, 'Developer');

/**
 *  Дополнительные методы
 */

//1. Object.keys(obj):

// Возвращает массив строк, представляющих все перечислимые свойства объекта.
//     Подводный камень: Не включает свойства из цепочки прототипов.
// const obj = { a: 1, b: 2 };
// console.log(Object.keys(obj)); // Вывод: ['a', 'b']

//2. Object.values(obj):
// Возвращает массив значений всех перечислимых свойств объекта.
//     Подводный камень: Также не включает свойства из цепочки прототипов.
// const obj = { a: 1, b: 2 };
// console.log(Object.values(obj)); // Вывод: [1, 2]

// 3.Object.entries(obj):
// Возвращает массив массивов, каждый из которых представляет пару "ключ-значение" для каждого перечислимого свойства объекта.
//     Подводный камень: Также не включает свойства из цепочки прототипов.
// const obj = { a: 1, b: 2 };
// console.log(Object.entries(obj)); // Вывод: [['a', 1], ['b', 2]]

// 4.Object.fromEntries(array):
// Этот метод преобразует массив [[ключ, значение]] или итерируемый объект с подобной структурой в объект.
// const array = [['name','Alex'], ["age", 30]];
// console.log(Object.fromEntries(array)); // Вывод: { name: 'John', age: 30 }

//5. Object.hasOwnProperty(prop):
// Возвращает логическое значение, указывающее, содержится ли указанное свойство непосредственно в объекте.
// const obj = { a: 1, b: 2 };
// console.log(obj.hasOwnProperty('a')); // Вывод: true

//6. Object.freeze(obj):
// Замораживает объект, что делает его неизменяемым. Нельзя добавлять, удалять или изменять существующие свойства.
// const obj = { a: 1, b: 2 };
// Object.freeze(obj);

// obj.c = 3; // Не приведет к изменению объекта

//7. Object.seal(obj):
// Запечатывает объект, что предотвращает добавление и удаление свойств. Можно изменять значения существующих свойств.
// const obj = { a: 1, b: 2 };
// Object.seal(obj);

// obj.c = 3; // Не добавится новое свойство
// obj.a = 10; // Можно изменить значение существующего свойства
