const primeFactor = n => {
    const container = []
    const divisor = 2

    while(true) {
        
        if(n <= 2) {
            container.push(divisor)
            break
        }

        if(n % 2 === 0) {
            container.push(divisor)
            n = n / divisor
        }else {
            if(n % 2 !== 0)
            container.push(n)
            break
        } 
    }
    return container
}

console.log(primeFactor(1000))