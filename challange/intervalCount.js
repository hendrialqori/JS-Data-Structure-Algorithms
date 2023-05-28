let countInterval;
let count = 0

countInterval = setInterval(() => {
  console.log(count ++)

  if(count >= 10) clearInterval(countInterval)
}, 1000)

