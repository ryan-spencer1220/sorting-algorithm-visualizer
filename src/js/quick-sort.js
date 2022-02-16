import $ from "jquery";
import { waitforme } from "./business-logic.js";
let speedInput = 100;

export function quickSort(array, left = 0, right = array.length - 1) {
  let partitionPoint;
  if (array.length > 1) {
    partitionPoint = sortPartition(array, left, right);
    if (left < partitionPoint - 1) {
      // await waitforme(speedInput);
      quickSort(array, left, partitionPoint - 1);
    }
    if (right > partitionPoint) {
      // await waitforme(speedInput);
      quickSort(array, partitionPoint, right);
    }
  }
  return array;
}
function sortPartition(array, left, right) {
  const pivot = findPivot(array, left, right);
  while (left <= right) {
    while (array[left] < pivot) {
      left++;
    }
    while (array[right] > pivot) {
      right--;
    }
    if (left <= right) {
      swap(array, left, right);
      left++;
      right--;
    }
  }
  return left;
}

function swap(array, left, right) {
  // await waitforme(speedInput);
  const replaceValue = array[left];
  array[left] = array[right];
  array[right] = replaceValue;
  $(`#bar-index-${left}`).css("height", `${array[left] * 2}px`);
  $(`#bar-index-${right}`).css("height", `${array[right] * 2}px`);
  return array;
}

function findPivot(array, left, right) {
  return array[Math.floor((left + right) / 2)];
}

// // jQuery
// $(`#bar-index-${j}`).css("background", "blue");
// $(`#bar-index-${j}`).css("height", `${array[j] * 2}px`);
// $(`#bar-index-${j + 1}`).css("height", `${array[j + 1] * 2}px`);

// // NOT OUR CODE

// async function partitionLomuto(ele, l, r) {
//   let i = l - 1;

//   ele[r].style.background = "red";
//   for (let j = l; j <= r - 1; j++) {
//     ele[j].style.background = "yellow";
//     await waitforme(delay);
//     if (parseInt(ele[j].style.height) < parseInt(ele[r].style.height)) {
//       i++;
//       swap(ele[i], ele[j]);
//       ele[i].style.background = "orange";
//       if (i != j) ele[j].style.background = "orange";
//       await waitforme(delay);
//     } else {
//       // color if not less than pivot
//       ele[j].style.background = "pink";
//     }
//   }
//   i++;

//   await waitforme(delay);
//   swap(ele[i], ele[r]); // pivot height one

//   ele[r].style.background = "pink";
//   ele[i].style.background = "green";

//   await waitforme(delay);

//   for (let k = 0; k < ele.length; k++) {
//     if (ele[k].style.background != "green") ele[k].style.background = "cyan";
//   }

//   return i;
// }

// async function quickSort(ele, l, r) {
//   if (l < r) {
//     let pivot_index = await partitionLomuto(ele, l, r);
//     await quickSort(ele, l, pivot_index - 1);
//     await quickSort(ele, pivot_index + 1, r);
//   } else {
//     if (l >= 0 && r >= 0 && l < ele.length && r < ele.length) {
//       ele[r].style.background = "green";
//       ele[l].style.background = "green";
//     }
//   }
// }
