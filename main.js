var URL_COMMON = "";    //http://192.168.0.103:8888
//import {URL_COMMON} from './url.js';
// ---- Login for Update ------- ////

function checkLoginPass() {
    var login = document.getElementById("userId").value;
    var pass = document.getElementById("password").value;
    if (login === "admin" && pass === "covicheck@123") {
        //window.open("index.html")
        return true;
    }
    else {
        alert("ID or Password !");
        console.log('wrong user id or password!');
        return false;
    }
};

// ----- Login Script for Factory Settings -------- //

function checkLoginPassword() {
    var login = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;
    if (login === "admin" && pass === "covicheck@123") {
        //window.open("index.html")
        return true;
    }
    else {
        alert("Wrong Email or Password !");
        console.log('wrong user id or password!');
        return false;
    }
};

function getData(){
    url = URL_COMMON + "/current_config/";
	console.log(url);
    fetch(url).then( response => response.json())
    .then( data => {
        console.log(data);
        appendData(data);
    })
    .catch( err => {
        console.log("error: " + err);
    });

}

getData();

function appendData(data) {
    var macId = document.getElementById('macId');
    var ipAddress = document.getElementById('ipAddress');
    var ssid = document.getElementById('ssid');
    var tempUnit = document.getElementById('tempUnit');
    var deviceType = document.getElementById('deviceType');
    macId.value += data.mac_id;
    ipAddress.value += data.ip_address;
    ssid.value += data.ssid;
    tempUnit.value += data.temp_unit;
    deviceType.value += data.device_type;

    $(macId).append(macId.value);
    $(ipAddress).append(ipAddress.value);
    $(ssid).append(ssid.value);
    $(tempUnit).append(tempUnit.value);
    $(deviceType).append(deviceType.value); 
}
appendData();