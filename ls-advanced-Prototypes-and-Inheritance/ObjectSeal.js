
//Object seal-Така можем да променим ст-стта на пропърти, но не можем да го трием или да го правим readonly.
let dog = { name: 'Bill', age: 15 };
console.log(Object.getOwnPropertyDescriptors(dog));//това ще вземе всичките пропъртита
Object.seal(dog);//Object.seal променя само configurable на false, не променя writable
console.log(Object.getOwnPropertyDescriptors(dog));