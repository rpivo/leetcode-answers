var sumOfDigits = function(A) {
    const min = Math.min(...A).toString().split('').map(Number).reduce((acc, curr) => acc + curr);
    return min % 2 === 0 ? 1 : 0;
};

const arr = [34, 23, 11, 24, 75, 33, 54, 81];

sumOfDigits(arr);