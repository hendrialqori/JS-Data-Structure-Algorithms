const recursive = n => {

    if(n > 10) return

    console.log(n)
    return recursive(n -= 1)
}

recursive(10)
