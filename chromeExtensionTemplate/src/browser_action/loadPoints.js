chrome.tabs.getSelected(null, function (tab) {
var url = new URL(tab.url);
var domain = url.hostname;
var xhttp = new XMLHttpRequest();
xhttp.open("GET","http://phenom.servegame.com/RankIt/GetScore.php?domain=" + domain,true);
xhttp.onreadystatechange=function(){
document.getElementById("score").innerHTML = xhttp.responseText;
};
xhttp.send();
})
