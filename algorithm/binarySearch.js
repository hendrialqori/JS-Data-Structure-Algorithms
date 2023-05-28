const binarySeach = (arr, target) => {
  let start = 0; // index
  let end = arr.length - 1; // index

  while (start < end) {
    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      return mid;
    }

    if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
const target = 1;

const result = binarySeach(arr, target);

if (result !== -1) {
  console.log(`${target} found in index ${result}`);
} else {
  console.log("Not found");
}
