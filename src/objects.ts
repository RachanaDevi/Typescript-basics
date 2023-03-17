let previousEmployee = { id: 1, name: 'Rachana' }
let employee: { readonly id: number, name: string } = { id: 1, name: ' Rachana' };

// we should not able to change this so we add readonly
// employee.id = 2

console.log(employee.name);

