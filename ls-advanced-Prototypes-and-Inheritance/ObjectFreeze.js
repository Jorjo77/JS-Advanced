//Object freeze-така можем да си гарантираме че обект (който ще подаваме по референция) няма да може да бъде променян.
let cat = { name: 'Tom', age: 5 };
console.log(Object.getOwnPropertyDescriptors(cat));//това ще вземе всичките пропъртита
Object.freeze(cat);//Object.freeze променя  configurable на false и writable на false 
console.log(Object.getOwnPropertyDescriptors(cat));