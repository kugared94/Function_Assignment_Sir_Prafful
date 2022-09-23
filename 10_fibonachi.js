const number = parseInt(prompt('Enter the number of terms: '));
// const number = 6;
let fn1 = 0, fn2 = 1, nextTerm;

console.log('Fibonacci Series:');

for (let i = 1; i <= number; i++) {
    console.log(fn1);
    nextTerm = fn1 + fn2;
    fn1 = fn2;
    fn2 = nextTerm;
}