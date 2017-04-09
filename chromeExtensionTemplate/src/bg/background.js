// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });

function getScore(){
  chrome.tabs.getSelected(null, function (tab) {
  var url = new URL(tab.url);
  var domain = url.hostname;
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET","http://phenom.servegame.com/RankIt/GetScore.php?domain=" + domain,true);
  xhttp.onreadystatechange=function(){
  console.log(xhttp.responseText);
  var score=xhttp.responseText;
  badgeText(score);
  };
  xhttp.send();
})
}

function badgeText(scoreStuff){
var points = scoreStuff;
console.log(points);
points = points.toString();//changing points to string
var pointString = points;//initalzing string pointString
UpdateBadge(pointString);


if(points.length > 9){//if number is really big, default 999m+
  pointString = "999m+";
  console.log("this is broken");
}//end if

else{//if its less than 9 characters find printout


switch (points.length){//switch statement

  default:
  pointString = points;
    break;

  case 5:
  pointString = points.substring(0, 2) + "." + points.substring(2, 3) + "k";
    break;

  case 6:
  pointString = points.substring(0, 3) + "k";
    break;

  case 7:
  pointString = points.substring(0, 1) + "." + points.substring(1, 3) + "m";
    break;

  case 8:
  pointString = points.substring(0, 2) + "." + points.substring(2, 3) + "m";
    break;

    UpdateBadge(pointString);

}//end switch
}//end else

}
window.onload = function() {
  getScore();
  ChangeColor();
}//end window.onload


function UpdateBadge(pointString){
  chrome.browserAction.setBadgeText({text: pointString.toString() });
}//end UpdateBadge

function ChangeColor(){
  chrome.browserAction.setBadgeBackgroundColor({color: '#008D23'});
}
