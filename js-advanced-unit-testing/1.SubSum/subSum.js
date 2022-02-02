function subSum(array, startIndex, endIndex) {
    if (!Array.isArray(array)) {
        return 'NaN';
    }
    if (array === []) {
        return 0;
    }
    if (startIndex < 0) {
        startIndex = 0;
    }
    if (endIndex>array.length-1) {
        endIndex = array.length-1;
    }
    let sum = 0;
    for (let index = startIndex; index <= endIndex; index++) {
        const currElement = array[index];
        if (typeof currElement !== 'number') {
            return 'NaN';
        }
        // if (isNaN(currElement)) {
        //     return 'NaN';
        // }
        sum+=Number(currElement);
    }

    if (Number.isInteger(sum)) {

        return sum;
    }
    else {

        return sum.toFixed(1);
    }
}
subSum([10, 'twenty', 30, 40], 0, 2);