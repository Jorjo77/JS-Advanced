//'use strict';//това е начин да кажем на интерпретатора да гърми за грешките(може и на функции да се слага и в браузъра също)
let child = {
    name: 'Pesho',
    age: 20,
    hobby: 'footbal',
};
//Add not numerable property
Object.defineProperty(child, 'grades', {
    //internal properties - тук конфигурираме това пропърти ('grades') 
    //, което добавяме в обекта person. 
    enumerable: false,//така казваме да не се итерира - така променяме една конфигурация
    value: [1, 2, 3, 4, 5],//така задаваме ст-ст
});

//Change existing property
Object.defineProperty(child, 'hobby', {

    enumerable: false,
});

for (const prop in child) {

    //child[prop]-така динамично достъпваме value на всяко пропърти
    console.log(`${prop} -> ${child[prop]}`);
}

console.log('Not in for in loop:', child.grades);

let descriptor = Object.getOwnPropertyDescriptor(child, 'grades');
console.log(descriptor);
let descriptor2 = Object.getOwnPropertyDescriptor(child, 'name');
console.log(descriptor2);


let person = {
    name: 'Pesho',
    age: 20,
    hobby: 'footbal',
};

//Add readonly property
Object.defineProperty(person, 'name', {

    writable: false
});
console.log(person);
person.name = 'Gosho';
console.log(person);

//Set configurable to false
let man = {
    name: 'Pesho',
    age: 20,
    hobby: 'footbal',
};

Object.defineProperty(man, 'name', {
    configurable: false
});

Object.defineProperty(man, 'name', {
    value: 'Gosho'
});

Object.defineProperty(man, 'name', {
    writable: false
});
Object.defineProperty(man, 'name', {//така гърми тук
    //, защото сме му казали горе 'configurable: false' - то работи само за enumerable 
    enumerable: false
});

console.log(Object.getOwnPropertyDescriptor(man, 'name'));



