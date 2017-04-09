var score = document.getElementById('score');
var databaseScore;
    //Call database for score
var tempScore = 0;
var boolVote = null;

getScore();

//score.innerHTML = tempScore;

var upVoteImg= document.getElementById("upVoteImg");
var downVoteImg = document.getElementById("downVoteImg");

upVoteImg.addEventListener("click", upVote);
downVoteImg.addEventListener("click", downVote);


function upVote() {

  if (boolVote == null){
    boolVote = true;
  }
  if (boolVote == false){
    boolVote = null
  }
    score.innerHTML = boolToInt(boolVote);

  //getScore();
/*
  chrome.tabs.getSelected(null, function (tab) {
  var url = new URL(tab.url);
  var domain = url.hostname;
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET","http://phenom.servegame.com/RankIt/UpVote.php?domain=" + domain,true);
  xhttp.onreadystatechange=function(){
    score.innerHTML = xhttp.responseText;
  };
  xhttp.send();
})
*/
}

function downVote() {

    if (boolVote == null){
      boolVote = false;
    }
    if (boolVote == true){
      boolVote = null;
    }
    score.innerHTML = boolToInt(boolVote);


    //getScore();
/*
    chrome.tabs.getSelected(null, function (tab) {
    var url = new URL(tab.url);
    var domain = url.hostname;
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET","http://phenom.servegame.com/RankIt/DownVote.php?domain=" + domain,true);
    xhttp.onreadystatechange=function(){
      score.innerHTML = xhttp.responseText;
    };
    xhttp.send();
  })
  */
}

chrome.tabs.getSelected(null, function (tab) {
  var url = new URL(tab.url)
  var domain = url.hostname
  return domain;
});

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
      return parseInt(databaseScore,10) + tempScore;
}

function getScore(){
  chrome.tabs.getSelected(null, function (tab) {
  var url = new URL(tab.url);
  var domain = url.hostname;
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET","http://phenom.servegame.com/RankIt/GetScore.php?domain=" + domain,true);
  xhttp.onreadystatechange=function(){
  databaseScore = xhttp.responseText;
  };
  xhttp.send();
})
}

function getDomain(){
  return window.location.hostname;
}

window.onload = function(){
  getScore();
}
