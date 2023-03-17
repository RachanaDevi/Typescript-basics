// typescript is very strict about nullable and undefined values

function greet(name: string) {
    console.log(name.toLocaleLowerCase());
}

// greet(null); // cannot use null because tsconfig.json strictNullChecks
// do not turn strictNullChecks as false.



// here you can pass null or undefined using union operator
function greetWithUndefinedOrNulLWithUnion(name: string | null | undefined) {
    if (name) {
        console.log(name.toLocaleLowerCase());
    }
    else
        console.log("HELLOOO!!!")
}

greetWithUndefinedOrNulLWithUnion('Rachana')

greet('RACHANAANANANAN')
