"use strict";

var userId = document.getElementById("user");
var passwordId = document.getElementById("password");
var userFormId = document.getElementById('user-form');


function submitFormValues(e){
    e.preventDefault();
    const user = userId.value;
    const password = passwordId.value;
    let data = JSON.stringify({'username':user,'password':password});
    var url = `https://splitwise-3e72.restdb.io/rest/userinfo?q=${data}`;
    
    console.log(data);
    console.log(url);

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;

    xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
        let userInfo=JSON.parse(this.responseText);
        validate(userInfo);
    }
    });

    xhr.open("GET", url);
    xhr.setRequestHeader("content-type", "application/json");
    xhr.setRequestHeader("x-apikey", "5c3591fa66292476821c9dfd");
    xhr.setRequestHeader("cache-control", "no-cache");

    xhr.send(data);
}

userFormId.addEventListener('submit',submitFormValues);