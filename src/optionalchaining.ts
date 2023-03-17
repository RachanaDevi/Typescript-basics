type Customer = {
    birthday: Date
}

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);
console.log(customer?.birthday) // this operator is optional property accessor operator
// here ?. means if it is null or undefined then it will give undefined
let customer2 = getCustomer(1);
console.log(customer2?.birthday)


let customerWithBirthdayYear = getCustomer(1);
console.log(customer2?.birthday?.getFullYear())

// Optional element access operator
// customers[0]
// if a customer is not null or undefined then we can use optional property accessor operator

let log: any = null;
log?.('a');