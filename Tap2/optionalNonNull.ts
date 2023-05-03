// OPTIONAL AND NON NULL

const add = (a: number, b?: number) => (b ? a + b : a)

console.log(add(1, 2))

console.log(add(3))

const addNonNull = (a: number, b?: number) => a + b!

console.log(addNonNull(3, 4))

console.log(addNonNull(3))
