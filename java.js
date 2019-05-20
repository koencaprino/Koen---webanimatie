var fatima = document.querySelector('.fatima');
var rabia = document.querySelector('.rabia');
var samirah = document.querySelector('.samirah');
var zaina = document.querySelector('.zaina');
var adila = document.querySelector('.adila');
var body = document.querySelector('body')

document.addEventListener('keypress', function (e) {
    if (e.keyCode === 49) {
        fatima.classList.toggle('naam')
    }
    if (e.keyCode === 50) {
        rabia.classList.toggle('naam')
    }
    if (e.keyCode === 51) {
        samirah.classList.toggle('naam')
    }
    if (e.keyCode === 52) {
        zaina.classList.toggle('naam')
    }
    if (e.keyCode === 53) {
        adila.classList.toggle('naam')
    }
    console.log(e.keyCode);
     if (e.keyCode === 100) {
        body.classList.toggle('darkmode')
    }
})


var firstwomen = document.querySelector('#women0');
var sonos = document.querySelector('.sonos');

firstwomen.addEventListener('click', function() {
  sonos.classList.toggle('muziek');
})


var redwomen = document.querySelector('#women1');
var light = document.querySelector('.light');

redwomen.addEventListener('click', function() {
  light.classList.toggle('flashinglight');
})



var vrouw = document.querySelector('#women2');

vrouw.addEventListener('click',
    function () {

        vrouw.classList.toggle('disco');
    })




var flip =
    document.querySelector('#women3');

flip.addEventListener('click',
    function () {

        flip.classList.toggle('flip-scale-2-ver-left');
    })

//document.addEventListener('DOMContentLoaded', function () {
//    setTimeout(function () {
//        document.getElementById('perz').className = 'slideIn';
//    }, 1000);
//}, false);

//BRON: https://codepen.io/gabrieleromanato/pen/hIpjF





//var vrouw0 = document.querySelector('#women0');
//
//vrouw.addEventListener('click', function(){
//
//})
