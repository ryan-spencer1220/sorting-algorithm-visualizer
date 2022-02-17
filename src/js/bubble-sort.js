import $ from "jquery";
import { waitforme } from "./business-logic.js";
import { speedAdjust } from "../index.js";

export async function bubbleSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      $(`#bar-index-${j}`).css("background", "blue");
      $(`#bar-index-${j + 1}`).css("background", "blue");
      if (array[j] > array[j + 1]) {
        await waitforme(speedAdjust());
        let min = array[j + 1];
        array[j + 1] = array[j];
        array[j] = min;
        $(`#bar-index-${j}`).css("height", `${array[j] * 2}px`);
        $(`#bar-index-${j + 1}`).css("height", `${array[j + 1] * 2}px`);
      }
      $(`#bar-index-${j}`).css("background", "#25b5cd");
      $(`#bar-index-${j + 1}`).css("background", "#16b47e");
    }
    $(`#bar-index-${array.length - 1 - i}`).css("background", "#16b47e");
  }
  $("#bar-index-0").css("background", "#16b47e");
}
