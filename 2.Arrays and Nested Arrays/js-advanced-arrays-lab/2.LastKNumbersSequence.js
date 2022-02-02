// function solve(n, k) {
// let sequenceLength = Number(n);
// let previousNumbersSequence = Number(k);
// let result = [1];
// let count = 1;
// while (count<sequenceLength) {
//     for (let index = 0; index < previousNumbersSequence; index++) {
//         let nextElement = result[result.length - 1] + index;
//         result.push(nextElement);
//         count++;   
//     } 
// }
// console.log(result);
// }
// solve(6, 3);//изнерви ме тази задача!!!

// function solve(n,k){//много ми е завъртян нещо този вариант!
//     let arr = [0];
//     arr[0] = 1;

//     for (let i = 1; i < n; i++) {
//         let sumNum = 0;
//         if(i>= k) {
//             for (let index = i-k; index < i; index++) {
//                 sumNum+= arr[index];
//             }
//         }
//         else
//         {
//             for (let j = 0; j < i; j++) {
//                 sumNum += arr[j];
//             }
//         }
//         arr[i] = sumNum;
//     }
// return arr;
// }
// solve(6, 3);

//Изобщо много завъртяна задача!!!! 

function solve(n, k) {
    let sequence = [1];

    for (let i = 1; i < n; i++) {
        let startIndex = Math.max(0, i - k);
        let innerSequence = sequence.slice(startIndex, i)
        let sum = 0
        for (let j = 0; j < innerSequence.length; j++) {
            sum += innerSequence[j];
        }
        sequence[i] = sum;
    }
     return sequence;
    //console.log(sequence);
}
solve(6,3);