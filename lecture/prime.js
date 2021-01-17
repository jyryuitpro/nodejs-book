const min = 2;
const max = 10_000_000;
let primes = [];

// 에라토스테네스의 체
function generatePrimes(start, range) {

}

console.time('prime');
generatePrimes(min, max);
console.timeEnd('prime');
console.log(primes.length);