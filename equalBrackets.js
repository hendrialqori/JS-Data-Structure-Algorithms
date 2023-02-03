// const q = "((()))"

// const equalBrackets = (num) => {
//     let stack = [];
//     for(let i = 0; i < num.length ; i ++) {
//         if(q[i] === '(') {
//             stack.push('(')
//         }
//         else if(q[i] === ')') {
//             if(stack.length === 0) {
//                 return 1
//             }else {
//                 stack.pop()
//             }
//         }
//     }

//     return stack.length === 0 ? 0 : 1 
// }

// console.log(equalBrackets(q))

const brackes = {
    '[': ']'
}



const equalBrackets = (num) => {
    let stack = [];
    for(ch of num) {
        console.log(brackes[ch])
        // if(brackes[ch]) {
        //     stack.push(brackes[ch])
        // }else if(stack.length > 0 && stack[stack.length - 1] === ch) {
        //     stack.pop()
        // }else{
        //     return 1
        // }
    }

    // return stack.length === 0 ? 0 : 1
    
}

console.log(brackes)