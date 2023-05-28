const arr = [9, 8, 7, 6, 5, 4, 3, 2, 1, 10, -1, -0];

const SS = (number) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === number) {
      console.log(`${number} find at index ${i}`);
      break;
    }
  }
};

SS(100);
