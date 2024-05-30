/**
 * Методы массивов, мутирующие исходный массив
 */

// // 1. push(element1, ..., elementN): Добавляет элементы в конец массива.
// const arr1 = [1, 2, 3];
// arr1.push(4, 5);
// console.log("1. push:", arr1);
//
// 2. pop(): Удаляет последний элемент из массива.
// const arr2 = [1, 2, 3];
// arr2.pop();
// console.log("2. pop:", arr2);
//
// // 3. shift(): Удаляет первый элемент из массива.
// const arr3 = [1, 2, 3];
// arr3.shift();
// console.log("3. shift:", arr3);
//
// // 4. unshift(element1, ..., elementN): Добавляет элементы в начало массива.
// const arr4 = [2, 3];
// arr4.unshift(1);
// console.log("4. unshift:", arr4);
//
// 5. splice(start, deleteCount, item1, ..., itemN): Изменяет содержимое массива.
// const arr5 = [1, 2, 3, 4, 5];
// arr5.splice(2, 2, 'a', 'b');
// console.log("5. splice:", arr5);
//
// // 6. reverse(): Обращает порядок элементов в массиве.
// const arr6 = [1, 2, 3];
// arr6.reverse();
// console.log("6. reverse:", arr6);
//
// // 7. sort(compareFunction): Сортирует элементы массива на месте.
// const arr7 = [3, 1, 2];
// arr7.sort();
// console.log("7. sort:", arr7);
//
// // 8. fill(value, start, end): Заполняет элементы массива статическим значением.
// const arr8 = [1, 2, 3];
// arr8.fill(0, 1, 2);
// console.log("8. fill:", arr8);

/**
 * Методы массивов, НЕ мутирующие исходный массив (популярные)
 */

// map
// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = numbers.map(num => num * 2);
// console.log('map:', doubledNumbers);

//const context = {
//   multiplier: 2,
// };
//
// const originalArray = [1, 2, 3];
//
// const newArray = originalArray.map(function (currentValue) {
//   return currentValue * this.multiplier;
// }, context);
//
// console.log(newArray); // Вывод: [2, 4, 6]

//
// filter
// const evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log('filter:', evenNumbers);

// reduce
// const newArray = originalArray.reduce((acc, item)=> acc + item, 0)
//
// console.log(newArray)
//
// concat
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const combinedArrayConcat = arr1.concat(arr2);
// console.log('concat:', combinedArrayConcat);
//
// slice
// const slicedArray = numbers.slice(1,4);
// console.log('slice:', slicedArray);

