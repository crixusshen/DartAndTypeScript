// expression 1:
const myAdd: (x: number, y: number) => number = (_x: number, y: number) => _x + y

// expression 2:
const myAdd2: {(x: number, y: number): number} = (_x: number, y: number) => _x + y

const myAddVoid: (x: number, y: number) => void = (_x: number, y: number) => console.log('void')

const myOptional: {(x: number, y?: number): number} = (x: number, y: number = 1) => x + y

const myNamed = (x: number, {y, z = 'zoo'}: {y: number, z?: string}) => x + y + z

console.log(myAdd(1, 2))  // 3
console.log(myAdd2(1, 2))  // 3

myAddVoid(1, 2); // void

console.log(myOptional(2))  // 3
console.log(myOptional(2, 3))  // 5

console.log(myNamed(1, {y: 2})) // 3zoo
console.log(myNamed(1, {y: 2, z: 'hi'})) // 3hi