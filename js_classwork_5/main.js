/*
//Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
let number = (a, b, c) => {
    if(a < b && a < c){
        console.log(a);
    }
    else if(b < a && b < c){
        console.log(b);
    }
    else{
        console.log(c);
    }
}

number(14,63,22);*/

//----------------------------------------------------------------

/*
//- створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
let number = (a, b, c) => {
    if(a > b && a > c){
        console.log(a);
    }
    else if(b > a && b > c){
        console.log(b);
    }
    else{
        console.log(c);
    }
}

number(14,63,22);*/

//----------------------------------------------------------------

/*
//- створити функцію яка повертає найбільше число з масиву
let arr = [32,65,14,128,19,77];

let array = (arr) => {
    let maxValue = arr[0];

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > maxValue){
            maxValue = arr[i];
        }
    }

    return maxValue;
}

console.log(array(arr));*/

//----------------------------------------------------------------

/*
//- створити функцію яка повертає найменьше число з масиву
let arr = [32,65,14,128,19,77];

let array = (arr) => {
    let minValue = arr[0];

    for(let i = 0; i < arr.length; i++){
        if(arr[i] < minValue){
            minValue = arr[i];
        }
    }

    return minValue;
}

console.log(array(arr));*/

//----------------------------------------------------------------

/*
//- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let arr = [23,5,14,21];

let array = (arr) => {
    let sum = 0;

    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }

    return sum;
}

console.log(array(arr));*/

//----------------------------------------------------------------

/*
//- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let arr = [23,5,14,21];

let array = (arr) => {
    let sum = 0;

    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }

    return sum/arr.length;
}

console.log(array(arr));*/

//----------------------------------------------------------------

/*
//- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
let numbers = (...num) => {
    let maxValue = num[0];
    let minValue = num[0];

    for(let i = 0; i < num.length; i++){
        if(num[i] > maxValue){
            maxValue = num[i];
        }
        if(num[i] < minValue){
            minValue = num[i];
        }
    }

    console.log(maxValue);
    return minValue;
}

console.log(numbers(27,69,56,74,26,5,23));*/

//----------------------------------------------------------------

/*
//- створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
let arr = [];

let randomArr = (arr) => {
    for (let i = 0; i < 5; i++){
        arr[i] = Math.round(Math.random()*100);
    }
    console.log(arr);
}
randomArr(arr);*/

//----------------------------------------------------------------

/*
//- створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
let arr = [];

let randomArr = (arr, limit) => {
    for (let i = 0; i < 5; i++){
        arr[i] = Math.round(Math.random()*limit);
    }
    console.log(arr);
}
randomArr(arr,1000);*/

//----------------------------------------------------------------

/*
//- Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
let arr = [25,36,84,41,6,20];

let revArr = (arr) => {
    let newRevArr = arr.reverse();
    console.log(newRevArr);
}

revArr(arr);*/