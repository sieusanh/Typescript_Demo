/* EXPLICIT TYPES */
let myName: string = 'nam'
let age: number
let isAuthenticated: boolean

myName = 'henry'
// myNAme = 30

// age = 'henry'
age = 30

// isAuthenticated = 50
isAuthenticated = false

// arrays
// let students: string[] = [4, 5]
let students: string[] = ['nam', 'hung']

// students.push(5)
students.push('lan')

// union
let mixed: (string | number | boolean)[]

mixed = [5, 'henry', true]
mixed.push(6)
mixed.push('lan')
mixed.push(false)

let id: string | number
id = '123'
id = 123

let hobby: 'book' | 'music' | 5
hobby = 'book'
// hobby = 'cooking'
// hobby = 2
hobby = 5

// objects
let person: object
person = {name: 'henry', age: 30}
person = []

let student: {
    name: string,
    age: number,
    isGood: boolean
}

// student = {
//     name: 'henry',
//     age: 50
// }

// student = {
//     name: 'henry',
//     age: 50,
//     isGood: true,
//     skills: ['math']
// }

student = {
    name: 'henry',
    age: 50,
    isGood: false
}
