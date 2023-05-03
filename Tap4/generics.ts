// GENERICS

// type myArr = Array<any>
type strArr = Array<string>
type numArr = Array<number>

// note: truyen` param la kieu gi thi kieu tra ve cung la kieu do
// const last = (arr: Array<any>) => arr[arr.length - 1]
const last = (arr: Array<number>) => arr[arr.length - 1]

const l1 = last([1, 2, 3])
console.log(l1)
// const l2 = last(['a', 'b'])

const lastT = <T>(arr: Array<T>) => arr[arr.length - 1]
const l3 = lastT([1, 2, 3])
const l4 = lastT(['a', 'b'])
// const l5 = lastT<number>(['d', 'e'])
const l5 = lastT<string>(['d', 'e'])

const makeArr = (x: number) => [x]

const m = makeArr(5)
console.log(m)
// const m2 = makeArr('a')

const makeArrT = <T>(x: T) => [x]
const m3_1 = makeArrT('b')
const m3_2 = makeArrT(4)

// const makeArrXY = (x: number, y: string) => [x  , y]
const makeArrXY = <X, Y>(x: X, y: Y) => [x, y]
const m4 = makeArrXY(5, 6)
const m5 = makeArrXY('a', 'b')
const m6 = makeArrXY('a', 3)

const makeTuple = <X, Y>(x: X, y: Y): [X, Y] => [x, y]
const m7 = makeTuple('x', 5)
const m8 = makeTuple('a', 'b')
const m9 = makeTuple<string, number>('g', 23)
const m10_1 = makeTuple<string | null, number>('a', 3)
const m10_2 = makeTuple<string | null, number>(null, 3)
const m10_3 = makeTuple(null, 3)

const makeTupleWithDefault = <X, Y = number>(x: X, y: Y): [X, Y] => [x, y]
// const m11 = makeTupleWithDefault<string | null>('a', '3')
const m11 = makeTupleWithDefault<string | null>('a', 4)

// GENERICS EXTENDS
const makeFullName = obj => ({
    ...obj, 
    fullName: `${obj.firstName} ${obj.lastName}`
})

const makeFullNameConstraint = (obj: {
    firstName: string, 
    lastName: string
}) => ({
    ...obj, 
    fullName: `${obj.firstName} ${obj.lastName}`
})

const n1 = makeFullNameConstraint({firstName: 'henry', lastName: 'web dev'})
// const n2 = makeFullNameConstraint({firstName: 'henry', lastName: 'web dev', age: 30})

const makeFullNameConstraintWithGenerics = <
    T extends {firstName: string, lastName: string}
>(obj: T) => ({
    ...obj, 
    fullName: `${obj.firstName} ${obj.lastName}`
})

const n3 = makeFullNameConstraintWithGenerics({firstName: 'henry', lastName: 'web dev', age: 30, gender: 'male'})

const addNewEmployee = (employee: object) => {
    const uid = Math.floor(Math.random() * 100)
    return {
        ...employee,
        uid
    }
}

const empOne = addNewEmployee({name: 'henry', age: 30})

console.log(empOne)
// console.log(empOne.name)

const addNewEmployeeT = <T extends object>(employee: T) => {
    const uid = Math.floor(Math.random() * 100)
    return {
        ...employee,
        uid
    }
}

const empTwo = addNewEmployeeT({name: 'nam', age: 25, male: true})
console.log(empTwo)
console.log(empTwo.name)

const addNewEmployeeTWithConstraint = <T extends {name: string}>(employee: T) => {
    const uid = Math.floor(Math.random() * 100)
    return {
        ...employee,
        uid
    }
}

const empThree = addNewEmployeeTWithConstraint({ name: 'nam', age: 30 })

// GENERICS in INTERFACE

interface Resource<T> {
    uid: number,
    name: string,
    data: T
}

const resourceOne: Resource<string> = {
    uid: 1,
    name: 'Person',
    data: 'hello'
}

const resourceTwo: Resource<object> = {
    uid: 1,
    name: 'Movie',
    data: { name: 'Avenger' }
}

const resourceThree: Resource<string[]> = {
    uid: 1,
    name: 'Developer',
    data: ['CSS', 'HTML']
}

type NumberResource = Resource<number[]>

const numbers: NumberResource = {
    uid: 2,
    name: 'Numbers',
    data: [1, 2, 3]
}
