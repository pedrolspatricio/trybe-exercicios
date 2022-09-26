let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for(let index = 0; index < numbers.length; index += 1) {
//     console.log(numbers[index])
// }


let sum = 0;

for(let index = 0; index < numbers.length; index += 1) {
    sum += numbers[index];
}

console.log(sum)

let average = sum / numbers.length

console.log(average)

if(sum > 20) {
    console.log('valor maior que 20')
} else {
    console.log('valor menor ou igual a 20')
};

let maxValue = 0;

for (index = 0; index < numbers.length; index += 1){
    if (numbers[index] > maxValue) {
        maxValue = numbers[index];
    } else {
        maxValue;
    }
}

console.log(maxValue)

let oddNumbers = 0;

for (index = 0; index < numbers.length; index += 1){
    if (numbers[index] % 2 != 0) {
        oddNumbers += 1;
    } else {
        oddNumbers;
    }
}

if (oddNumbers === 0){
    console.log('nenhum valor encontrado')
} else {
    console.log(oddNumbers)
}

let lowerNumber = numbers[0];

for (index = 1; index < numbers.length; index += 1){
    if (numbers[index] < lowerNumber) {
        lowerNumber = numbers[index];
    }
}

console.log(lowerNumber)

let numbers2 = [];

for (index = 1; index <= 25; index += 1){
    numbers2.push(index);
}

console.log(numbers2)

let divisionNumbers = [];

for(let index = 0; index < numbers2.length; index += 1) {
    divisionNumbers.push(numbers2[index] / 2) 
}

console.log(divisionNumbers)
