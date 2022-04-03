console.log('Hello World 02-01');

console.log(2=='2');
console.log(2==='2');

const studentA = { id: 1, name: 'Alice' };
const studentB = studentA;
console.log(studentA == studentB); // true;
studentA === { id: 1, name: 'Alice' }; // false
