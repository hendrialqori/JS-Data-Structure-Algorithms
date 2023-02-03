/*
 Factorial adalah sebuah istilah dari matematika yang di gunakan
 untuk menghitung permutasian sebuah angka.
 Faktorial di tandai dengan '!' atau tanda seru.
 contoh:
  5! = 5 * 4 * 3 * 2 * 1
  5! = 120
*/


// const factorial = (n) => {
//     let result = 1
//     for(let i = 1; i < n + 1; i += 1 ) {
//         result *= i
//     }

//     return result
// }

// console.log(factorial(0))

// Recursive function

const factorialRecusrive = (n) => {
    return n !== 0 ? n * factorialRecusrive(n - 1) : 1
}

console.log(factorialRecusrive(6))