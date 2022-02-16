import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import { randomArray } from "./js/business-logic.js";
import { selectionSort } from "./js/selection-sort.js";
import { insertionSort } from "./js/insertion-sort.js";
import { bubbleSort } from "./js/bubble-sort.js";
import { mergeSort } from "./js/merge-sort.js";
import { quickSort } from "./js/quick-sort.js";

function clearFields() {
  array = [];
  $("#bars").html("");
}

// export function speedAdjust(speedInput) {
//   $("#speed-range").on("input", function () {
//     speedInput = 260 - $("#speed-range").val();
//   });
// }

// function swapElements(element1, element2) {
//   let tempElement = element1.css("height");
//   element1.css("height") = element2.css("height");
//   element2.css("height") = tempElement;
// }

function barGeneration(array) {
  for (let i = 0; i < array.length; i++) {
    $("#bars").append(`<div class="bar" id="bar-index-${i}"></div>`);
    $(`#bar-index-${i}`).css("height", `${array[i] * 2}px`);
  }
}

let arrayRange = $("#array-range").val();
let array = randomArray(arrayRange);
barGeneration(array);

$("#new-array").on("click", function () {
  clearFields();
  arrayRange = $("#array-range").val();
  array = randomArray(arrayRange);
  barGeneration(array);
});

$("#array-range").on("input", function () {
  clearFields();
  arrayRange = $("#array-range").val();
  array = randomArray(arrayRange);
  barGeneration(array);
});

$("#sort-select").on("input", function () {
  $("#bubble, #insertion, #merge, #quicksort, #selection").hide();
  let sortSelect = $("#sort-select").val();
  $(`#${sortSelect}`).show();
});

$("#run").on("click", async function () {
  let runInput = $("#sort-select").val();
  disable();
  if (runInput === "bubble") {
    await bubbleSort(array);
  } else if (runInput === "insertion") {
    await insertionSort(array);
  } else if (runInput === "merge") {
    await mergeSort(array);
  } else if (runInput === "quicksort") {
    await quickSort(array);
  } else if (runInput === "selection") {
    await selectionSort(array);
  }
  enable();
});

function disable() {
  $("#new-array").prop("disabled", true);
  $("#array-range").prop("disabled", true);
  $("#run").prop("disabled", true);
}

function enable() {
  $("#new-array").prop("disabled", false);
  $("#array-range").prop("disabled", false);
  $("#run").prop("disabled", false);
}
