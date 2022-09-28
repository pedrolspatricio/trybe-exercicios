// function higgerNum (array) {
    
//     let indiceMaior = 0;
    
//     for (let key in array) {
//         if (array[indiceMaior] < array[key]) {
//             indiceMaior = key;
//         } 
//     }

//     return indiceMaior;
// }

// console.log(higgerNum([2, 3, 6, 7, 10, 1]))

function lowerNum (array) {
    
    let indiceMenor = 0;
    
    for (let key in array) {
        if (array[indiceMenor] > array[key]) {
            indiceMaior = key;
        } 
    }

    return indiceMenor;
}

console.log(lowerNum([2, 3, 6, 7, 10, 1]))
