import $ from "jquery";
import { waitforme } from "./business-logic.js";
import { speedAdjust } from "../index.js";

const sorted = "#3CD184";
const pivotColor = "#f07a76";
const leftRight = "yellow";//"#B9E5E9";


function findPivot(array, left, right) {

  return array[Math.floor((left + right) / 2)];
}

async function swap(array, left, right) {
  const replaceValue = array[left];
  array[left] = array[right];
  array[right] = replaceValue;
  await waitforme(speedAdjust());
  $(`#bar-index-${left}`).css("height", `${array[left] * 2}px`);
  $(`#bar-index-${right}`).css("height", `${array[right] * 2}px`);
  return array;
}

async function sortPartition(array, left, right) {
  const pivot = findPivot(array, left, right);
  const pivotIndex = Math.floor((left + right) / 2);
  $(`#bar-index-${pivotIndex}`).css("background", pivotColor);
  const originalLeft = left;
  const originalRight = right;
  while (left <= right) {
    while (array[left] < pivot) {
      $(`#bar-index-${pivotIndex}`).css("background", pivotColor);
      let tempColorL = $(`#bar-index-${left}`).css("background");
      $(`#bar-index-${left}`).css("background", leftRight);
      await waitforme(speedAdjust()/2);
      $(`#bar-index-${left}`).css("background", tempColorL);
      left++;
    }
    while (array[right] > pivot) {
      $(`#bar-index-${pivotIndex}`).css("background", pivotColor);
      let tempColorR = $(`#bar-index-${right}`).css("background");
      $(`#bar-index-${right}`).css("background", leftRight);
      await waitforme(speedAdjust()/2);
      $(`#bar-index-${right}`).css("background", tempColorR);
      right--;
    }
    if (left <= right) {
      await swap(array, left, right);

      $(`#bar-index-${left}`).css("background", sorted);
      $(`#bar-index-${right}`).css("background", sorted);
      await waitforme(speedAdjust()/2);
      left++;
      right--;
    }
  }
  $(`#bar-index-${pivotIndex}`).css("background", sorted);
  for (let i = originalLeft; i <= originalRight; i++){
    //$(`#bar-index-${i}`).css("background", sorted);
  }

  //$(`.bar`).css("background", "black");
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
    }
  }
  
  return array;
}
