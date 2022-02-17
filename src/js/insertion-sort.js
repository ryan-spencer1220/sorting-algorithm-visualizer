import $ from "jquery";
import { waitforme } from "./business-logic.js";
import { speedAdjust } from "../index.js";

export async function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let sortedIndex = i - 1;
    let whatToPush = array[i];
    let enteredLoop = false;

    while (array[sortedIndex] > whatToPush) {
      enteredLoop = true;
      $(`#bar-index-${sortedIndex + 1}`).css("background", "blue");

      await waitforme(speedAdjust());
      $(`#bar-index-${sortedIndex}`).css("background", "#16b47e");
      $(`#bar-index-${sortedIndex + 1}`).css("background", "#16b47e");

      let newArray = array[sortedIndex];
      array[sortedIndex + 1] = newArray;
      $(`#bar-index-${sortedIndex + 1}`).css(
        "height",
        `${array[sortedIndex + 1] * 2}px`
      );
      sortedIndex--;
    }

    if (enteredLoop === false) {
      $(`#bar-index-${sortedIndex}`).css("background", "#16b47e");

      if (i === array.length - 1) {
        $(`#bar-index-${i}`).css("background", "#16b47e");
      }
    }
    array[sortedIndex + 1] = whatToPush;
    $(`#bar-index-${sortedIndex + 1}`).css(
      "height",
      `${array[sortedIndex + 1] * 2}px`
    );
  }
  return array;
}
