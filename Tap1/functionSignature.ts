/* FUNCTION SIGNATURE */
// let greet: Function 

// greet = () => console.log('hello world')

let greet: (a: string, b: string) => void
greet = (name: string, greeting: string) => 
    console.log(`${name} says ${greeting}`)
greet('henry', 'hello')

let calculate: (a:number, b: number, c: string) => number
calculate = (numOne: number, numTwo: number, action: string) => 
    action === 'add' ? numOne + numTwo : numOne - numTwo

console.log(calculate(4, 2, 'minus'))

type Student = {name: string; age: number}
let printStudent: (student: Student) => void 
printStudent = ({name, age}: Student) => {
    console.log(`${name} is ${age} years old`)
}      

printStudent({name: 'henry', age: 30})

const nam = {
    name: 'nam',
    age: 25
}
printStudent(nam)
