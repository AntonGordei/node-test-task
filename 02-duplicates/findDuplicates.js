function findDuplicates(str) {

    str = str.replace(new RegExp("\\d", "gi"), "");
    let res = ''
    let uniqueElements = Array.from(new Set(str.toLowerCase().split('')))
    let count = 0

    for (i = 0; i < uniqueElements.length; i++) {
        let reg = new RegExp(uniqueElements[i], "gi")
        let elementsArr = str.match(reg)
        if (elementsArr.length - 1) {
            count++
            res += elementsArr[0] + ": " + elementsArr.length + "-th, "
        }
    }

    return count + " # " + res
}


console.log(findDuplicates('ABcdaba122bb'))