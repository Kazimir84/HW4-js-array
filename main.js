console.log('------------- # 4')
// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   };

let ask = (question, yes, no) => {
    if (confirm(question)) yes()
    else no();
  };

  ask(
    "Вы согласны?",
    yes = () => console.log("Вы согласились."), // нужно было обновить данное место
    no = () => console.log("Вы отменили выполнение."), // нужно было обновить данное место
    );

console.log('------------- # 5')
let string = 'my-short-string';
let arr = string.split('-');
console.log('Массив значений из строки = ', arr);

console.log('------------- # 6')
let arr2 = ['JavaScript', 2015];
console.log('Массив в строку = ', arr2.join(' '));

console.log('------------- # 7');
let users = [
    {id: 1, name: "Vic", age: 21},  
    {id: 2, name: "Petya", age: 30}, 
    {id: 3, name: "Jon", age: 5}
];
let user = users.find((item) => item.age < 20);
console.log('Пользователь с возрастом меньше 20 лет = ', user)// [{id: 3, name: "Jon", age: 5}]

console.log('------------- # 8');
let users2 = [
    {id: 1, name: "Vic", age: 21},  
    {id: 2, name: "Petya", age: 30}, 
    {id: 3, name: "Jon", age: 5}
];
let names2 = users2.map(item => item.name);
console.log('Имена с масива = ', names2); // [Vic, Petya, Jon]

console.log('------------- # 9');
let arr9 =  [5, 3, 8, 1];
function filterRangeInPlace(arr9, a, b) {    
    for (let i = 0; i < arr9.length; i++) { 
        let val = arr9[i]               
        if (a <= val && val <= b) {
            i--;
            arr9.splice(i, 1);
        };
    };
};
filterRangeInPlace(arr9, 1, 4);
console.log('Значения между а и b = ', arr9 ); // [3, 1]

let arr91 =  [5, 3, 8, 1]
function filterRangeInPlace1(arr91, a, b){
    var c = arr91.filter(function(item){
        if (item >= a && item <= b){            
        return true;
        }
    })
    console.log('2 Вариант Значения между а и b = ', c);
}
filterRangeInPlace1(arr91, 1, 4);

console.log('------------- # 10');
let str10 = 'my-short-string';
let s = '-';
function separet(str10, s) {
    let res = str10.split(s);    
    return res;
};
console.log('Array = ', separet(str10, s));

console.log('------------- # 11');
let arr11 = [5, 3, 8, 1];
let range = slArray(arr11, 1, 3);

function slArray(arr11, startIndex, endIndex) {
    let arrSliced = arr11.slice();
    let arrSpliced = arrSliced.splice(startIndex, endIndex);   
    return arrSpliced;
};
console.log('Range = ', range ); // 3, 8, 1 
console.log('Arr11 = ', arr11 ); // 5,3,8,1 (без изменений)

let arr112 = [5, 3, 8, 1];
let range112 = slArray(arr112, 1, 3);

function slArray(arr112, startIndex, endIndex) {    
    let arrSpliced112 = arr112.slice(startIndex, endIndex);   
    return arrSpliced112;
};
console.log('2 Вариант с использованием толко slice, Range = ', range112 ); // 3, 8, 1 
console.log('2 Вариант с использованием толко slice, Arr11 = ', arr112 ); // 5,3,8,1 (без изменений)

let arr113 = [5, 3, 8, 1];
let range113 = slArray(arr113, 1, 3);

function slArray(arr113, startIndex, endIndex) {    
    return arr113.slice(startIndex, endIndex);       
};
console.log('3 Вариант с использованием толко slice, Range = ', range113 ); // 3, 8, 1 
console.log('3 Вариант с использованием толко slice, Arr11 = ', arr113); // 5,3,8,1 (без изменений)

console.log('------------- # 12');
function sum(...spread) {
    let sum = 0;
    for (let numbers of spread) sum += numbers;
    return sum;
};
console.log('Сумма чисел = ', sum(3,8,10));// 21