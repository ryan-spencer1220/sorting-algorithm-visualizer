import $ from "jquery";
import { waitforme } from "./business-logic.js";
import { speedAdjust } from "../index.js";

export async function mergeSort(
  array,
  previousStartElem = 0,
  rightArrCut = false
) {
  if (array.length <= 1) {
    return array;
  }

  let trueStartIndex;
  const center = Math.floor(array.length / 2);
  const trueCenter = previousStartElem + center;
  if (rightArrCut === false) {
    trueStartIndex = previousStartElem;
  } else {
    trueStartIndex = trueCenter;
  }

  const arrayCut1 = array.slice(0, center); //end not included in slice() 2nd argument, arrayCut1 is end is rounded down sometimes
  const arrayCut2 = array.slice(center); //start INCLUDED in slice() first argument
  return await splitArray(
    await mergeSort(arrayCut1, trueCenter - center, false),
    await mergeSort(arrayCut2, trueCenter, true),
    trueStartIndex,
    trueCenter
  );
}

async function splitArray(arrayCut1, arrayCut2, trueStartIndex, trueCenter) {
  let merged = [];
  let i = 0;
  let j = 0;

  // for(let i = 0; i < arrayCut1.length; i++){
  //   $(`#bar-index-${i}`).css("background", `yellow`);
  // }

  while (i < arrayCut1.length && j < arrayCut2.length) {
    if (arrayCut1[i] <= arrayCut2[j]) {
      merged.push(arrayCut1[i]);
      $(`#bar-index-${trueStartIndex + i}`).css("background", `yellow`);
      $(`#bar-index-${trueStartIndex + i}`).css(
        "height",
        `${arrayCut1[i] * 2}px`
      );
      await waitforme(speedAdjust());
      i++;
    } else {
      merged.push(arrayCut2[j]);
      $(`#bar-index-${trueCenter + j}`).css("background", `orange`);
      $(`#bar-index-${trueCenter + j}`).css("height", `${arrayCut2[j] * 2}px`);
      await waitforme(speedAdjust());
      j++;
    }
  }
  merged = merged.concat(arrayCut1.slice(i).concat(arrayCut2.slice(j)));
  for (let k = 0; k < merged.length; k++) {
    await waitforme(speedAdjust());
    $(`#bar-index-${trueStartIndex + k}`).css("background", `green`);
    $(`#bar-index-${trueStartIndex + k}`).css("height", `${merged[k] * 2}px`);
  }
  return merged;
}
