import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css'; 
import { randomArray } from './js/business-logic.js';

/*eslint-disable */

function clearFields() {
  array = [];
  $('#bars').html('');
};

function barGeneration(array) {
  for (let i = 0; i < array.length; i ++) {
    $('#bars').append(`<div class="bar" id="bar-index-${i}"></div>`);
    $(`#bar-index-${i}`).css("height", `${array[i]*2}px`);
  }
}

let arrayRange = $("#array-range").val();
let array = randomArray(arrayRange);
barGeneration(array);


$('#array-range').on("input", function(){
  clearFields();
  arrayRange = $("#array-range").val();
  array = randomArray(arrayRange);
  barGeneration(array);
})

$('#sort-select').on("change", function(){

})

/*eslint-enable */