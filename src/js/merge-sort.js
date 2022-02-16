import $ from "jquery";
// import { waitforme } from "./business-logic.js";
import { sleep } from "./business-logic.js";

let delay = 260;

function splitArray(arrayCut1, arrayCut2) {
  let merged = [];
  let i = 0;
  let j = 0;
  while (i < arrayCut1.length && j < arrayCut2.length) {
    if (arrayCut1[i] <= arrayCut2[j]) {
      // (async function () {
      //   await waitforme(delay);
      // })();
      merged.push(arrayCut1[i]);
      sleep(delay);
      $(`#bar-index-${i}`).css("height", `${arrayCut1[i] * 2}px`);
      i++;
    } else {
      // (async function () {
      //   await waitforme(delay);
      // })();
      merged.push(arrayCut2[j]);
      sleep(delay);
      $(`#bar-index-${j}`).css("height", `${arrayCut2[j] * 2}px`);
      j++;
    }
  }
  merged = merged.concat(arrayCut1.slice(i).concat(arrayCut2.slice(j)));
  console.log(merged);
  return merged;
}

export function mergeSort(array) {
  console.log(array);
  if (array.length <= 1) {
    return array;
  }
  const center = Math.floor(array.length / 2);
  const arrayCut1 = array.slice(0, center);
  const arrayCut2 = array.slice(center);
  return splitArray(mergeSort(arrayCut1), mergeSort(arrayCut2));
}

// function splitArray(arrayCut1, arrayCut2) {
//   let merged = [];
//   let i = 0;
//   let j = 0;
//   while (i < arrayCut1.length && j < arrayCut2.length) {
//     if (arrayCut1[i] <= arrayCut2[j]) {
//       merged.push(arrayCut1[i]);
//       i++;
//     } else {
//       merged.push(arrayCut2[j]);
//       j++;
//     }
//   }
//   merged = merged.concat(arrayCut1.slice(i).concat(arrayCut2.slice(j)));
//   return merged;
// }

// function mergeSort(array) {
//   if (array.length <= 1) {
//     return array;
//   }
//   const center = Math.floor(array.length / 2);
//   const arrayCut1 = array.slice(0, center);
//   const arrayCut2 = array.slice(center);
//   return splitArray(mergeSort(arrayCut1), mergeSort(arrayCut2));
// }

//       $(`#bar-index-${j}`).css("height", `${array[j] * 2}px`);
//       $(`#bar-index-${j + 1}`).css("height", `${array[j + 1] * 2}px`);

//       $(`#bar-index-${j}`).css("background", "cyan");
//       $(`#bar-index-${j + 1}`).css("background", "green");

// // NOT OUR CODE
// //let delay = 30;
// async function merge(ele, low, mid, high){
//   const n1 = mid - low + 1;
//   const n2 = high - mid;
//   let left = new Array(n1);
//   let right = new Array(n2);

//   for(let i = 0; i < n1; i++){
//       await waitforme(delay);
//       ele[low + i].style.background = 'orange';
//       left[i] = ele[low + i].style.height;
//   }
//   for(let i = 0; i < n2; i++){
//       await waitforme(delay);
//       ele[mid + 1 + i].style.background = 'yellow';
//       right[i] = ele[mid + 1 + i].style.height;
//   }
//   await waitforme(delay);
//   let i = 0, j = 0, k = low;
//   while(i < n1 && j < n2){
//       await waitforme(delay);

//       // To add color for which two r being compared for merging

//       if(parseInt(left[i]) <= parseInt(right[j])){
//           if((n1 + n2) === ele.length){
//               ele[k].style.background = 'green';
//           }
//           else{
//               ele[k].style.background = 'lightgreen';
//           }

//           ele[k].style.height = left[i];
//           i++;
//           k++;
//       }
//       else{
//           if((n1 + n2) === ele.length){
//               ele[k].style.background = 'green';
//           }
//           else{
//               ele[k].style.background = 'lightgreen';
//           }
//           ele[k].style.height = right[j];
//           j++;
//           k++;
//       }
//   }
//   while(i < n1){
//       await waitforme(delay);
//       if((n1 + n2) === ele.length){
//           ele[k].style.background = 'green';
//       }
//       else{
//           ele[k].style.background = 'lightgreen';
//       }
//       ele[k].style.height = left[i];
//       i++;
//       k++;
//   }
//   while(j < n2){
//       await waitforme(delay);
//       if((n1 + n2) === ele.length){
//           ele[k].style.background = 'green';
//       }
//       else{
//           ele[k].style.background = 'lightgreen';
//       }
//       ele[k].style.height = right[j];
//       j++;
//       k++;
//   }
// }

// async function mergeSort(ele, l, r){
//   if(l >= r){
//       return;
//   }
//   const m = l + Math.floor((r - l) / 2);
//   await mergeSort(ele, l, m);
//   await mergeSort(ele, m + 1, r);
//   await merge(ele, l, m, r);
// }

// const mergeSortbtn = document.querySelector(".mergeSort");
// mergeSortbtn.addEventListener('click', async function(){
//     let ele = document.querySelectorAll('.bar');
//     let l = 0;
//     let r = parseInt(ele.length) - 1;
//     disableSortingBtn();
//     disableSizeSlider();
//     disableNewArrayBtn();
//     await mergeSort(ele, l, r);
//     enableSortingBtn();
//     enableSizeSlider();
//     enableNewArrayBtn();
// });
