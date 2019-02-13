"use strict";

var btnGetLoginId = document.getElementById("btnGetLogin");
var divScreenId = document.getElementById("screen");

function getLoginHtml(){
    var xhr = new XMLHttpRequest();
    try{
        xhr.open("GET", "html/login.html");
        xhr.responseType = "text";
        xhr.send();
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                divScreenId.innerHTML = xhr.response;//xhr.getResponseHeader("Content-length");
                var newScript = document.createElement("script");
                newScript.src = "js/login.js";
                divScreenId.appendChild(newScript);
            }
        }
    }catch(e) {
        console.log(e);
        return true;
    }
}
function listener(){
    console.log(window.location.href);
    // if(window.location.href)
}
btnGetLoginId.addEventListener("click",getLoginHtml);
window.addEventListener('popstate', listener);
