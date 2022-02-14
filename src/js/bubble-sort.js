export function bubbleSort(array, passes) {
  passes = 0;
  let swapped = false;
  for (let i = 0; i < array.length - passes; i++) {
    if (array[i] > array[i + 1]) {
      let min = array[i + 1];
      array[i + 1] = array[i];
      array[i] = min;
      swapped = true;
    }
  }
  passes++;
  if (swapped === true) {
    return bubbleSort(array, passes);
  } else {
    return array;
  }
}
