// const duplicateNumber = (arr) => {
//   return [...new Set(arr)]
// }

// console.log(duplicateNumber([1,2,3,4,54,3,2,1]))

const removeDuplicate = arr => {
    let container = []
    for(let i = 0; i < arr.length; i += 1) {
        if(!container.includes(arr[i])) {
            container.push(arr[i])
        }
    }

    return container.sort((a,b) => a - b)
}

console.log(removeDuplicate([1,2,3,4,54,3,2,1,10]))