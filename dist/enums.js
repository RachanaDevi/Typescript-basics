"use strict";
const small = 1;
const medium = 2;
const large = 3;
var Size;
(function (Size) {
    Size[Size["Small"] = 0] = "Small";
    Size[Size["Medium"] = 1] = "Medium";
    Size[Size["Large"] = 2] = "Large";
})(Size || (Size = {}));
var SizeWithNumbers;
(function (SizeWithNumbers) {
    SizeWithNumbers[SizeWithNumbers["Small"] = 2] = "Small";
    SizeWithNumbers[SizeWithNumbers["Medium"] = 3] = "Medium";
    SizeWithNumbers[SizeWithNumbers["Large"] = 5] = "Large";
})(SizeWithNumbers || (SizeWithNumbers = {}));
let mySize = SizeWithNumbers.Medium;
console.log(mySize);
//# sourceMappingURL=enums.js.map