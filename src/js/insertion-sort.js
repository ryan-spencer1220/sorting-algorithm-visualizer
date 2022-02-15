import $ from "jquery";
import { waitforme } from "./business-logic.js";

export async function insertionSort(array) {
  let speedInput = 260 - $("#speed-range").val();
  $("#bar-index-0").css("background", "green");
  for (let i = 1; i < array.length; i++) {
    let j = i - 1;
    let key = $(`#bar-index-${i}`).css("height");
    $(`#bar-index-${i}`).css("background", "blue");
    $("#speed-range").on("input", function () {
      speedInput = 260 - $("#speed-range").val();
    });
    await waitforme(speedInput);
    while (
      j >= 0 &&
      parseInt($(`#bar-index-${j}`).css("height")) > parseInt(key)
    ) {
      $(`#bar-index-${j}`).css("background", "blue");
      $(`#bar-index-${j + 1}`).css(
        "height",
        $(`#bar-index-${j}`).css("height")
      );
      j--;
      await waitforme(speedInput);
      for (let k = i; k >= 0; k--) {
        $(`#bar-index-${k}`).css("background", "green");
      }
    }
    $(`#bar-index-${j + 1}`).css("height", key);

    $(`#bar-index-${i}`).css("background", "green");
  }
}

// export async function insertionSort(array) {
//   let speedInput = 260 - $("#speed-range").val();
//   $("#bar-index-0").css("background", "green");
//   for (let i = 1; i < array.length; i++) {
//     $(`#bar-index-${i}`).css("background", "blue");
//     let sortedIndex = i - 1;
//     let whatToPush = array[i];
//     $("#speed-range").on("input", function () {
//       speedInput = 260 - $("#speed-range").val();
//     });
//     await waitforme(speedInput);
//     while (array[sortedIndex] > whatToPush) {
//       $(`#bar-index-${i}`).css("background", "green");
//       $(`#bar-index-${sortedIndex}`).css("background", "blue");
//       let newArray = array[sortedIndex];
//       array[sortedIndex + 1] = newArray;
//       $(`#bar-index-${sortedIndex}`).css(
//         "height",
//         `${array[sortedIndex + 1] * 2}px`
//       );
//       sortedIndex--;
//       for (let k = i; k >= 0; k--) {
//         $(`#bar-index-${k}`).css("background", "green");
//       }
//     }
//     array[sortedIndex + 1] = whatToPush;
// $(`#bar-index-${sortedIndex}`).css(
//   //         "height",
//   //         `${whatToPush}px`
//   //       );
//   }
//   console.log(array);
//   return array;
// }
