// function aggregateElements(elements) {
//     aggregate(elements, 0, (a, b) => a + b);
//     aggregate(elements, 0, (a, b) => a + 1 / b);
//     aggregate(elements, '', (a, b) => a + b);
    
//     function aggregate(arr, initVal, func) {
//     let val = initVal;
    
//     for (let i = 0; i < arr.length; i++)
//     val = func(val, arr[i]);
//     console.log(val);
    
//     }
    
// }
// aggregateElements([1, 2, 3]);
// function solve(fruitType, weight, price) {
//     let quantityInKilograms = (weight/1000);
//     let neededMoney = quantityInKilograms * price;
//     console.log(`I need $${neededMoney.toFixed(2)} to buy ${quantityInKilograms.toFixed(2)} kilograms ${fruitType}.`); 
// }
// solve('apple', 1563, 2.35);

// function greatestCommonDivisor(num1, num2) {
//     let devisior = 0;
//     if (num1> num2) {
//         for (let index = num2; index > 0; index--) {
// if (num1 % index === 0 && num2 % index ===0) {
//     devisior = index;
//     break;
// }        
//         }
//     } else {
//         for (let index = num1; index > 0; index--) 
//             if (num2 % index === 0 && num2 % index ===0) {
//                 devisior = index;
//                 break;  
//         }
//     }
//     console.log(devisior);
// }
// greatestCommonDivisor(2154, 458);
// function solve(num) {

//     let isEqual = true;
//     let numAsString = String(num);
//     let firstElement = numAsString[0];
//     sum = Number(firstElement);

//     for (let index = 1; index < numAsString.length; index++) {

// let currElement = numAsString[index];

//         sum += Number(currElement); 
//         if (firstElement === currElement) {
//             isEqual = true;
//         } else {
//             isEqual = false;
//         }
//     }
//     console.log(isEqual);
//     console.log(sum);
// }
// solve(1234);

// // function solve (stepsNumber, stepLenght, speed) {
// //     let hours = 0;
// //     let minutes = 0;
// //     let seconds = 0;
// //     let distance = stepLenght * stepsNumber;
// //     let breaksNumber = Math.trunc(distance/500);
// //     let timeNeeded = (distance/1000)/speed + breaksNumber/60;

// //     hours = Math.trunc(timeNeeded);
// //     if (hours < 10) {
// //        hours = '0'+ hours; 
// //     }
// //     minutes = Math.trunc(timeNeeded*60);
// //     if (minutes < 10) {
// //         minutes = '0'+ minutes; 
// //      }
// //     seconds = ((timeNeeded*60)%1).toFixed(2).substring(2);
// //     if (seconds < 10) {
// //         seconds = '0'+ seconds; 
// //      }
// //     if (seconds > 60) {
// //         minutes+=1;
// //         seconds-=60;
// //     }
// //     console.log(`${hours}:${minutes}:${seconds}`);
// // }
// // solve(4000, 0.60, 5);

