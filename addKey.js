const arr = [
    {
        name: "Hendri"
    },
    {
        name: "Bonou"
    }
]

const arr2 = arr.map(prev => ({
    ...prev,
    isChoose: false
}))

console.log(arr2)