import $ from "jquery";
import { waitforme } from "./business-logic.js";

export async function bubbleSort(array) {
  let speedInput = 260 - $("#speed-range").val();
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      $(`#bar-index-${j}`).css("background", "blue");
      $(`#bar-index-${j + 1}`).css("background", "blue");
      if (array[j] > array[j + 1]) {
        $("#speed-range").on("input", function () {
          speedInput = 260 - $("#speed-range").val();
        });
        await waitforme(speedInput);
        let min = array[j + 1];
        array[j + 1] = array[j];
        array[j] = min;
        $(`#bar-index-${j}`).css("height", `${array[j] * 2}px`);
        $(`#bar-index-${j + 1}`).css("height", `${array[j + 1] * 2}px`);
      }
      $(`#bar-index-${j}`).css("background", "cyan");
      $(`#bar-index-${j + 1}`).css("background", "green");
    }
    $(`#bar-index-${array.length - 1 - i}`).css("background", "green");
  }
  $("#bar-index-0").css("background", "green");
}
