/*
 Fibonacci adalah sebuah urutan angka,
 yang mana deretan angka tersebut adalah hasil dari
 penjumlahan dua angka di depan nya.

 contoh : 0, 1, 1, 2, 3, 5, 8, 13, 21
*/

const fibonacci = (n) => {
    const fibo = [0, 1]
    for(let i = 2; i < n ; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2]
    }
    return fibo
}

console.log(fibonacci(10))

