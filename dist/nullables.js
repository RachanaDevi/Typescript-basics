"use strict";
function greet(name) {
    console.log(name.toLocaleLowerCase());
}
function greetWithUndefinedOrNulLWithUnion(name) {
    if (name) {
        console.log(name.toLocaleLowerCase());
    }
    else
        console.log("HELLOOO!!!");
}
greetWithUndefinedOrNulLWithUnion('Rachana');
greet('RACHANAANANANAN');
//# sourceMappingURL=nullables.js.map