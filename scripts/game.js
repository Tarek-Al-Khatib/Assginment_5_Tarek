//chatgpt
window.onload = () => {
  //
  var start = document.getElementById("start");
  var end = document.getElementById("end");
  var lost = false;
  var boundaries = document.querySelectorAll(".boundary");
  var game = document.getElementById("game");
  var started = false;
  var statusOfTheGame = document.getElementById("status");

  //https://stackoverflow.com/questions/8318591/javascript-addeventlistener-using-to-create-a-mouseover-effect
  //https://www.w3schools.com/jsref/event_onmouseover.asp
  start.addEventListener("mouseover", function () {
    started = true;
    lost = false;
    statusOfTheGame.innerHTML = "Started ! Let's win for Taha !!!";
  });

  end.addEventListener("mouseover", function () {
    if (started && !lost) {
      started = false;
      statusOfTheGame.innerHTML = "You win !";
    }
  });

  boundaries.forEach((boundary) => {
    boundary.addEventListener("mouseover", function () {
      if (started && !lost) {
        lost = true;
        statusOfTheGame.innerHTML = "You lost !";
      }
    });
  });

  //https://www.w3schools.com/jsref/event_onmouseleave.asp
  //https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseleave_event
  game.addEventListener("mouseleave", function () {
    if (started && !lost) {
      lost = true;
      statusOfTheGame.innerHTML = "CHEATERRRRRR";
    }
  });
};
