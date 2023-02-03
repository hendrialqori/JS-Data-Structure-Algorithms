const linearSearch = (arr, n) => {
    let idx = 0;
    for(let i = 0 ; i < arr.length ; i++ ) {
       idx = arr[i] === n ? i : - 1
    }
    return idx
}

const array = [100,2,3,4,5,6,7,8,9,14,11,10]
console.log(linearSearch(array, 100))

