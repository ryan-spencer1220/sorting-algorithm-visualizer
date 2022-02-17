import $ from "jquery";
import { waitforme } from "./business-logic.js";
import { speedAdjust } from "../index.js";

export async function mergeSort( array, previousStartIndex = 0 ) {
  if (array.length <= 1) {
    return array; //base case for recursion
  }
  const center = Math.floor(array.length / 2);  //the relative index where we'll slice array into 2 arrayCuts
  const trueCenter = previousStartIndex + center; //the absolute index with respect to the original single array at algorithm start

  const arrayCut1 = array.slice(0, center); //2nd argument (center) is not inclusive 
  const arrayCut2 = array.slice(center); //center INCLUDED in slice(), because it's the first argument
  return await splitArray(  await mergeSort(arrayCut1, previousStartIndex, false), await mergeSort(arrayCut2, trueCenter, true), previousStartIndex, trueCenter);
}

async function splitArray(arrayCut1, arrayCut2, arr1StartIndex, arr2StartIndex) {
  let merged = [];
  let i = 0;
  let j = 0;

  while (i < arrayCut1.length && j < arrayCut2.length) {
    if (arrayCut1[i] <= arrayCut2[j]) {
      merged.push(arrayCut1[i]);
      $(`#bar-index-${arr1StartIndex + i}`).css("background", `#eded69`);
      $(`#bar-index-${arr1StartIndex + i}`).css("height",`${arrayCut1[i] * 2}px`);
      await waitforme(speedAdjust());
      i++;
    } else {
      merged.push(arrayCut2[j]);
      $(`#bar-index-${arr2StartIndex + j}`).css("background", `#25b5cd`);
      $(`#bar-index-${arr2StartIndex + j}`).css("height", `${arrayCut2[j] * 2}px`);
      await waitforme(speedAdjust());
      j++;
    }
  }

  //leftoverI and J are the amount if i or j values left in the arrayCut arrays that didn't get iterated through in above while loop
  let leftoverI = arrayCut1.length - i; 
  let leftoverICopy = 0;  // why this starts at 0 instead of leftoverI's value is explained below
  let leftoverJ = arrayCut2.length - j; 
  let leftoverJCopy = 0;  // same as above but with leftover*J*
  while (leftoverI > 0){
    $(`#bar-index-${arr1StartIndex + i + leftoverICopy}`).css("background", `#eded69`);
    $(`#bar-index-${arr1StartIndex + i + leftoverICopy}`).css("height", `${arrayCut1[i + leftoverICopy] * 2}px`);
    leftoverI--;
    leftoverICopy++; //after ++'s in loop is done, leftoverICopy will have same value leftoverI originally had
  }
  while (leftoverJ > 0){
    $(`#bar-index-${arr2StartIndex + j + leftoverJCopy}`).css("background", `#25b5cd`);
    $(`#bar-index-${arr2StartIndex + j + leftoverJCopy}`).css("height", `${arrayCut2[j + leftoverJCopy] * 2}px`);
    leftoverJ--;
    leftoverJCopy++; //same as above but with leftover*J*
  }

  merged = merged.concat(arrayCut1.slice(i).concat(arrayCut2.slice(j)));
  for (let k = 0; k < merged.length; k++) {
    await waitforme(speedAdjust());
    $(`#bar-index-${arr1StartIndex + k}`).css("background", `#16b47e`);
    $(`#bar-index-${arr1StartIndex + k}`).css("height", `${merged[k] * 2}px`);
  }
 
  //$(".bar").css("background", "black");
  await waitforme(speedAdjust());

  return merged;
}
