var score = document.getElementById('score');
var databaseScore;
    //Call database for score
var tempScore = 0;
var boolVote = null;

var upVoted = false;
var downVoted = false;

getScore();

//score.innerHTML = tempScore;

var upVoteImg= document.getElementById("upVoteImg");
var downVoteImg = document.getElementById("downVoteImg");

upVoteImg.addEventListener("click", upVote);
downVoteImg.addEventListener("click", downVote);


function upVote() {
if(!upVoted && !downVoted)
{
  upVoted = true;
  function dbUpVote();
}
else if(!upVoted && downVoted)
{
  downVoted = false;
  function dbUpVote();
}

}

function dbUpVote()
{
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
}

function downVote() {

  if(!upVoted && !downVoted)
  {
    downVoted = true;
    function dbUpVote();
  }
  else if(upVoted && !downVoted)
  {
    upVoted = false;
    function dbUpVote();
  }

}

function dbDownVote()
{
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
}
      //return parseInt(databaseScore,10) + tempScore;
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
