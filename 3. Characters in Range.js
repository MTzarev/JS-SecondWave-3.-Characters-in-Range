function charactersInRange(char1, char2) {
    let first = char1.charCodeAt(0);
    let second = char2.charCodeAt(0);
    let res = [];
    if (first <= second) {
        for (let i = first + 1; i < second; i++) {
            let final = String.fromCharCode(i);
            res.push(final);
        }
    } else {
        for (let i = second + 1; i < first; i++) {
            let final = String.fromCharCode(i);
            res.push(final);

        }
    }
    console.log((res).join(` `));
}
charactersInRange('C',
    '#');
