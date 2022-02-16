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
      $(`#bar-index-${sortedIndex + 1}`).css("background", "#F8B195");

      await waitforme(speedAdjust());
      $(`#bar-index-${sortedIndex}`).css("background", "F67280");
      $(`#bar-index-${sortedIndex + 1}`).css("background", "F67280");

      let newArray = array[sortedIndex];
      array[sortedIndex + 1] = newArray;
      $(`#bar-index-${sortedIndex + 1}`).css(
        "height",
        `${array[sortedIndex + 1] * 2}px`
      ); //newArray doesn't work in 2nd template literal!!!!!!!!!!!
      sortedIndex--;
    }

    //makes sure color changes happen even if we don't enter while loop
    if (enteredLoop === false) {
      $(`#bar-index-${sortedIndex}`).css("background", "F67280");

      //makes sure last element is colored if it is the tallest element in the array
      if (i === array.length - 1) {
        $(`#bar-index-${i}`).css("background", "F67280");
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
