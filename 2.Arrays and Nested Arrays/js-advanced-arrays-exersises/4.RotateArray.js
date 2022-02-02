function rotateArray(array, number) {
    let realRotateNumber = number % array.length;
    for (let index = 0; index < realRotateNumber; index++) {
        let shiftedElement = array.pop();
        array.unshift(shiftedElement);     
    }
    console.log(array.join(' '));
}

rotateArray(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15
);