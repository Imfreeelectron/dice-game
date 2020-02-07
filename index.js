
var player1Score = 0,
  player2Score = 0,
  player1Count = 0,
  player2Count = 0;

function die1Outcomes() {


  // Increase the count of player 1 when button clicked by player 1
  player1Count++;
  // Displaying the button click counts
  document.querySelector(".button-click1").innerHTML = player1Count + "/5";


  // If button pressed five times, then disabling it....
  if (player1Count == 5 && player2Count == 5) {
    // document.querySelector(".stopButton1").setAttribute("disabled","");
    document.querySelector(".stopButton1").disabled = true;
    document.querySelector(".stopButton2").disabled = true;
  } else {
    document.querySelector(".stopButton1").disabled = true;
    document.querySelector(".stopButton2").disabled = false;

  }

  // To refreshing dots on face every click
  var classArray = document.querySelectorAll(".DIE1 .face-one, .DIE1 .face-two, .DIE1 .face-three, .DIE1 .face-four, .DIE1 .face-five, .DIE1 .face-six");
  for (var i = 0; i <= 5; i++)
    classArray[i].style.display = "none";


  var result1 = Math.ceil(Math.random() * 6);
  // var faceName1 = "face-" + result1;

  switch (result1) {
    case 1:
      document.querySelector(".DIE1 .face-one").style.display = "block";
      break;

    case 2:
      document.querySelector(".DIE1 .face-two").style.display = "block";
      break;

    case 3:
      document.querySelector(".DIE1 .face-three").style.display = "block";
      break;

    case 4:
      document.querySelector(".DIE1 .face-four").style.display = "block";
      break;

    case 5:
      document.querySelector(".DIE1 .face-five").style.display = "block";
      break;

    case 6:
      document.querySelector(".DIE1 .face-six").style.display = "block";
      break;
    default:
  }

  player1Score = player1Score + result1;
  document.getElementById("score-board1").innerHTML = "score :: " + player1Score;
  // console.log(player1Score);

  if ((player1Count === 5) && (player2Count === 5))
    startGame(player1Score, player2Score);

  return result1;
}

function die2Outcomes() {

  // Increase the count of player 1 when button clicked by player 1
  player2Count++;

  // Displaying the button click counts
  document.querySelector(".button-click2").innerHTML = player2Count + "/5";

  // If button pressed five times, then disabling it....
  if (player2Count == 5 && player1Count == 5) {
    // document.querySelector(".stopButton2").setAttribute("disabled","");
    document.querySelector(".stopButton2").disabled = true;
    document.querySelector(".stopButton1").disabled = true;

  } else {
    document.querySelector(".stopButton2").disabled = true;
    document.querySelector(".stopButton1").disabled = false;

  }

  // To refreshing dots on face every click
  var classArray = document.querySelectorAll(".DIE2 .face-one, .DIE2 .face-two, .DIE2 .face-three, .DIE2 .face-four, .DIE2 .face-five, .DIE2 .face-six");
  for (var i = 0; i <= 5; i++)
    classArray[i].style.display = "none";

  var result2 = Math.ceil(Math.random() * 6);

  switch (result2) {
    case 1:
      document.querySelector(".DIE2 .face-one").style.display = "block";
      break;

    case 2:
      document.querySelector(".DIE2 .face-two").style.display = "block";
      break;

    case 3:
      document.querySelector(".DIE2 .face-three").style.display = "block";
      break;

    case 4:
      document.querySelector(".DIE2 .face-four").style.display = "block";
      break;

    case 5:
      document.querySelector(".DIE2 .face-five").style.display = "block";
      break;

    case 6:
      document.querySelector(".DIE2 .face-six").style.display = "block";
      break;
    default:
  }

  player2Score = player2Score + result2;

  document.getElementById("score-board2").innerHTML = "score :: " + player2Score;
  // console.log(player2Score);

  if ((player1Count === 5) && (player2Count === 5))
    startGame(player1Score, player2Score);

  return result2;
}




function startGame(die1Result, die2Result) {

  // console.log(die1Result);
  // console.log(die2Result);

  if (die1Result > die2Result) {
    document.getElementById('Announcement').innerHTML = "🚩Player 1 Wins.";
    document.querySelector(".flag41").innerHTML = "🏆";
  } else if (die1Result < die2Result) {
    document.getElementById('Announcement').innerHTML = "🚩Player 2 Wins.";
    document.querySelector(".flag42").innerHTML = "🏆";

  } else
    document.getElementById('Announcement').innerHTML = "Match Draw!!!";
}
