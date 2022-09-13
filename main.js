/*Begin first task: Сделать функцию которая принимает 2 number аргумента
И вычисляет какой из них меньше */

// function numberComparison(num1, num2) {
//     if (isNaN(num1) || isNaN(num2)) {
//         alert(num1 + " <"  + 'Оба заначение введите цифрами' + "> " + num2);
//     }
//     else if (num1 < num2){
//         alert(num1 + ' Меньше чем ' + num2);
//     }
//     else if (num1 > num2) {
//         alert(num1 + ' Больше чем ' + num2); 
//     }
//     else{
//         alert(num1 + ' равны ' + num2);
//     }
// }

// const firstNumber = prompt('Input first number').replaceAll(' ',''); 
// const secondNumber = prompt('Input second number').replaceAll(' ',''); 

// numberComparison(firstNumber, secondNumber);

/* ============== End first task ====================== */

/* Begin second task: Написать функцию и назвать ее twoMass и
 передать 2 аргумента array и сравнить их длину */

//  function  twoMass(array1, array2){
//         if (array1 < array2) {
//             alert(array1 + " <"  + 'Длина меньше чем' + "> " + array2);
//         }
//         else if (array1 > array2){
//             alert(array1 + " <"  + 'Длина больше чем' + "> " + array2);   
//         }
//         else{
//             alert(array1 + " <"  + 'Длина равна' + "> " + array2);  
//         } 
//  }

//  const array1 = prompt('Input first value').replaceAll(' ',''); 
//  const array2 = prompt('Input second value').replaceAll(' ',''); 

//  twoMass(array1.length, array2.length);

 /* ============== End second task ====================== */


 /* Begin third task: Написать функцию countChar
Которая может считать длину переданной как аргумент строки 
и вывести в консоль длину */

//  function countChar(argumentCount){
//      let value = 0;
//      for(let i = 1; i <= argumentCount; i++){
//          value = i;
//     }
//     console.log(value);    
//  }
//  const arg = prompt("Input argument").replaceAll(' ','');
//  countChar(arg.length);

 /* ============== End third task ====================== */

 /* Begin additional task: Создайте функцию с переменным числом 
 аргументов которая высчитывает среднее арифметическое по ним.  */

let array = [5,5,6,8,6,4,10];
     let count = 0;
     let arithmeticMean = 0;
array.forEach(function callback(currentValue, index) {
    count += currentValue;
    index++;
    arithmeticMean = count / index;
});
console.log(arithmeticMean);


 /* ============== End additional task ====================== */
