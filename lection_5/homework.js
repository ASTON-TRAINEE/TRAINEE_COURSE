//1.
// const a = {b: 1},
//     c = Object.create(a);
//
// console.log(c.b); // ?
// delete c.b;
// console.log(c.b); // ?
// delete a.b;
// console.log(c.b); // ?
// a.z = 2;
// console.log(c.z); // ?
// c.z = 3;
// console.log(a.z); // ?

// 2.

// const promise = new Promise(() => {
// })
// promise.prototype === Promise.__proto__ // ?
//
// const obj = {}
// obj.__proto__ === Object.prototype // ?
//
// new Array([]).__proto__ === Array.prototype // ?
//
// function Fn1 () {}
// function Fn2 () {}
// Fn1.constructor === Fn2.constructor // ?
//
// Fn1.prototype === Fn2.prototype // ?
//3.

// У вас есть два конструктора, Animal и Bird.
// Каждый объект типа Bird должен наследовать метод speak от Animal.
// Однако, Bird также должен иметь свой собственный метод fly.

// Создайте функцию-конструктор Animal, который принимает параметр name и устанавливает его как свойство объекта.
// Добавьте метод speak в Animal, который выводит в консоль звук, издаваемый животным (например, "Some generic sound").
// Создайте конструктор Bird, который принимает параметр name и вызывает конструктор Animal с тем же именем.
// Добавьте метод fly в Bird, который выводит в консоль сообщение о том, что птица летит (например, "Flying high!").
// Создайте объекты animal и bird с использованием соответствующих конструкторов и вызовите их методы speak и fly.
// Решите задачу, используя прототипное наследование, чтобы Bird наследовал от Animal.

// Должно быть такое поведение:
// const animal = new Animal("Дженни");
// const bird = new Bird("Воробей");
//
// animal.speak(); // "Some generic sound"
// bird.speak();   // "Some generic sound"
// bird.fly();     // "Flying high!"


