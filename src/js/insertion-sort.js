// import $ from "jquery";
// import { waitforme } from "./business-logic.js";

export async function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let sortedIndex = i - 1;
    let whatToPush = array[i];
    while (array[sortedIndex] > whatToPush) {
      let newArray = array[sortedIndex];
      array[sortedIndex + 1] = newArray;
      sortedIndex--;
    }
    array[sortedIndex + 1] = whatToPush;
  }
  return array;
}
