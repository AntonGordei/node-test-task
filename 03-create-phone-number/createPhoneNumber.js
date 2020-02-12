function createPhoneNumber(arr) {

    if (arr.join('').replace(new RegExp("\\D", "gi"), "").length === 10 & arr.length === 10) //check input
    {

        return '(' + arr.slice(0, 3).join('') + ') ' + arr.slice(3, 6).join('') + '-' + arr.slice(6, 10).join('')

    }
    return "Incorrect input"
}

const arr = [1, 2, 3, 4, 5, 1, 7, 8, 9, 0]

console.log(createPhoneNumber(arr))