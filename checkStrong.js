let fact = (num) => (num <= 1 ? 1 :
    num * fact(num - 1));
let res = (n) => {
    let sum = n
        .toString()
        .split('')
        .reduce((acc, digit) => acc +
            fact(Number(digit)), 0);
    return sum === n ? 'Yes' : 'No';
};
