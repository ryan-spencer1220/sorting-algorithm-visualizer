import $ from "jquery";
import { waitforme } from "./business-logic.js";

export async function selectionSort(array) {
  let speedInput = 260 - $("#speed-range").val();
  for (let i = 0; i < array.length; i++) {
    // let min = i;
    $(`#bar-index-${i}`).css("background", "blue");
    for (let j = i + 1; j < array.length; j++) {
      $(`#bar-index-${j}`).css("background", "blue");
      $("#speed-range").on("input", function () {
        speedInput = 260 - $("#speed-range").val();
      });
      await waitforme(speedInput);
      if (array[i] > array[j]) {
        let arrayHigh = array[i];
        array[i] = array[j];
        array[j] = arrayHigh;
        $(`#bar-index-${i}`).css("height", `${array[i] * 2}px`);
        $(`#bar-index-${j}`).css("height", `${array[j] * 2}px`);
      }
      $(`#bar-index-${j}`).css("background", "cyan");
    }
    $(`#bar-index-${i}`).css("background", "green");
  }
  return array;
}
