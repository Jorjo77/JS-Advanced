function solve(...params) {
    const occurences = {};
    let result = [];

    params.forEach(el => {
        let type = typeof (el);
        result.push(`${type}: ${el}`)
        occurences[type] = occurences[type] !== undefined
            ? ++occurences[type]
            : 1;
    })
    const sortedArgumentInfo = Object.keys(occurences)
        .sort((a, b) => occurences[b] - occurences[a])
        .forEach(key => result.push(`${key} = ${occurences[key]}`));

    return result.join('\n');
}

console.log(solve('cat', 42, 33, function () { console.log('Hello world!'); }));