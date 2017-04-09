// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });

var points = 8767543;//test number
points = points.toString();//changing points to string
var pointString;//initalzing string pointString

if(points.length > 9){//if number is really big, default 999m+
  pointString = "999m+";
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

}//end switch
}//end else


window.onload = function() {
  UpdateBadge();
}//end window.onload


function UpdateBadge(){
  chrome.browserAction.setBadgeText({text: pointString.toString() });
}//end UpdateBadge
