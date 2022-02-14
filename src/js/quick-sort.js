export function quickSort(array, left = 0, right = array.length - 1) {
  let partitionPoint;
  if (array.length > 1) {
    partitionPoint = sortPartition(array, left, right);
    if (left < partitionPoint - 1) {
      quickSort(array, left, partitionPoint - 1);
    }
    if (right > partitionPoint) {
      quickSort(array, partitionPoint, right);
    }
  }
  return array;
}

export function sortPartition(array, left, right) {
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

export function swap(array, left, right) {
  const replaceValue = array[left];
  array[left] = array[right];
  array[right] = replaceValue;
  return array;
}

export function findPivot(array, left, right) {
  return array[Math.floor((left + right) / 2)];
}
