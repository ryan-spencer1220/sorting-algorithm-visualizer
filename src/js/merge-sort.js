import $ from "jquery";
import { waitforme } from "./business-logic.js";
import { speedAdjust } from "../index.js";

export async function mergeSort(array, previousStartIndex = 0) {
  if (array.length <= 1) {
    return array;
  }
  const center = Math.floor(array.length / 2);
  const trueCenter = previousStartIndex + center;

  const arrayCut1 = array.slice(0, center);
  const arrayCut2 = array.slice(center);
  return await splitArray(
    await mergeSort(arrayCut1, previousStartIndex, false),
    await mergeSort(arrayCut2, trueCenter, true),
    previousStartIndex,
    trueCenter
  );
}

async function splitArray(
  arrayCut1,
  arrayCut2,
  arr1StartIndex,
  arr2StartIndex
) {
  let merged = [];
  let i = 0;
  let j = 0;

  while (i < arrayCut1.length && j < arrayCut2.length) {
    if (arrayCut1[i] <= arrayCut2[j]) {
      merged.push(arrayCut1[i]);
      $(`#bar-index-${arr1StartIndex + i}`).css("background", `#eded69`);
      $(`#bar-index-${arr1StartIndex + i}`).css(
        "height",
        `${arrayCut1[i] * 2}px`
      );
      await waitforme(speedAdjust());
      i++;
    } else {
      merged.push(arrayCut2[j]);
      $(`#bar-index-${arr2StartIndex + j}`).css("background", `#25b5cd`);
      $(`#bar-index-${arr2StartIndex + j}`).css(
        "height",
        `${arrayCut2[j] * 2}px`
      );
      await waitforme(speedAdjust());
      j++;
    }
  }

  let leftoverI = arrayCut1.length - i;
  let leftoverICopy = 0;
  let leftoverJ = arrayCut2.length - j;
  let leftoverJCopy = 0;
  while (leftoverI > 0) {
    $(`#bar-index-${arr1StartIndex + i + leftoverICopy}`).css(
      "background",
      `#eded69`
    );
    $(`#bar-index-${arr1StartIndex + i + leftoverICopy}`).css(
      "height",
      `${arrayCut1[i + leftoverICopy] * 2}px`
    );
    leftoverI--;
    leftoverICopy++;
  }
  while (leftoverJ > 0) {
    $(`#bar-index-${arr2StartIndex + j + leftoverJCopy}`).css(
      "background",
      `#25b5cd`
    );
    $(`#bar-index-${arr2StartIndex + j + leftoverJCopy}`).css(
      "height",
      `${arrayCut2[j + leftoverJCopy] * 2}px`
    );
    leftoverJ--;
    leftoverJCopy++;
  }

  merged = merged.concat(arrayCut1.slice(i).concat(arrayCut2.slice(j)));
  for (let k = 0; k < merged.length; k++) {
    await waitforme(speedAdjust());
    $(`#bar-index-${arr1StartIndex + k}`).css("background", `#16b47e`);
    $(`#bar-index-${arr1StartIndex + k}`).css("height", `${merged[k] * 2}px`);
  }

  await waitforme(speedAdjust());

  return merged;
}
