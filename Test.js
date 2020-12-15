const hoursEl = document.getElementById("jam");
const minsEl = document.getElementById("menit");
const secondsEl = document.getElementById("detik");

const deadline = "15 Nov 2020";

Date.prototype.addHours = function(h) {
  this.setTime(this.getTime() + (h*60*60*1000));
  return this;
}

function countdown() {
    const d = new Date();
    const hour = d.addHours(2)

    const totalSeconds =  (hour-d)/ 1000;

    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// initial call
countdown();


setInterval(countdown, 1000);

//bendera
function changeClass() {
    var n = document.getElementById('flag').className;
    var a = document.getElementById('a').checked ;
    var b = document.getElementById('b').checked ;
    var c = document.getElementById('c').checked ;
    var d = document.getElementById('d').checked ;
    var e = document.getElementById('e').checked ;
    var m = a || b || c || d || e;
    if (m == true){
    switch (n) {
        case "flag fa fa-flag mr-auto":
           document.getElementById('flag').className = "flag2 fa fa-flag mr-auto";
           document.getElementById('nomor').className = "number-flag btn rounded-circle col-md-2";
           break;
        case "flag2 fa fa-flag mr-auto":
           document.getElementById('flag').className = "flag fa fa-flag mr-auto";
           document.getElementById('nomor').className = "number-fill btn rounded-circle col-md-2";
           break;
           }
           } else {
    switch (n) {
        case "flag fa fa-flag mr-auto":
           document.getElementById('flag').className = "flag2 fa fa-flag mr-auto";
           document.getElementById('nomor').className = "number-flag btn rounded-circle col-md-2";
           break;
        case "flag2 fa fa-flag mr-auto":
           document.getElementById('flag').className = "flag fa fa-flag mr-auto";
           document.getElementById('nomor').className = "number btn rounded-circle col-md-2 focus";
           break;
           }
    }

    }

function numberfill() {
    var n = document.getElementById('nomor').className;
    if (n != "number-flag btn rounded-circle col-md-2"){
    document.getElementById('nomor').className = "number-fill btn rounded-circle col-md-2"
    }
    }

function emptyFill() {
    var n = document.getElementById('nomor').className;
    if ( n != "number-flag btn rounded-circle col-md-2" ){
    document.getElementById('nomor').className = "number btn rounded-circle col-md-2 focus"
    document.getElementById('a').checked = false;
    document.getElementById('b').checked = false;
    document.getElementById('c').checked = false;
    document.getElementById('d').checked = false;
    document.getElementById('e').checked = false;
    }
    else{
    document.getElementById('a').checked = false;
    document.getElementById('b').checked = false;
    document.getElementById('c').checked = false;
    document.getElementById('d').checked = false;
    document.getElementById('e').checked = false;
    }
}

function star1(){
    document.getElementById('star-1').className = "star-blank fa fa-star"
    document.getElementById('star-2').className = "star-blank fa fa-star"
    document.getElementById('star-3').className = "star-blank fa fa-star"
    document.getElementById('star-4').className = "star-blank fa fa-star"
    document.getElementById('star-5').className = "star-blank fa fa-star"
    document.getElementById('star-1').className = "star-rating fa fa-star";
}

function star2(){
    document.getElementById('star-1').className = "star-blank fa fa-star"
    document.getElementById('star-2').className = "star-blank fa fa-star"
    document.getElementById('star-3').className = "star-blank fa fa-star"
    document.getElementById('star-4').className = "star-blank fa fa-star"
    document.getElementById('star-5').className = "star-blank fa fa-star"
    document.getElementById('star-1').className = "star-rating fa fa-star"
    document.getElementById('star-2').className = "star-rating fa fa-star"
}

function star3(){
    document.getElementById('star-1').className = "star-blank fa fa-star"
    document.getElementById('star-2').className = "star-blank fa fa-star"
    document.getElementById('star-3').className = "star-blank fa fa-star"
    document.getElementById('star-4').className = "star-blank fa fa-star"
    document.getElementById('star-5').className = "star-blank fa fa-star"
    document.getElementById('star-1').className = "star-rating fa fa-star"
    document.getElementById('star-2').className = "star-rating fa fa-star"
    document.getElementById('star-3').className = "star-rating fa fa-star"
}

function star4(){
    document.getElementById('star-1').className = "star-blank fa fa-star"
    document.getElementById('star-2').className = "star-blank fa fa-star"
    document.getElementById('star-3').className = "star-blank fa fa-star"
    document.getElementById('star-4').className = "star-blank fa fa-star"
    document.getElementById('star-5').className = "star-blank fa fa-star"
    document.getElementById('star-1').className = "star-rating fa fa-star"
    document.getElementById('star-2').className = "star-rating fa fa-star"
    document.getElementById('star-3').className = "star-rating fa fa-star"
    document.getElementById('star-4').className = "star-rating fa fa-star"
}

function star5(){
    document.getElementById('star-1').className = "star-blank fa fa-star"
    document.getElementById('star-2').className = "star-blank fa fa-star"
    document.getElementById('star-3').className = "star-blank fa fa-star"
    document.getElementById('star-4').className = "star-blank fa fa-star"
    document.getElementById('star-5').className = "star-blank fa fa-star"
    document.getElementById('star-1').className = "star-rating fa fa-star"
    document.getElementById('star-2').className = "star-rating fa fa-star"
    document.getElementById('star-3').className = "star-rating fa fa-star"
    document.getElementById('star-4').className = "star-rating fa fa-star"
    document.getElementById('star-5').className = "star-rating fa fa-star"
}


