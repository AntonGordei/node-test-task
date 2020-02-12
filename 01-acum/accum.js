function accum(str) {
    if (str.length) { //check input
        let result = '';

        for (i = 0; i < str.length - 1; i++) {
            result += str[i].toUpperCase() + str[i].toLowerCase().repeat(i);
            result += '-'
        }

        return result += str[str.length - 1].toUpperCase() + str[str.length - 1].toLowerCase().repeat(i);
    }
    return null
}

let example = ''

console.log(accum(example))

