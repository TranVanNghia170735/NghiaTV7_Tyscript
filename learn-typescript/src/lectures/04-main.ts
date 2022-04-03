

// export function isPositive(n: number) {
//     return n > 0;
// }

interface Student {
    id: number;
    name: string;
    age: number;
}

function createStudent({id, name, age}: Student) {
    // const { id, name, age } = s;
    console.log(id, name, age);
}

createStudent({
    id: 1,
    name: 'Bob',
    age: 18,

} as Student);
    