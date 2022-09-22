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




