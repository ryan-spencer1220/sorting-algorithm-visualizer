import $ from "jquery";
import { waitforme } from "./business-logic.js";

export async function selectionSort(array) {
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
