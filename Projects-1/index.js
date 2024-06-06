// String length methode emplementation
const str = 'nayem iqbal';
console.log(str.charAt(0))
function len(str) {
    let length = 0;
    while (true) {
        if (str.charAt(length) === '') {
            break;
        } else {
            length++;
        }
    }
    return length;
}
console.log(len(str));


const arr = [1, 3, 4, 56];

function len(arr) {
    let length = 0;
    while (true) {
        if (arr[length]=== undefined) {
            break;
        } else {
            length++;
        }
    }
    return length;
}

console.log(len(arr))