let previousEmployee = { id: 1, name: 'Rachana' }
let employee: { 
    readonly id: number,
     name: string,
     retire: (date: Date) => void 
} = { id: 1, name: ' Rachana', retire: (date: Date) => console.log(date) };

// we should not able to change this so we add readonly
// employee.id = 2

console.log(employee.name);

