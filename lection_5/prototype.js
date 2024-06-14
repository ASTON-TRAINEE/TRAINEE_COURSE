// Прототипное наследование - это повторно использовать то, что есть в объекте, не копировать/переопределять его методы,
// а просто создать новый объект на его основе.

// Свойство __proto__ — исторически обусловленный геттер/сеттер для [[Prototype]]
// [[Prototype]] - это внутреннее свойство объекта, которое указывает на прототип этого объекта.
// [[Prototype]] является внутренним механизмом и не всегда доступен напрямую из JavaScript кода.

// const obj1 = {
//     a: 1
// }
//
//
// const obj2 = {
//     b:2
// }
// obj2.__proto__ = obj1; сеттер proto будет устанавливать [[Prototype]] для объекта obj2 и равняется obj1
//
// const obj3 = {
//     c: 3
// }
//
// obj2.__proto__ = obj3;
//
// console.log(obj2.a)

////////////
// Более длиннная цепочка прототипов
// let animal = {
//     eats: true,
//     walk() {
//         alert("Animal walk");
//     }
// };
//
// let rabbit = {
//     jumps: true,
//     __proto__: animal
// };
//
// let longEar = {
//     earLength: 10,
//     __proto__: rabbit
// };
//
// // walk взят из цепочки прототипов
// longEar.walk(); // Animal walk
// console.log(longEar.jumps); // true (из rabbit)

/// значение this в прототипах
// прототипы никак не влияют на this.
//
// Неважно, где находится метод: в объекте или его прототипе. При вызове метода this — всегда объект перед точкой.
const animal = {
    sleep() {
        this.isSleeping = true;
    }
};

const rabbit = {
    name: "White Rabbit",
    __proto__: animal
};

// модифицирует rabbit.isSleeping
rabbit.sleep();

console.log(rabbit.isSleeping);
console.log(animal.isSleeping);

////////// в циклах
// let animal = {
//     eats: true
// };
//
// let rabbit = {
//     jumps: true,
//      run: true,
//     __proto__: animal
// };
//
// // Object.keys возвращает только собственные ключи
// console.log(Object.keys(rabbit)); // jumps
//
// // for..in проходит и по своим, и по унаследованным ключам
// for(let prop in rabbit) console.log(prop); // jumps, затем eats




////////////// Итоги:
// 1.В JavaScript все объекты имеют скрытое свойство [[Prototype]], которое является либо другим объектом, либо null.
// 2. Мы можем использовать obj.__proto__ для доступа к нему (исторически обусловленный геттер/сеттер).
// 3. Объект, на который ссылается [[Prototype]], называется «прототипом».
// 4. Если мы хотим прочитать свойство obj или вызвать метод, которого не существует у obj, тогда JavaScript попытается найти его в прототипе.
// 5. Операции записи/удаления работают непосредственно с объектом, они не используют прототип (если это обычное свойство, а не сеттер).
// 6. Если мы вызываем obj.method(), а метод при этом взят из прототипа, то this всё равно ссылается на obj.
// Таким образом, методы всегда работают с текущим объектом, даже если они наследуются.
// 7. Цикл for..in перебирает как свои, так и унаследованные свойства. Остальные методы получения ключей/значений работают только с собственными свойствами объекта.

// Не меняйте [[Prototype]] существующих объектов, если важна скорость
// Технически мы можем установить/получить [[Prototype]] в любое время.
// Но обычно мы устанавливаем прототип только раз во время создания объекта,
// а после не меняем: rabbit наследует от animal, и это не изменится.
//
// И JavaScript движки хорошо оптимизированы для этого.
// Изменение прототипа «на лету» с помощью Object.setPrototypeOf или obj.__proto__= – очень медленная операция,
// которая ломает внутренние оптимизации для операций доступа к свойствам объекта.
// Так что лучше избегайте этого кроме тех случаев, когда вы знаете, что делаете,
// или же когда скорость JavaScript для вас не имеет никакого значения.

// Задачи для студентов:
//1,
// let animal = {
//     jumps: null
// };
// let rabbit = {
//     __proto__: animal,
//     jumps: true
// };
//
// console.log( rabbit.jumps ); // ? (1)
//
// delete rabbit.jumps;
//
// console.log( rabbit.jumps ); // ? (2)
//
// delete animal.jumps;
//
// console.log( rabbit.jumps ); // ? (3)

//2.
//Какой объект получит свойство full при вызове rabbit.eat(): animal или rabbit?
// let animal = {
//     eat() {
//         this.full = true;
//     }
// };
//
// let rabbit = {
//     __proto__: animal
// };
//
// rabbit.eat(); // rabbit.full


// class Animal {
//   nameS = "bob";
//   setName(newName) {
//     this.nameS = newName;
//   }
//   getName() {
//     return this.nameS;
//   }
// }
//
// class Dog extends Animal {
//   constructor() {
//     super();
//   }
// }
//
// let animal = new Animal();
// console.log(animal.nameS);
// console.log(Animal.prototype); //  безымянный объект с конструктором (он не прописан в Animal явно, но все равно есть), методами и [[Prototype]] который будет = Object
//
// const objD = {};
// Object.setPrototypeOf(objD, animal);
// console.log(objD.nameS);

// class User {
//   constructor(name) {
//     this.name = name
//   }
// }
// const user = new User('Max')
// console.log(user.name.__proto__ === String.prototype);
//
// let animal = {
//   eats: true
// };
//
// function Rabbit(name) {
//   this.name = name;
// }
//
// console.log(Rabbit === Rabbit.prototype.constructor)
// // Rabbit.prototype = animal;
//
// let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal
//
// console.log( rabbit );
// console.log( rabbit.eats );
// console.log( rabbit.__proto__ === animal );
