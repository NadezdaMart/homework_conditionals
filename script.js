
// 1. Пользователь вводит ТРИ числа вывести в консоль наибольшее из них. В этой задаче необходимо сделать проверку на число (нужно убедиться, что пользователь ввел именно число)

// let firstNumber = Number(prompt('enter first number'));
// let secondNumber = Number(prompt('enter second number'));
// let thirdNumber = Number(prompt('enter third number'));

// if (firstNumber > secondNumber && firstNumber > secondNumber) {
//     console.log(firstNumber);
// }
// else if (secondNumber > firstNumber && secondNumber > thirdNumber) {
//     console.log(secondNumber);
// }
// else if (thirdNumber > firstNumber && thirdNumber > secondNumber) {
//     console.log(thirdNumber);
// }


// 2.Используя конструкцию switch, напишите программу, которая переводит числа в слова. Например: пользователь вводит число 2, программа выводит «Два». Программу необходимо сделать для цифр от 0 до 5 (включительно)



// let result = Number(prompt('enter number'));
// switch(result) {
//     case 0:
//         console.log('zero');
//         break;
//     case 1:
//         console.log('one');
//         break;
//     case 2:
//         console.log('two');
//         break;
//     case 3:
//         console.log('three');
//         break;
//     case 4:
//         console.log('four');
//         break;
//     case 5:
//         console.log('five');
//         break;
// }



// 3. Дан следующий код:

//     let age = 10;

//     if (age < 10) {
//         console.log('hi!');
//     } else if (age < 20) {
//         console.log('hello!');
//     } else {
//         console.log('good day!');
//     }
// Необходимо переписать этот код используя тернарный оператор

// let age = 10;
// let result = (age < 10 ? 'hi' : age < 20 ? 'hello' : 'good day');
// console.log(result);

// 4. Написать программу для проверки таблицы умножения:
// Пользователь вводит число a
// Пользователь вводит число b
// Пользователь вводит ответ на a * b
// Нам необходимо проверить ответ пользователя на корректность, если пользователь ответил неправильно то выводим ответ вида: Ошибка! Правильный ответ: correctAnswer

// Где correctAnswer - это переменная, в которой находится правильный ответ

// Если пользователь ввел правильный ответ, то выводим сообщение вида: Правильно!

// let firstNumber = Number(prompt('enter a number'));
// let secondNumber = Number(prompt('enter b number'));
// let result = Number(prompt('enter multiplication result'));
// let correctAnswer = 4;

// if (result === correctAnswer) {
//     console.log('Правильно!');
// }
// else if (result !== correctAnswer) {
//     console.log(`Ошибка! Правильный ответ: ${correctAnswer}`)
// }
