// ============== Пример 1 =================
// let target = {};
// let proxy = new Proxy(target, {}); // пустой handler
//
// proxy.test = 5; // записываем в прокси (1)
// console.log(target.test); // 5, свойство появилось в target!
//
// console.log(proxy.test); // 5, мы также можем прочитать его из прокси (2)
//
// for (let key in proxy) console.log(key); // test, итерация работает (3)

// ============== Пример 2 =================
// let numbers = [0, 1, 2];
//
// numbers = new Proxy(numbers, {
//   get(target, prop) {
//     if (prop in target) {
//       return target[prop];
//     } else {
//       return 0; // значение по умолчанию
//     }
//   },
// });
//
// console.log(numbers[1]); // 1
// console.log(numbers[123]); // 0 (нет такого элемента)

// ============== Пример 3 =================
// let dictionary = {
//   Hello: 'Hola',
//   Bye: 'Adiós',
// };
//
// dictionary = new Proxy(dictionary, {
//   get(target, phrase) {
//     // перехватываем чтение свойства в dictionary
//     if (phrase in target) {
//       // если перевод для фразы есть в словаре
//       return target[phrase]; // возвращаем его
//     }
//     return phrase;
//   },
// });
//
// // Запросим перевод произвольного выражения в словаре!
// // В худшем случае оно не будет переведено
// console.log(dictionary['Hello']); // Hola
// console.log(dictionary['Welcome to Proxy']); //

// ============== Пример 4 =================
// let numbers = [];
// 
// numbers = new Proxy(numbers, { // (*)
//   set(target, prop, val) { // для перехвата записи свойства
//     if (typeof val == 'number') {
//       target[prop] = val;
//       return true;
//     } else {
//       return false;
//     }
//   }
// });
// 
// numbers.push(1); // добавилось успешно
// numbers.push(2); // добавилось успешно
// console.log("Длина: " + numbers.length); // 2
// numbers.push("тест"); // TypeError (ловушка set на прокси вернула false)
// console.log("Интерпретатор никогда не доходит до этой строки (из-за ошибки в строке выше)");



// ============== Пример 5 =================
