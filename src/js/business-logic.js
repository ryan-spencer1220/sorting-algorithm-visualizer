export function randomArray(size) {
  let array = [];
  for (let i = 0; i < size; i++) {
    array.push(Math.floor(Math.random() * 110) + 10);
  }
  return array;
}
