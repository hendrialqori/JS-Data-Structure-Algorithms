// const regex = /(^[a-z])(.*)\1$/i
// const words = 'abbbbba'
// const result = regex.test(words)
// console.log(result)

const re = /(^Mr|Mrs)+\./
const words = 'Mrs#d'
const result = re.test(words)
console.log(result)
