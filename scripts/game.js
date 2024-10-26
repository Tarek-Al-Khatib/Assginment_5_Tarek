//chatgpt
window.onload = () => {
  //
  var start = document.getElementById("start");
  var end = document.getElementById("end");
  var lost = false;
  var boundaries = document.querySelectorAll(".boundary");
  var game = document.getElementById("game");
  var started = false;
  var ended = true;
  var statusOfTheGame = document.getElementById("status");

  //https://stackoverflow.com/questions/8318591/javascript-addeventlistener-using-to-create-a-mouseover-effect
  //https://www.w3schools.com/jsref/event_onmouseover.asp
  start.addEventListener("mouseover", function () {
    started = true;
    ended = false;
    lost = false;
    statusOfTheGame.innerHTML = "Started ! Let's win for Taha !!!";
  });

  end.addEventListener("mouseover", function () {
    if (!lost) {
      ended = true;
      started = false;
      statusOfTheGame.innerHTML = "You win !";
    }
  });

  boundaries.forEach((boundary) => {
    boundary.addEventListener("mouseover", function () {
      if (started) {
        ended = true;
        lost = true;
        statusOfTheGame.innerHTML = "You lost !";
      }
    });
  });

  game.addEventListener("mouseleave", function () {
    if (started) {
      ended = true;
      lost = true;
      statusOfTheGame.innerHTML = "CHEATERRRRRR";
    }
  });
};
