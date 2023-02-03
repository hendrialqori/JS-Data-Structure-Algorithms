
// Asyncrounous & non-blocking implementation



(async () => {
    const dataAPI = ['Hendri', 'Yunus', 'Ilham']

    const request = new Promise((resolve, rejected) => {
        setTimeout(() => {
            resolve(dataAPI)
        }, 2000)
    })

    console.log('Sync 1')
    setTimeout(async () => {
        console.log(await request)
    }, 100)
    console.log('Sync 3')
})()