// Неявное преобразование типов
// console.log(NaN + 1 + null + 1);
// console.log(NaN + 1 + null + 1 + "");
// console.log("" + NaN + 1 + null + 1 + "");
// console.log("number" + 15 + 3)
// console.log(true + false)
// console.log([] + null + 1)
// console.log("foo" + + "bar")
// console.log(!!"false" == !!"true")
// console.log(null == '')
// console.log([] == ![])

// Логические операторы
// console.log("a" && "b" && "c")
// console.log("a" || "b" || "c")
// console.log("a" && "" && "c")
// console.log("a" && "" || "c")
// console.log("" ?? "a")
// console.log(null ?? "a")

// Всплытие

// var a = 1;
//
// function foo() {
//     console.log(a);
// }
//
// function bar() {
//     var a = 2;
//     foo();
// }
//
// bar(); // ?
////////////////////

// function foo(a) {
//     if (a > 0) {
//         var a = a + 10 // что будет если поменять на let ?
//         return a
//     }
//     return a
// }
// console.log(foo(15)) //?
////////////////////

// function giveMeX(showX) {
//     if(showX) {
//         var x = 5;
//     }
//     return x;
// }
//
// console.log(giveMeX(false)); // ?
// console.log(giveMeX(true)); // ?
