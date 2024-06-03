//Как исправить "одни пятёрки"?

/*
поменяем в цикле var на let т.к. let имеет блочную область видимости и объявляется в каждой итерации цикла, а не перезаписывается как с var. И теперь каждая функция, созданная в цикле, имеет своё собственное значение i.
*/
var result = [];
for (let i = 0; i < 5; i++) {
  result[i] = function () {
    console.log(i);
  };
}
result[0](); //0
result[1](); //1
result[2](); //2
result[3](); //3
result[4](); //4

//////////////////////////////////////////////////

// function getGroup() {
//     let students = [];
//     let i = 0;
//     while (i < 10) {
//         students[i] = function() {
//             console.log(i);
//         }
//         i++
//     }
//
//     return students;
// }
//
// let group = getGroup();
//
// group[0](); // 10 как исправить на 0
// group[5](); // 10                  5

/* можно заменить цикл while на цикл for, который создает новый scope для переменной i */

function getGroup() {
  let students = [];

  for (let i = 0; i < 10; i++) {
    students[i] = function () {
      console.log(i);
    };
  }

  return students;
}

let group = getGroup();

group[0](); // 0
group[5](); // 5

/* или использовать замыкание через iife функцию, которая будет выводить значение index при вызове */

function getGroup2() {
  let students = [];
  let i = 0;
  while (i < 10) {
    students[i] = (function (index) {
      return function () {
        console.log(index);
      };
    })(i); // Передаём текущее значение i в замыкание
    i++;
  }

  return students;
}

let group2 = getGroup2();

group2[0](); // 0
group2[5](); // 5

//////////////////////////////////////////////////

// Напишите функцию multiply, должна принимать произвольное количество аргументов и возвращать их произведение.

// const result1 = multiply(2)(3)(4)();
// console.log(result1); // Вывод: 24
// const result2 = multiply(2)(3)(4)(5)();
// console.log(result2); // Вывод: 120

// const result1 = multiply(2)(3)(4)();
//
// // Пример использования:
// const result1 = multiply(2)(4)();
// console.log(result1); // Вывод: 8
//
// const result2 = multiply(5)(2)(3)();
// console.log(result2); // Вывод: 30

function multiply(n) {
  let result = n;
  const inner = (m) => {
    if (m === undefined) {
      return result;
    }
    result *= m;
    return inner;
  };
  return inner;
}

const result1 = multiply(2)(4)();
console.log(result1); // Вывод: 8

const result2 = multiply(5)(2)(3)();
console.log(result2); // Вывод: 30

/////////////////////////
// Написать функцию getUniqArray(arr), которая на вход принимает массив чисел и
// возвращает массив уникальных чисел.
//     Если аргумент arr состоит не из чисел, тогда функция должна выбросить ошибку.
//     Текст ошибки: "В getUniqArray был передан невалидный параметр.
// Аргумент arr должен быть массивом чисел".

function getUniqArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      throw new Error(
        "В getUniqArray был передан невалидный параметр. Аргумент arr должен быть массивом чисел"
      );
    }
  }
  return [...new Set(arr)];
}

// console.log(getUniqArray(["1", 3, 3, 4, 5, 5]));
