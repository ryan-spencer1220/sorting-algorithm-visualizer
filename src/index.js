import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css'; 

let array = [] 
let arrayRange = $("#array-range").val()
console.log(arrayRange)
for (let i=10; i<arrayRange; i++) {
  array.push(i)
}

const bar = $('<div></div>')
bar.css("height", `"${array[0]*2}"px`)

for (let i = 0; i < array.length; i ++) {
  $('#bars').append(`<div class="bar" id="bar-index-${i}"></div>`);
  $(`#bar-index-${i}`).css("height", `${array[i]*2}px`);
}

