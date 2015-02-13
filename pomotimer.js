
var displaytime;
var pausetime = 5;
var pomotime = 25;
var timer = false;
var title = document.getElementsByTagName("title");


window.onload = init;
function init() {
  var clock = document.getElementById("clock");
  var startbutton = document.getElementById("workbutton");
  var pausebutton = document.getElementById("pausebutton");
  var restart = document.getElementById("restart");
  var ticking = document.getElementById('ticking');
  startbutton.onclick = pomoTimer;
  pausebutton.onclick = pauseTimer;
};


function reduce() {
  displaytime-= 1;
  var timestring = displaytime + " min.";
  title[0].innerHTML= timestring + " Working Timer";
  clock.innerHTML= timestring;
  if(displaytime == 0) {
    clearInterval(t);
    timer = false;
    var sound = document.getElementById('sound');
    sound.volume = 0.3;
    sound.play();
    ticking.pause();
    restart.innerHTML ="< Press any key to return to the start screen >";
    //reload a fresh starting page
    addEventListener("keydown", function() { window.location.reload(); });
    addEventListener("touchstart", function() { window.location.reload(); });
  };
};


function counter() {
  t = setInterval(reduce,60000);  // 60,000 millisecs == 1 minute
};

function concentrate() {
  var header = document.getElementsByTagName('h1');
  header[0].setAttribute("style", "visibility: hidden");
  var info = document.getElementById('info');
  info.setAttribute("style", "visibility: hidden");
  // hit esc-key to return to start screen
  addEventListener("keydown", function() {
    if(event.keyCode == 27) {
    window.location.reload(); }
  });
  addEventListener("touchstart", function() { window.location.reload(); });
};

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
  ticker();
};

function ticker() {
  tickerControls();
  ticking.volume = 0.005;
  ticking.loop=true;
  ticking.preload="auto";
  ticking.play();
};

function tickerControls() {
  //mute: m = 109, M = 77
  addEventListener("keydown", function() {
    if(event.keyCode == 109 || event.keyCode == 77) {
    ticking.pause(); }
  });
  //ticking: t = 116, T = 84
  addEventListener("keydown", function() {
    if(event.keyCode == 116 || event.keyCode == 84) {
      ticking.play(); }
  });
}
