//Как исправить "одни пятёрки"?

var result = []
for (var i = 0; i < 5; i++) {
  // var заменен на let
  result[i] = function () {
    console.log(i)
  }
}
result[0]() //0
result[1]() //1
result[2]() //2
result[3]() //3
result[4]() //4

// description:
/* в цикле for, использование var при объявления переменной означает, что i является глобальной переменной, которая существует за пределами цикла */

//////////////////////////////////////////////////

function getGroup() {
  let students = []

  for (let i = 0; i < 10; i++) {
    // заменить цикл while на for
    students[i] = function () {
      console.log(i)
    }
  }

  return students
}

let group = getGroup()

group[0]() //  0
group[5]() //  5

// description:
/* в цикле while, переменная i является глобальной переменной, которая существует за пределами цикла */

//////////////////////////////////////////////////

// Напишите функцию multiply, должна принимать произвольное количество аргументов и возвращать их произведение.

//1.
function multiply(a) {
  let result = a

  const internal = function (b) {
    if (b !== undefined) {
      result *= b
      return internal
    }
    return result
  }

  return internal
}

const result = multiply(2)(3)(4)(5)
console.log(result()) // 120

//2.

function multiply(a) {
  let result = a
  const internal = (b) => multiply((result *= b))
  internal.valueOf = () => a

  return internal
}

const result = +multiply(2)(3)(4)(5)
console.log(result)

/////////////////////////
// Написать функцию getUniqArray(arr), которая на вход принимает массив чисел и
// возвращает массив уникальных чисел.
//     Если аргумент arr состоит не из чисел, тогда функция должна выбросить ошибку.
//     Текст ошибки: "В getUniqArray был передан невалидный параметр. Аргумент arr
// должен быть массивом чисел".

const getUniqArray = (arr) => {
  const result = new Set()

  const typeCheck = (item) => {
    if (typeof item != 'number') {
      throw new Error(
        'В getUniqArray был передан невалидный параметр. Аргумент arr должен быть массивом чисел'
      )
    }
  }

  arr.forEach((item) => {
    typeCheck(item)
    result.add(item)
  })
  return Array.from(result)
}

console.log(getUniqArray([1, 2, 3, 3, 3, 5, 3, 3])) // [1, 2, 3, 5]
console.log(getUniqArray([1, 2, 3, 'a', 3, 5, 3, 3]))
console.log(getUniqArray([1, 2, 3, true, 3, 5, 3, 3]))
console.log(getUniqArray([1, 2, 3, function () {}, 3, 5, 3, 3]))

// description:
/* в моем варианте решения задачи я использовал объект Set, в котором каждое значение может появлся только один раз, далее перебрал входной массив с проверкой на тип и в конечном итоге преобразовал set-коллекцию в массив*/
