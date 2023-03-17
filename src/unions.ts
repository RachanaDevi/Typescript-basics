function kilogramsToPounds(weight: number | string): number {
    // we will only see methods which are for number and string 
    // so we will use narrowing as a concept (ie like checking what kind of type it is)
    if (typeof weight === 'number') {
        return weight * 2.2;
    }
    return parseInt(weight) * 2.2;
}

console.log(kilogramsToPounds(10));
console.log(kilogramsToPounds('10kg'));