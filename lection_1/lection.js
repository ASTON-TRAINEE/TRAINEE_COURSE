// Манипуляции с числами

// const number_1 = 1000000;
// const number_2 = 1_000_000;
// const number_3 = 1e6;

// Неточные вычисления
// Внутри JavaScript число представлено в виде 64-битного формата IEEE-754.
// Для хранения числа используется 64 бита: 52 из них используется для хранения цифр,
// 11 для хранения положения десятичной точки и один бит отведён на хранение знака.
//
// Если число слишком большое, оно переполнит 64-битное хранилище, JavaScript вернёт бесконечность:

// const floatInt1 = 0.1;
// const floatInt2 = 0.2;
//
// const res = (floatInt1 + floatInt2).toFixed(2);
// const finalRes = Number(res);

// Число хранится в памяти в бинарной форме, как последовательность бит – единиц и нулей.
// Но дроби, такие как 0.1, 0.2, которые выглядят довольно просто в десятичной системе счисления,
// на самом деле являются бесконечной дробью в двоичной форме.
//
// Другими словами, что такое 0.1? Это единица делённая на десять — 1/10, одна десятая.
// В десятичной системе счисления такие числа легко представимы, по сравнению с одной третьей: 1/3,
// которая становится бесконечной дробью 0.33333(3).


// Ссылочный тип данных - ОБЪЕКТ

// let user1 = {
//     name: 'Alex',
//     age: 25
// }
//
// let user2 = user1;
//
// console.log(user1 === user2);
//
// user2.age = 10
//
// console.log(user1);

///////////////////

// let foo = {
//     bar: 1,
// }
//
// const baz = foo;
//
// foo = {
//     bar: 3
// }
//
// foo.bar = 2
//
//
// console.log (baz.bar);  // ?
// console.log (foo.bar);  // ?

////////////////////


// let a = {};
// function clear(a) {
//     a.b = 2;
//     a = null;
// }
// clear(a);
//
// console.log(a);
// console.log(a.b);

// Autoboxing
// Когда вы обращаетесь к свойству или методу примитивного значения,
// JavaScript автоматически выполняет автозапаковку,
// создавая временный объект-обертку с использованием
// соответствующего конструктора (String, Number, Boolean).
// Этот временный объект имеет прототип, который содержит свойства и методы для работы с примитивным значением.

// Явное приведение типов

// К строке:
// console.log(String(123))
// console.log(String(-12.3))
// console.log(String(null))
// console.log(String(undefined))
// console.log(String(true))
// console.log(String(false))
// console.log(String(function name() {}))
// console.log(String({}))
// console.log(String({ key: 42 }))
// console.log(String([]))
// console.log(String([1, 2]))

// console.log(Number('123'))
// console.log(Number('123.4'))
// console.log(Number('123,4'))
// console.log(Number(''))
// console.log(Number(null))
// console.log(Number(undefined))
// console.log(Number(true))
// console.log(Number(false))
// console.log(Number(function () {}))
// console.log(Number({}))
// console.log(Number([]))
// console.log(Number([1]))
// console.log(Number([1, 2]))

// console.log(Boolean(''))
// console.log(Boolean('string'))
// console.log(Boolean('false'))
// console.log(Boolean(0))
// console.log(Boolean(42))
// console.log(Boolean(-42))
// console.log(Boolean(NaN))
// console.log(Boolean(null))
// console.log(Boolean(undefined))
// console.log(Boolean(function () {}))
// console.log(Boolean({}))
// console.log(Boolean({ key: 42 }))
// console.log(Boolean([]))
// console.log(Boolean([1, 2]))

// Сравнение типов
// console.log(null === undefined)
// console.log(null == undefined)
// console.log(NaN == NaN)
// console.log([] == []);
// console.log(true == 1);
// console.log(false == 0);
// console.log(false == '');

// null > 0
// null == 0 ;
// null >= 0 ;
//

// Причина в том, что нестрогое равенство и сравнения > < >= <= работают по-разному.
// Сравнения преобразуют null в число, рассматривая его как 0.
// Поэтому выражение (3) null >= 0 истинно, а null > 0 ложно.
//
// С другой стороны, для нестрогого равенства == значений undefined и null действует особое правило:
// эти значения ни к чему не приводятся,
// они равны друг другу и не равны ничему другому. Поэтому (2) null == 0 ложно.

// Неявное преобразование типов
// console.log('11' + 25)
// console.log(null + 10)
// console.log(undefined + null)
// console.log([] + 1)
// console.log({} + 1)

// console.log(null + false  - true + 25 + +[])
const isEqualInt = 2 === 2
let sum = [] - isEqualInt + undefined - null
// console.log(sum)
// console.log('ba' + +[1,2,3])
// console.log(Array(5).join('wat' - 1) + ' Batman!')

// Логические операторы
// ! && || ??
// Оператор нулевого слияния (??)
// Оператор нулевого слияния (??) — это логический оператор, возвращающий значение правого операнда,
// если значение левого операнда содержит null или undefined, в противном случае возвращается значение левого операнда.

// const check1 = 1 && false || '';
// console.log(check1)
// const check2 = [] || 'hello';
// console.log(check2)
// const check3 = [] && {} || 123;
// console.log(check3)
// const check4 =   0 || 'world' || [] && null || false
// console.log(check4)

// let a = null
// if (a !== undefined && a !== null) {
//     a = 5
// } else {
//     a = 10
// }
//
// console.log(a)


// Поднятие или hoisting — это механизм в JavaScript, в
// котором переменные и объявления функций, передвигаются
// вверх  своей  области  видимости  перед тем, как
// код будет выполнен.


// function example() {
//     if (true) {
//         var x = 10;
//         console.log(x);
//     }
//     console.log(x);
// }
//
// example();
//
// console.log(x);

//////////////////

// function jumpOut() {
//     var a = [1, 2, 3];
//     for (var i = 0; i < a.length; i++) {
//         var value = a[i];
//         console.log(value);
//     }
//
//     console.log(`Outside loop ${value}`)
// }
//
// jumpOut()

// function hoisting() {
//     console.log(answer);
//     answer = 42;
//     console.log(answer);
//     var answer = 67;
// }
//
// hoisting()


// function temporalExample () {
//     const f = () => {
//         console.log(value);
//     }
//     f();
//     let value = 42;
// }
// temporalExample();

// let range = {
//     from: 1,
//     to: 5,
//
//     // for..of range вызывает этот метод один раз в самом начале
//     [Symbol.iterator]() {
//         // ...он возвращает перебираемый объект:
//         // далее for..of работает только с этим объектом, запрашивая следующие значения
//         return {
//             current: this.from,
//             last: this.to,
//
//             // next() вызывается при каждой итерации цикла for..of
//             next() {
//                 // нужно вернуть значение как объект {done:.., value :...}
//                 if (this.current <= this.last) {
//                     return { done: false, value: this.current++ };
//                 } else {
//                     return { done: true };
//                 }
//             }
//         };
//     }
// };
//
// let range2 = {
//     from: 1,
//     to: 5,
//
//     *[Symbol.iterator]() { // краткая запись для [Symbol.iterator]: function*()
//         for(let value = this.from; value <= this.to; value++) {
//             yield value;
//         }
//     }
// };
//
// alert( [...range2] ); // 1,2,3,4,5
