
// Case 1: optional param
// const createStudent = (name: string, age?: number) => {
//     console.log({ name, age });
// }

//----------

// Rule: A required parameter cannot follow an optional parameter
// const createStudent = (name?: string, age: number) => {
//     console.log({ name, age });
// }

// createStudent('Henry');

///////////////////////////

// Case 2: default param
// const createStudent = (name: string, age: number = 18) => {
//     console.log({ name, age });
// }

// createStudent('Henry', 20);
// createStudent('Henry');

///////////////////////////

// Case 3: 
// const createStudent = (params: { name: string; age?: number}) => {
//     const { name, age } = params;
//     console.log({ name, age});
// }

// // createStudent({ name: 'Hyren', age: 81 });
// // createStudent({ name: 'Hyren' });
// createStudent({ name: 'Hyren' });

//----------

// const createStudent = (params: { name?: string; age: number}) => {
//     const { name, age } = params;
//     console.log({ name, age});
// }

// createStudent({ age: 20})

//----------

// const createStudent = (params: { name: string; age?: number}) => {
//     const { name, age = 18 } = params;
//     console.log({ name, age});
// }

// createStudent({ name: 'Henry' })

//----------

// const createStudent = ({ name, age = 18}: { name: string; age?: number}) => {
//     console.log({ name, age});
// }
// createStudent({ name: 'Henry' })

//----------

// const createStudent = ({ name = 'Henry', age = 18}: { name?: string; age?: number}) => {
//     console.log({ name, age});
// }
// createStudent({ })

//----------

// const createStudent = (params?: { name?: string; age?: number }) => {
//     const { name = 'Henry', age = 18 } = params;
//     console.log({ name, age});
// }

// createStudent()

// //----------

// const createStudent = (params: { name?: string; age?: number } = {}) => {
//     const { name = 'Henry', age = 18 } = params;
//     console.log({ name, age});
// }

// createStudent()
// createStudent({ name: 'Tom' });


//----------
const createStudent = (params: { name?: string; age?: number } = { name: 'Hynren', age: 21 }) => {
    const { name = 'Henry', age = 18 } = params;
    console.log({ name, age});
}

// createStudent()
createStudent({})