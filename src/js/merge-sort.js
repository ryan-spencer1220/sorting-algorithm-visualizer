function splitArray(arrayCut1, arrayCut2) {
  let merged = [];
  let i = 0;
  let j = 0;
  while (i < arrayCut1.length && j < arrayCut2.length) {
    if (arrayCut1[i] <= arrayCut2[j]) {
      merged.push(arrayCut1[i]);
      i++;
    } else {
      merged.push(arrayCut2[j]);
      j++;
    }
  }
  merged = merged.concat(arrayCut1.slice(i).concat(arrayCut2.slice(j)));
  return merged;
}

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }
  const center = Math.floor(array.length / 2);
  const arrayCut1 = array.slice(0, center);
  const arrayCut2 = array.slice(center);
  return splitArray(mergeSort(arrayCut1), mergeSort(arrayCut2));
}
