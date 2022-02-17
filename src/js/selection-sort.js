import $ from "jquery";
import { waitforme } from "./business-logic.js";
import { speedAdjust } from "../index.js";

export async function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    $(`#bar-index-${i}`).css("background", "#25b5cd");
    for (let j = i + 1; j < array.length; j++) {
      $(`#bar-index-${j}`).css("background", "blue");
      await waitforme(speedAdjust());
      if (array[i] > array[j]) {
        let arrayHigh = array[i];
        array[i] = array[j];
        array[j] = arrayHigh;
        $(`#bar-index-${i}`).css("height", `${array[i] * 2}px`);
        $(`#bar-index-${j}`).css("height", `${array[j] * 2}px`);
      }
      $(`#bar-index-${j}`).css("background", "black");
    }
    $(`#bar-index-${i}`).css("background", "#16b47e");
  }
  return array;
}
