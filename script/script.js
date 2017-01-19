/*filter toggles */
var alfabet_f = document.querySelector('.alfabet_filter');
var nummer_f = document.querySelector('.nummer_filter');
var datum_f = document.querySelector('.datum_filter');
var lees_f = document.querySelector('.leesduur_filter');
var stijl_f = document.querySelector('.stijl_filter');

var button_alf = document.querySelector('.alfabet');
var button_num = document.querySelector('.nummer');
var button_dat = document.querySelector('.datum');
var button_lee = document.querySelector('.leesduur');
var button_sti = document.querySelector('.stijl');


var show_alf = function () {
	alfabet_f.classList.toggle('filter_visible')
}

var show_num = function () {
	nummer_f.classList.toggle('filter_visible')
}

var show_dat = function () {
	datum_f.classList.toggle('filter_visible')
}

var show_lee = function () {
	lees_f.classList.toggle('filter_visible')
}

var show_sti = function () {
	stijl_f.classList.toggle('filter_visible')
}

button_alf.addEventListener('click', show_alf);
button_num.addEventListener('click', show_num);
button_dat.addEventListener('click', show_dat);
button_lee.addEventListener('click', show_lee);
button_sti.addEventListener('click', show_sti);




/*leesduur slider*/
function outputUpdate(vol) {
	document.querySelector('#volume').value = vol + ' ' + 'min';
}