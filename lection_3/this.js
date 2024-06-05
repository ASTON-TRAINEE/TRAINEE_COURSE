// Что такое this ?

// this - это объект, какой именно мы узнаем в момент вызова функции

// this в глобальном контексте будет ссылаться на window в среде браузера
// this в глобальном контексте будет ссылаться на exports

//Глобальный контекст (Global Context):
//
// Это область видимости в JavaScript, которая представляет собой самый верхний уровень выполнения кода.
// В глобальном контексте выполняется код, который не находится внутри функции.
// В этом контексте доступны глобальные переменные и функции, а также объект window в браузере или global в среде выполнения Node.js.

// Каждый раз, когда вызывается функция, создается новый контекст выполнения функции.
// В этом контексте хранятся локальные переменные функции, параметры,
// ссылки на внешний контекст (если функция определена внутри другой функции), а также ссылка на глобальный контекст.
// Контекст выполнения объекта (Object Execution Context):
//
// Когда используется ключевое слово this внутри метода объекта, создается контекст выполнения объекта.
// this указывает на объект, в контексте которого вызывается метод.

// Глобальное окружение (Global Environment):
//
// Это термин, который может использоваться для описания контекста выполнения кода на глобальном уровне.
// Глобальное окружение включает в себя глобальные переменные, функции и другие объекты, доступные во всем коде программы.
// В браузере глобальное окружение связано с объектом window, а в Node.js - с объектом global.

// 1. в Функциях без use-strict:
// function fn() {
//     console.log(this)
// }
//
// fn()

// с use strict  - undefined!! в функциях

// 2. в методах объекта

// const item1 = {
//     value: 'Iphone 12',
//     price: 1000,
//     curr: '$',
//     getPrice: function () {
//         console.log(`price for ${this.value} - ${this.price}${this.curr}`)
//     },
//     calculatePrice: function (disc = 0) {
//         console.log(this.price - disc / 100 * this.price);
//     }
// }
// const item2 = {
//     value: 'Iphone 13',
//     price: 1500,
//     curr: '$',
//     getPrice: function () {
//         console.log(`price for ${this.value} - ${this.price}${this.curr}`)
//     },
//     calculatePrice: function (disc = 0) {
//         console.log(this.price - disc / 100 * this.price);
//     }
// }
//
// item1.getPrice()
// item1.calculatePrice(25)
// item1.getPrice.call(item2)
// item1.calculatePrice.apply(item2, 33)

// 3. Пример this с привязкой контекста для функций
// const item = {
//     price: 1000,
// }
// function getDiscount(age) {
//     if (age > 50) {
//         console.log(this.price / 2);
//     } else {
//         console.log(this.price)
//     }
// }
//
// getDiscount.call(item, 60);
// getDiscount.call(item, 30);
// const getPrice = getDiscount.bind(item, 30);
// getPrice()

// const item = {
//     price: 1000,
// }
// function getDiscount(age) {
//     const test = () => {
//         console.log(this.price)
//     }
//
//     test()
// }
//
// getDiscount.call(item, 25)

// // this в функциях кострукторах
// function Programmer (occupation, language, age) {
//     // this === {} в функциях конструктурах this присваивается пустой объект
//
//     this.occupation = occupation;
//     this.language = language;
//     this.age = age;
//
//     // return this и возвращается НЕ явно (под капотом)
// }
//
// const programmer = new Programmer('developer', 'JS', 29)
//
// console.log(programmer)



// 4. this в стрелочных функциях
// в самих стрелочных ф-циях нет собственного this, он берется из внешнего окружения;

// const testObj = {
//     getThis1: function () {
//         console.log(this);
//     },
//     getThis2: () => {
//         console.log(this)
//     }
// }
//
// testObj.getThis1(); // будет ссылаться на объект testObj
// testObj.getThis2(); // будет ссылаться на глобыльный объект global/window

// const obj = {
//     names: ['Ivan', 'Dima', 'Kolya'],
//     surname: 'Petrov',
//     getFullName1() {
//         this.names.forEach((name)=> {
//             console.log(`${name} ${this.surname}`)
//         })
//     },
// }

//     getFullName1() {
//         this.names.forEach((function (name) {
//             console.log(`${name} ${this.surname}`)
//         }).bind(this))
//     },

//     getFullName3() {
//         this.names.forEach(function (name) {
//             console.log(`${name} ${this.surname}`)
//         }, this)
//     },
//
// obj.getFullName1()
// console.log('---')
// obj.getFullName2()
// console.log('---')
// obj.getFullName3()

// Задачи которые могут быть на собесах

// const obj = {
//     name: 'Alex',
//     getName() {
//         console.log(this.name)
//     }
// }
//
// const k = obj.getName
// k.bind({name: 'Mike'}).bind({name: 'Alice'})()
//////////////////

function fn() {

    return {
        x: 20,
        getX() {
            console.log(this.x)
        },
        getAnotherX: ()=> {
            console.log(this.x)
        }
    }
}

const obj = {
    x: 10
}

const b = fn.call(obj)

b.getX()
b.getAnotherX()

const value3 = b.getX;
value3()
const value4 = b.getAnotherX
value4()

// let foo = {
//     x: 42,
//     baz: function() {
//         console.log(this);
//     },
//     bar: () => {
//         console.log(this.x);
//     }
// }
// foo.baz();    // 'this' // объект foo
//
// let bar = foo.baz;
// bar();       // 'this' ? // global
//
// foo.bar(); // 'this.x' ? // undefined

// const foo = () => {
//     console.log(this.prop);
// }
//
// const obj = {
//     prop: 1,
//     m1() {
//         console.log(this.prop);
//     },
//     m2(foo) {
//         foo();
//     },
//     m3() {
//         const foo = () => {
//             console.log(this.prop);
//         }
//         foo();
//     },
//     m4: foo,
//     m5() {
//         foo();
//     },
// };
//
// obj.m1();// 1
// obj.m2(foo);// undefined
// obj.m3();// 1
// obj.m4();// undefined
// obj.m5();// undefined
