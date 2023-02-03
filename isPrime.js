/*
    Bilangan prima adalah bilangan yang bisa di bagi dengan diri nya-
    sendiri atau dengan angka 1

    contoh:
    5 = 5 * 1, 1 * 5

*/

const isPrime = (n) => {
  if( n < 2 ) return false
  for(let i = 2; i < n ; i ++ ) {
    if(n % 2 === 0) return false
  }
  return true
} 

console.log(isPrime(4))
console.log(isPrime(7))

