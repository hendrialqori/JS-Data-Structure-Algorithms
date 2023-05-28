/**
 * @param {string} digits
 * @return {string[]}
 */
 
 var pattern = {
    2 : ["a","b","c"],
    3 : ["d","e","f"],
    4 : ["g","h","i"],
    5 : ["j","k","l"],
    6 : ["m","n","o"],
    7 : ["p","q","r","s"],
    8 : ["t","u","v"],
    9 : ["w","x","y","z"]
}

var result = []

var letterCombinations = function(digits) {
    var iterate = 0

    if(!digits) return result;
    else if(digits.length === 1) return pattern[digits]
    else {
        while(iterate !== pattern[digits[0]].length) {
            for(let i = 0; i < pattern[digits[1]].length ; i++) {
                const combined = pattern[digits[0]][iterate] + pattern[digits[1]][i]
                result.push(combined) 
            } 
            iterate++
            }      
            console.log(iterate)
            return result
        }
}


console.log(letterCombinations("99"))
// console.log(letterCombinations("23"))