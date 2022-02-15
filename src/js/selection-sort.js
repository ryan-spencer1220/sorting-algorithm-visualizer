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

// async function selection() {
//   console.log("In selection()");
//   const ele = document.querySelectorAll(".bar");
//   for (let i = 0; i < ele.length; i++) {
//     console.log("In ith loop");
//     let min_index = i;
//     // Change color of the position to swap with the next min
//     ele[i].style.background = "blue";
//     for (let j = i + 1; j < ele.length; j++) {
//       console.log("In jth loop");
//       // Change color for the current comparision (in consideration for min_index)
//       ele[j].style.background = "red";
//       await waitforme(delay);
//       if (
//         parseInt(ele[j].style.height) < parseInt(ele[min_index].style.height)
//       ) {
//         console.log("In if condition height comparision");
//         if (min_index !== i) {
//           // new min_index is found so change prev min_index color back to normal
//           ele[min_index].style.background = "cyan";
//         }
//         min_index = j;
//       } else {
//         // if the currnent comparision is more than min_index change is back to normal
//         ele[j].style.background = "cyan";
//       }
//     }
//   }
