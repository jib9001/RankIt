var score = document.getElementById('score');
var databaseScore = 0;
    //Call database for score
var tempScore = 0;
var boolVote = null;

score.innerHTML = tempScore;

var upVoteButton = document.getElementById("upVoteButton");
var downVoteButton = document.getElementById("downVoteButton");

upVoteButton.addEventListener("click", upVote);
downVoteButton.addEventListener("click", downVote);

function upVote() {
  /*
  if (boolVote == null){
    boolVote = true;
  }
  if (boolVote == false){
    boolVote = null
  }
  */
  var domain = getDomain();
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET","http://phenom.servegame.com/RankIt/UpVote.php?domain=" + window.location.hostname,true);
  xhttp.onreadystatechange=function(){
    score.innerHTML = xhttp.responseText;
  };
  xhttp.send();


}

function downVote() {
    if (boolVote == null){
      boolVote = false;
    }
    if (boolVote == true){
      boolVote = null;
    }
    score.innerHTML = boolToInt(boolVote);
}

function boolToInt(booleanVar) {
  switch (booleanVar) {
    case true:
      tempScore = 1;
      break;
    case null:
      tempScore = 0;
      break;
    case false:
      tempScore = -1;
      break;
  }
      return tempScore;
}

function getScore(){
  var domain = getDomain();
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET","http://phenom.servegame.com/RankIt/GetScore.php?domain=" + window.location.hostname,true);
  xhttp.onreadystatechange=function(){
    console.log(xhttp.responseText);
  };
  xhttp.send();
}

function getDomain(){
  return window.location.hostname;
}

window.onload = function(){
  alert("loaded");
  getScore();
}
