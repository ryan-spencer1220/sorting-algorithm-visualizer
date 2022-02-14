export function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        let arrayHigh = array[i];
        array[i] = array[j];
        array[j] = arrayHigh;
      }
    }
  }
  return array;
}

//UI Logic
let actualRandomArray = randomArray();
selectionSort(actualRandomArray);

// function selectionSort(array) {
//     for (let currentIndex = 0; currentIndex < array.length; currentIndex++) {
//       for (let indexToCompare = currentIndex+1; indexToCompare < array.length; indexToCompare++) {
//         if (array[currentIndex] > array[indexToCompare]) {
//           const higherValue = array[currentIndex];
//           array[currentIndex] = array[indexToCompare];
//           array[indexToCompare] = higherValue;
//         }
//       }
//     }
//     return array;
//   }
