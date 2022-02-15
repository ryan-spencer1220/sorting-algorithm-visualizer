import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import { randomArray } from "./js/business-logic.js";
import { selectionSort } from "./js/selection-sort.js";
// import { insertionSort } from "./js/insertion-sort.js";
import { bubbleSort } from "./js/bubble-sort.js";
// import { splitArray, mergeSort } from "./js/merge-sort.js";
// import { findPivot, swap, sortPartition, quickSort } from "./js/quick-sort.js";

function clearFields() {
  array = [];
  $("#bars").html("");
}

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

$("#run").on("click", function () {
  let runInput = $("#sort-select").val();
  //let speedInput = 500 - $("#speed-range").val();
  if (runInput === "bubble") {
    bubbleSort(array);
  }
  // } else if (runInput === "insertion") {
  //   insertionSort(array);
  // } else if (runInput === "merge") {
  //   mergeSort(array);
  // } else if (runInput === "quicksort") {
  //   quickSort(array);
  else if (runInput === "selection") {
    selectionSort(array);
  }
});
