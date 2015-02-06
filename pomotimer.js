var displaytime;
var pausetime = 5;
var pomotime = 25;
var timer = false;
var title = document.getElementsByTagName("title");


window.onload = init;
function init() {
  var clock = document.getElementById("clock");
  var startbutton = document.getElementById("startTimer");
  var pausebutton = document.getElementById("pauseTimer");
  var restart = document.getElementById("restart");
  startbutton.onclick = pomoTimer;
  pausebutton.onclick = pauseTimer;
};

function reduce() {
  displaytime-= 1;
  var timestring = displaytime + " min.";
  title[0].innerHTML="Working Timer " + timestring;
  clock.innerHTML= timestring;
  if(displaytime == 0) {
    clearInterval(t);
    timer = false;
    var sound = document.getElementById('sound');
    sound.volume = 0.3;
    sound.play();
    restart.innerHTML ="< Press any key to return to the start screen >";
    //reload a fresh starting page
    addEventListener("keydown", function() { window.location.reload(); });
    addEventListener("touchstart", function() { window.location.reload(); });
  };
};

/*function restarts() {
  if (onkeydown == true) {
  window.location.reload();
}
};*/

function counter() {
  t = setInterval(reduce,60000);  // 60,000 millisecs == 1 minute
};

function concentrate() {
  var header = document.getElementsByTagName('h1');
  header[0].setAttribute("style", "visibility: hidden");
  var info = document.getElementById('info');
  info.setAttribute("style", "visibility: hidden");
}

function pauseTimer() {
  if(timer == true) {
    clearInterval(t)
  };
  timer = true;
  concentrate();
  document.body.style.backgroundImage = "url('Media/qkWQIqfGTgibEwt76i6w_photo.jpg')";
  document.body.style.backgroundColor = "#000000";
  clock.setAttribute("style", "color: white");
  restart.setAttribute("style", "color: white");
  displaytime = pausetime;
  clock.innerHTML=displaytime + " min.";
  counter();
};

function pomoTimer() {
  if(timer == true) {
    clearInterval(t)
  };
  timer = true;
  concentrate();
  document.body.style.backgroundImage = "url('Media/D9xlw7UxTBqQw5sLf8cJ_reef insp-72.jpg')";
  document.body.style.backgroundColor = "#2E2E2E";
  displaytime = pomotime;
  clock.innerHTML=displaytime + " min.";
  counter();
}
