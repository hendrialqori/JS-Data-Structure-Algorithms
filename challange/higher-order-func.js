const greeting = (name) => {
  return (...args) => {
    for (n of args) {
      const greet = `Hello ${n} from ${name}`
      console.log(greet)
    }
  }
}

greeting('Hendri')('Yunus', 'Baim', 'Ardi')