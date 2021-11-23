/*
//Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка обчислює та повертає площу прямокутника висотою

let area = (a, b) => a * b;
console.log(area(5,6));*/

//-----------------------------------------------------

/*
//- створити функцію яка обчислює та повертає площу кола
const p = 3.14;

let circleArea = (r) => p * Math.pow(r,2);
console.log(circleArea(4));*/

//-----------------------------------------------------

/*
//- створити функцію яка обчислює та повертає площу циліндру
const p = 3.14;

let cylinderArea = (r,h) => 2 * p * r * h;
console.log(cylinderArea(3,5));*/

//-----------------------------------------------------

/*
//- створити функцію яка приймає масив та виводить кожен його елемент

let arr = [34,56,11,47,5,21];

let array = (arr) => {
    for (let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}
array(arr);*/

//-----------------------------------------------------

/*
//- створити функцію яка  створює параграф з текстом. Текст задати через аргумент
let paragraph = (text) => {
    document.write(`<p>${text}</p>`);
}

paragraph('It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.');*/

//-----------------------------------------------------

/*
//- створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let list = (text) => {
    document.write(`<ul><li>${text}</li><li>${text}</li><li>${text}</li></ul>`);
}

list('It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.');*/

//-----------------------------------------------------

/*
//- створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let list = (text, number) => {
    document.write(`<ul>`);
    for (let i = 0; i < number; i++){
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}

list('Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 5);*/

//-----------------------------------------------------

/*
//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let arr = [27,'Hello',36,true,88,'World',false];

let array = (arr) => {
    document.write(`<ul>`);
    for (let i = 0; i < arr.length; i++){
        document.write(`<li>${arr[i]}</li>`);
    }
    document.write(`</ul>`);
}

array(arr);*/

//-----------------------------------------------------

/*
//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let person = [{id: 2368, name: 'Andrii', age: 27}, {id: 5648, name: 'Tania', age: 19}, {id: 4217, name: 'Orest', age: 23}];

let persons = (person) => {
    for (let i = 0; i < person.length; i++){
        document.write(`<div>${person[i].id} ${person[i].name} ${person[i].age}</div>`);
    }
}

persons(person);*/