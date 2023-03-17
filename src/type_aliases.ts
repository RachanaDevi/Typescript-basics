// export {}; // because we have another employee declared in the same directory which is causing problems

// from object.ts the employee object that has been creaated has the following problems
// PROBLEMS
// 1. if we want to create the employee again then we have to copy it again
// 2. the other employee object may have other properties
// 3. the structure is hard to read and understand so you use type aliases

type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}


let employee2: Employee = { id: 1, name: ' Rachana', retire: (date: Date) => console.log(date) };