import $ from "jquery";
import { waitforme } from "./business-logic.js";

export async function insertionSort(array) {
  let speedInput = 260 - $("#speed-range").val();

  for (let i = 1; i < array.length; i++) {
    let sortedIndex = i - 1;
    let whatToPush = array[i];
    let enteredLoop = false;
    $("#speed-range").on("input", function () {
      speedInput = 260 - $("#speed-range").val();
    });

    while (array[sortedIndex] > whatToPush) {
      enteredLoop = true;
      $(`#bar-index-${sortedIndex + 1}`).css("background", "yellow");

      await waitforme(speedInput);
      $(`#bar-index-${sortedIndex}`).css("background", "green");
      $(`#bar-index-${sortedIndex + 1}`).css("background", "green");

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
      $(`#bar-index-${sortedIndex}`).css("background", "green");

      //makes sure last element is colored if it is the tallest element in the array
      if (i === array.length - 1) {
        $(`#bar-index-${i}`).css("background", "green");
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
