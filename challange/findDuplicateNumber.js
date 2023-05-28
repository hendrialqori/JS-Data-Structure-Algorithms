function toFindDuplicates(arry) {
    const uniqueElements = new Set(arry);
    const temp = []
    for(let i = 0; i < arry.length ; i ++) {
        if(uniqueElements.has(arry[i])) {
            uniqueElements.delete(arry[i])
        }else {
            temp.push(arry[i])
        }
    }
    return temp
}

const arry = [1, 2, 1, 3, 4, 3, 5, -3, -3]
//           []
const duplicateElements = toFindDuplicates(arry);
console.log(duplicateElements);


