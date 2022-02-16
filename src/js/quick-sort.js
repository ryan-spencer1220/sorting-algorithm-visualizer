import $ from "jquery";
import { waitforme } from "./business-logic.js";
import { speedAdjust } from "../index.js";

function findPivot(array, left, right) {
  // console.log(array);
  return array[Math.floor((left + right) / 2)];
}

async function swap(array, left, right) {
  const replaceValue = array[left];
  // console.log("Number:" + " " + array[left] + ", Index:" + " " + left);
  // console.log("Number:" + " " + array[right] + ", Index:" + " " + right);
  array[left] = array[right];
  array[right] = replaceValue;
  await waitforme(speedAdjust());
  $(`#bar-index-${left}`).css("height", `${array[left] * 2}px`);
  $(`#bar-index-${right}`).css("height", `${array[right] * 2}px`);
  return array;
}

async function sortPartition(array, left, right) {
  const pivot = findPivot(array, left, right);
  $(`#bar-index-${pivot}`).css("background", "blue");
  // console.log("pivot number:" + " " + pivot);
  while (left <= right) {
    while (array[left] < pivot) {
      left++;
    }
    while (array[right] > pivot) {
      right--;
    }
    if (left <= right) {
      await swap(array, left, right);
      // console.log(array);
      left++;
      $(`#bar-index-${left}`).css("background", "green");
      right--;
      $(`#bar-index-${right}`).css("background", "green");
    }
    $(`#bar-index-${pivot}`).css("background", "green");
  }
  return left;
}

export async function quickSort(array, left = 0, right = array.length - 1) {
  let partitionPoint;
  if (array.length > 1) {
    partitionPoint = await sortPartition(array, left, right);
    if (left < partitionPoint - 1) {
      quickSort(array, left, partitionPoint - 1);
    }
    if (right > partitionPoint) {
      quickSort(array, partitionPoint, right);
      $(`#bar-index-${right}`).css("background", "green");
      $(`#bar-index-${partitionPoint}`).css("background", "green");
    }
  }
  return array;
}
