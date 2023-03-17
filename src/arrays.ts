let numbersNoSafety = [1, 2, '3']
let numbersWithSafety: number[] = [1, 2, 3];
let numbersWithSafetyEmpty: number[] = [];

// recommendations for number type are already given by the IDE
numbersWithSafetyEmpty.forEach(number => number.toFixed());