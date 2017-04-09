// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });

i = "brad";

//example of using a message handler from the inject scripts

window.onload = function() {
  UpdateBadge();
}


function UpdateBadge(){
  //chrome.browserAction.setBadgeText({text: '125456789'.substring(0,4)});
  chrome.browserAction.setBadgeText({text: i.toString() });
   //chrome.browserAction.setBadgeBackGroundColor({color:[255, 0, 0, 255] });
 }