// function solve (speed, area) {
//     let speedDiference =0;
//     let speedLimit;
//     switch (area) {
//         case 'city':
//             speedLimit = 50;
//             if (speed > speedLimit && speed <= speedLimit + 20) {
//                 speedDiference = speed - speedLimit;
//                 console.log(`The speed is ${speedDiference} km/h faster than the allowed speed of ${speedLimit} - ${'speeding'}`);
//             } else if (speed > speedLimit && speed <= speedLimit + 40) {
//                 speedDiference = speed - speedLimit;
//                 console.log(`The speed is ${speedDiference} km/h faster than the allowed speed of ${speedLimit} - ${'excessive speeding'}`);
//             } else if (speed > speedLimit && speed > speedLimit + 40) {
//                 speedDiference = speed - speedLimit;
//                 console.log(`The speed is ${speedDiference} km/h faster than the allowed speed of ${speedLimit} - ${'reckless driving'}`);
//             } else {
//                 console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
//             }
//             break;
//             case 'residential':
//                 speedLimit = 20;
//                 if (speed > speedLimit && speed <= speedLimit + 20) {
//                     speedDiference = speed - speedLimit;
//                     console.log(`The speed is ${speedDiference} km/h faster than the allowed speed of ${speedLimit} - ${'speeding'}`);
//                 } else if (speed > speedLimit && speed <= speedLimit + 40) {
//                     speedDiference = speed - speedLimit;
//                     console.log(`The speed is ${speedDiference} km/h faster than the allowed speed of ${speedLimit} - ${'excessive speeding'}`);
//                 } else if (speed > speedLimit && speed > speedLimit + 40) {
//                     speedDiference = speed - speedLimit;
//                     console.log(`The speed is ${speedDiference} km/h faster than the allowed speed of ${speedLimit} - ${'reckless driving'}`);
//                 } else {
//                     console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
//                 }
//                 break;
//                 case 'interstate':
//                     speedLimit = 90;
//                     if (speed > speedLimit && speed <= speedLimit + 20) {
//                         speedDiference = speed - speedLimit;
//                         console.log(`The speed is ${speedDiference} km/h faster than the allowed speed of ${speedLimit} - ${'speeding'}`);
//                     } else if (speed > speedLimit && speed <= speedLimit + 40) {
//                         speedDiference = speed - speedLimit;
//                         console.log(`The speed is ${speedDiference} km/h faster than the allowed speed of ${speedLimit} - ${'excessive speeding'}`);
//                     } else if (speed > speedLimit && speed > speedLimit + 40) {
//                         speedDiference = speed - speedLimit;
//                         console.log(`The speed is ${speedDiference} km/h faster than the allowed speed of ${speedLimit} - ${'reckless driving'}`);
//                     } else {
//                         console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
//                     }
//                     break;
//                     case 'motorway':
//                         speedLimit = 130;
//                         if (speed > speedLimit && speed <= speedLimit + 20) {
//                             speedDiference = speed - speedLimit;
//                             console.log(`The speed is ${speedDiference} km/h faster than the allowed speed of ${speedLimit} - ${'speeding'}`);
//                         } else if (speed > speedLimit && speed <= speedLimit + 40) {
//                             speedDiference = speed - speedLimit;
//                             console.log(`The speed is ${speedDiference} km/h faster than the allowed speed of ${speedLimit} - ${'excessive speeding'}`);
//                         } else if (speed > speedLimit && speed > speedLimit + 40) {
//                             speedDiference = speed - speedLimit;
//                             console.log(`The speed is ${speedDiference} km/h faster than the allowed speed of ${speedLimit} - ${'reckless driving'}`);
//                         } else {
//                             console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
//                         }
//                         break;
    
//         default:
//             break;
//     }
// }
// solve(200, 'motorway');

// function solve(number, opr1, opr2, opr3, opr4, opr5) {
//     let num = Number(number);
//     let operations = [opr1, opr2, opr3, opr4, opr5];
//     for (let index = 0; index < operations.length; index++) {
//         let currOperation = operations[index];
       
//         switch (currOperation) {
//             case 'chop':
//                 num/=2;
//                 console.log(num);
//                 break;
//                 case 'dice':
//                     num = Math.sqrt(num);
//                     console.log(num);
//                     break;
//                     case 'spice':
//                         num += 1;
//                         console.log(num);
//                         break;
//                         case 'bake':
//                             num *= 3;
//                             console.log(num);
//                             break;
//                             case 'fillet':
//                                 num *= 0.8;
//                                 console.log(num.toFixed(1));
//                                 break;
        
//             default:
//                 break;
//         }

//     }
// }
// solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');

                            
    function validityChecker(x1, y1, x2, y2) {
        let distance;

        let distanceOne = Math.sqrt((x1*x1)+(y1*y1));
        let distanceTwo = Math.sqrt((x2*x2)+(y2*y2));
        let distanceBetwenPoints = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
            if (typeof distanceOne===Number.IsInteger) {
                console.log(`{${x1}, ${y1}} to {0, 0} is valid`);    
            }else {
                console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
            } 
            if (typeof distanceTwo===Number.IsInteger) {
                console.log(`{${x2}, ${y2}} to {0, 0} is valid`);    
            }else {
                console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
            }
            if (typeof distanceBetwenPoints===Number.IsInteger) {
                console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
            } else {
                console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
            } 
        }
   
       validityChecker(2, 1, 1, 1);

