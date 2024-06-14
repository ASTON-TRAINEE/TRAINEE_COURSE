// пример класса:

// class Animal {
//     constructor(speed, name) {
//         this.speed = speed;
//         this.name = name;
//     }
//     run(speed) {
//         console.log(`${this.name} бежит со скоростью ${this.speed}.`);
//     }
//     stop() {
//         this.speed = 0;
//         console.log(`${this.name} стоит неподвижно.`);
//     }
// }
//
// const animal = new Animal(100, "Мой питомец");
//
// animal.run()

// class Rabbit extends Animal {
//     // // генерируется для классов-потомков, у которых нет своего конструктора
//     // constructor(...args) {
//     //     super(...args);
//     // }
//     hide() {
//         console.log(`${this.name} прячется!`);
//         super.stop()
//     }
//
// }
//
// const rabbit = new Rabbit(300, 'ds');

// rabbit.run(5); // Белый кролик бежит со скоростью 5.
// Белый кролик прячется!

//Однако есть важные отличия от функций-конструкторов:
//
// Во-первых, функция, созданная с помощью class,
// помечена специальным внутренним свойством [[IsClassConstructor]]: true.
// Поэтому это не совсем то же самое, что создавать её вручную.
//
// В отличие от обычных функций, конструктор класса не может быть вызван без new:
//
// class User {
//   constructor() {}
// }
//
// console.log(typeof User); // function
// User(); // Error: Class constructor User cannot be invoked without 'new'
// Кроме того, строковое представление конструктора класса в большинстве движков JavaScript начинается с «class …»
//
// class User {
//   constructor() {}
// }
//
// console.log(User); // class User { ... }
// Методы класса являются неперечислимыми. Определение класса устанавливает флаг enumerable в false для всех методов в "prototype".
//
// И это хорошо, так как если мы проходимся циклом for..in по объекту, то обычно мы не хотим при этом получать методы класса.
//
// Классы всегда используют use strict. Весь код внутри класса автоматически находится в строгом режиме.
