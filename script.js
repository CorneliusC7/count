// Set the date we're counting down to
var countDownDate = new Date("May 24, 2022 00:06:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var thirtyday = (1000 * 60 * 60 * 24) * 30
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  var percent = 100 - (100 * (distance / thirtyday))
  document.getElementById('idk').innerHTML = (percent.toString().slice(0,5)+"%")
  document.getElementById('idk').style.width = (percent)+"%"
  document.getElementById('idk').setAttribute("aria-valuenow", parseFloat(percent))
  if (percent <= 10 & percent > 0){
    document.getElementById('idk').className = "progress-bar progress-bar-striped";
  }else if(percent > 10 & percent <= 25){
    document.getElementById('idk').className = "progress-bar progress-bar-striped bg-info";
  }else if(percent > 25 & percent <= 50){
    document.getElementById('idk').className = "progress-bar progress-bar-striped bg-success";
  }else if(percent > 50 & percent <= 75){
    document.getElementById('idk').className = "progress-bar progress-bar-striped bg-warning";
  }else if(percent > 75 & percent <= 100){
    document.getElementById('idk').className = "progress-bar progress-bar-striped bg-danger";
  }
  

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "COUNTDOWN FINISHED";
  }
}, 20);