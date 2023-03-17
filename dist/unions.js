"use strict";
function kilogramsToPounds(weight) {
    if (typeof weight === 'number') {
        return weight * 2.2;
    }
    return parseInt(weight) * 2.2;
}
console.log(kilogramsToPounds(10));
console.log(kilogramsToPounds('10kg'));
//# sourceMappingURL=unions.js.map