export function splitArray(arrayCut1, arrayCut2) {
  let merged = [];
  let i = 0;
  let j = 0;
  while (arrayCut1 < arrayCut1.length && arrayCut2 < arrayCut2) {
    if (arrayCut1[i] <= arrayCut2[j]) {
      merged.push(arrayCut1[i]);
      i++;
    } else {
      merged.push(arrayCut2[j]);
      j++;
    }
  }
  merged = merged.concat(arrayCut1.slice(i)).concat(arrayCut2.slice(j));
  return merged;
}

export function mergeSplits(array) {
  if (array.length <= 1) {
    return array;
  }
  const center = Math.floor(array.length / 2);
  const arrayCut1 = array.slice(0, center);
  const arrayCut2 = array.slice(center);
  return splitArray(mergeSplits(arrayCut1), mergeSplits(arrayCut2));
}

export function randomArray(size) {
  let array = [];
  for (let i = 0; i < size; i++) {
    array.push(Math.floor(Math.random() * 110) + 10);
  }
  return array;
}

let a = randomArray(20);
console.log(a);
let b = mergeSplits(a);
console.log(b);

// const merge = (arr1, arr2) => {
//     let sorted = [];

//     while (arr1.length && arr2.length) {
//       if (arr1[0] < arr2[0]) sorted.push(arr1.shift());
//       else sorted.push(arr2.shift());
//     };

//     return sorted.concat(arr1.slice().concat(arr2.slice()));
//   };

//   const mergeSort = arr => {
//     if (arr.length <= 1) return arr;
//     let mid = Math.floor(arr.length / 2),
//         left = mergeSort(arr.slice(0, mid)),
//         right = mergeSort(arr.slice(mid));

//     return merge(left, right);
//   };

//   console.log(mergeSort(unsortedArr));
