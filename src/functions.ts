// at the end is the return type of the function and properly annotate our functions
// if you don't return anything it will take it as void

function calculateTax(income: number, taxYear: number): number{
    if (taxYear < 2022) {
        return income * 1.2;
    }
    return income * 1.3;
}

// ? means optional
function calculateTaxOptional(income: number, taxYear?: number): number{
    if ((taxYear || 2022) < 2022) { // one way to solve error if taxYear is not defined
        return income * 1.2;
    }
    return income * 1.3;
}

// adding default value for taxYear
function calculateTaxWithDefaultTaxYear(income: number, taxYear = 2023): number {
    if (taxYear < 2022) { // one way to solve error if taxYear is not defined
        return income * 1.2;
    }
    return income * 1.3;
}


// you can exactly pass 2 arguments unlike javascript
calculateTax(10_000, 2022);
