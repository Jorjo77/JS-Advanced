function sort(arr, sortingWay) {
    if (sortingWay === 'asc') {
        arr.sort((a, b) => a - b);
    }
    if (sortingWay === 'desc') {
        arr.sort((a, b) => b - a);
    }

    return arr;
}

sort([14, 7, 17, 6, 8], 'desc');