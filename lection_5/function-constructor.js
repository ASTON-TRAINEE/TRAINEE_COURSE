// function User(name) {
// //    this = {};  (неявно)
//
// //    добавляет свойства к this
//     this.name = name;
//     this.isAdmin = false;
//
//  //   return this;  (неявно)
// }
//
// Если вызвать без new, то будет undefined - отработает как обычная ф-ция


// const user = new User("Jack")

// Потеря конструктора

// function Rabbit() {
//     this.a = 2
// }

// по умолчанию:
// Rabbit.prototype = { constructor: Rabbit }

// let rabbit = new Rabbit();

// console.log(rabbit);


// Обычно конструкторы не имеют оператора return.
// Их задача – записать все необходимое в this, и это автоматически становится результатом.
//
// Но если return всё же есть, то применяется простое правило:
// При вызове return с объектом, вместо this вернётся объект.
// При вызове return с примитивным значением, оно проигнорируется.
// Другими словами, return с объектом возвращает этот объект, во всех остальных случаях возвращается this.

// function BigUser() {
//
//     this.name = "John";
//
//     return { name: "Godzilla" };  // <-- возвращает этот объект
// }
//
// console.log( new BigUser() );

// вызов return без объекта:
// function SmallUser() {
//
//     this.name = "John";
//
//     return; // <-- возвращает this
// }
//
// console.log( new SmallUser().name );  // John

// Можно вызвать функцию-конструктор без new:

// function User(name) {
//     if (!new.target) { // в случае, если вы вызвали меня без оператора new
//         return new User(name); // ...я добавлю new за вас
//     }
//
//     this.name = name;
// }
//
// const john = User("John"); // переадресовывает вызов на new User
// console.log(john.name);

