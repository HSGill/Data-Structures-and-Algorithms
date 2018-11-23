
function reverse(str) {
    if (!str || str.length < 2 || typeof str !== 'string') {
        return 'not enough'
    }
    const newStr = [];
    for (i = 0; i < str.length; i++) {
        newStr.push(str[str.length - 1 - i])
    }
    return newStr.join('');
}

function reverse2 (str){
    return str.split('').reverse().join('');
}

const reverse3 =str => str.split('').reverse().join('');
const str1 = 'My name is Harry';
console.log(reverse(str1));
console.log(reverse2(str1));
console.log(reverse3(str1));