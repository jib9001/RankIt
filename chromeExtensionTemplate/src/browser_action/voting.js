var score = document.getElementById('score');
var databaseScore;
    //Call database for score
    var upVoted = false;
    var downVoted = false;

getScore();

//score.innerHTML = tempScore;

var upVoteImg= document.getElementById("upVoteImg");
var downVoteImg = document.getElementById("downVoteImg");
var houseImg = document.getElementById("HouseIcon");


upVoteImg.addEventListener("click", upVote);
downVoteImg.addEventListener("click", downVote);
houseImg.addEventListener("click", housePress);

function housePress(){
  window.open('http://www.google,com/', '_blank');
}

function upVote() {
if(!upVoted && !downVoted)
{
  upVoted = true;
  document.getElementById("upVoteImg").src="upVoteGreen.png";
  dbUpVote();
}
else if(!upVoted && downVoted)
{
  downVoted = false;
  document.getElementById("upVoteImg").src="upvote.png";
  document.getElementById("downVoteImg").src="downvote.png";
  dbUpVote();
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
});
}

function downVote() {

  if(!upVoted && !downVoted)
  {
    downVoted = true;
    document.getElementById("downVoteImg").src="downVoteRed.png";
    dbDownVote();
  }
  else if(upVoted && !downVoted)
  {
    upVoted = false;
    document.getElementById("upVoteImg").src="upvote.png";
    document.getElementById("downVoteImg").src="downvote.png";
    dbDownVote();
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

chrome.tabs.getSelected(null, function (tab) {
  var url = new URL(tab.url)
  var domain = url.hostname
  return domain;
});


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
