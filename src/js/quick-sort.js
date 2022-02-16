import $ from "jquery";
import { waitforme } from "./business-logic.js";

function findPivot(array, left, right) {
  return array[Math.floor((left + right) / 2)];
}

async function swap(array, left, right) {
  const replaceValue = array[left];
  let speedInput = 260 - $("#speed-range").val();
  $("#speed-range").on("input", function () {
    speedInput = 260 - $("#speed-range").val();
  });
  array[left] = array[right];
  array[right] = replaceValue;
  await waitforme(speedInput);
  $(`#bar-index-${left}`).css("height", `${array[left] * 2}px`);
  $(`#bar-index-${left}`).css("background", "green");
  $(`#bar-index-${right}`).css("height", `${array[right] * 2}px`);
  // $(`#bar-index-${right}`).css("background", "red");
  return array;
}

async function sortPartition(array, left, right) {
  const pivot = findPivot(array, left, right);
  while (left <= right) {
    while (array[left] < pivot) {
      $(`#bar-index-${left}`).css("background", "blue");
      left++;
    }
    while (array[right] > pivot) {
      $(`#bar-index-${right}`).css("background", "blue");
      right--;
    }
    if (left <= right) {
      await swap(array, left, right);
      left++;
      $(`#bar-index-${left}`).css("background", "green");
      right--;
      $(`#bar-index-${right}`).css("background", "green");
    }
  }
  return left;
}

export async function quickSort(array, left = 0, right = array.length - 1) {
  let partitionPoint;
  if (array.length > 1) {
    partitionPoint = await sortPartition(array, left, right);
    if (left < partitionPoint - 1) {
      quickSort(array, left, partitionPoint - 1);
      $(`#bar-index-${partitionPoint}`).css("background", "green");
    }
    if (right > partitionPoint) {
      quickSort(array, partitionPoint, right);
      $(`#bar-index-${right}`).css("background", "green");
      $(`#bar-index-${partitionPoint}`).css("background", "green");
    }
  }
  console.log(array);
  return array;
}
