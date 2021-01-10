//import URL_COMMON from './url';
var URL_COMMON = "";        //http://192.168.0.103:8888
/// ---- Update Factory Settings --------/////
// var unit = document.getElementById("unit").value;
// var minTemp = document.getElementById("minTemp").value;
// var maxTemp = document.getElementById("maxTemp").value;
// var proxMin = document.getElementById("proxMin").value;
// var proxMax = document.getElementById("proxMax").value;
// var deviceType = document.getElementById("deviceType").value;


//var URL_COMMON = "" 
window.onload = function(){
    var refButton = document.getElementById("buttonFactorySubmit");
    var temp_Unit = "";
    var minTemperature ="";
    var maxTemperature = "";
    var proximityMin ="";
    var proximityMax = "";
    var device_Type ="";

    refButton.onclick = async function() {
        temp_Unit += document.getElementById("unit").value;
        minTemperature += document.getElementById("tempMin").value;
        maxTemperature += document.getElementById("tempMax").value;
        proximityMin += document.getElementById("minProx").value;
        proximityMax += document.getElementById("maxProx").value;
        device_Type += document.getElementById("device_Type").value;
    
        url = URL_COMMON + "/factory_settings.html";
        data = {"temp_unit": temp_Unit, "min_temp": minTemperature, "max_temp": maxTemperature, "min_prox": proximityMin, "device_type": device_Type, "max_prox": proximityMax};
        params = {
            method:'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(data)
        }
        alert(url);
        await fetch(url, {mode:"no-cors"}, params).then( response => response.json())
        .then( data => {
            const postResponse = data;
            console.log(postResponse);
            alert("Configuration Set Successfully. Rebooting Device");
        })
        .catch( err => {
            alert('error: ' + err);
            console.log('error: ' + err);
        });
    }
};

// ----- Login Script for Update -------- //

function checkLoginPass() {
    var login = document.getElementById("userId").value;
    var pass = document.getElementById("password").value;
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


// --- validation End ---- ////

function getData(){
    url = URL_COMMON + "/current_config/";
    fetch(url).then( response => response.json())
    .then( data => {
        console.log(data);
        appendData(data);
    })
    .catch( err => {
        console.log('error: ' + err);
    });

}

getData();

function appendData(data) {
    var minTemp = document.getElementById('minTemp');
    var maxTemp = document.getElementById('maxTemp');
    var proxMin = document.getElementById('proxMin');
    var proxMax = document.getElementById('proxMax');
    var tempUnit = document.getElementById('tempUnit');
    var deviceType = document.getElementById('deviceType');
    minTemp.value += data.min_temp;
    maxTemp.value += data.max_temp;
    proxMin.value += data.min_prox;
    proxMax.value += data.max_prox;
    tempUnit.value += data.temp_unit;
    deviceType.value += data.device_type;

    $(minTemp).append(minTemp.value);
    $(maxTemp).append(maxTemp.value);
    $(proxMin).append(proxMin.value);
    $(proxMax).append(proxMax.value);
    $(tempUnit).append(tempUnit.value); 
    $(deviceType).append(deviceType.value); 
}
appendData();


// function appendData(data) {
//     var tableData = document.getElementById('table-body');
//     var htmlstring = "<tr><td>" + data.min_temp + "</td><td>" + data.max_temp +
//                      "</td><td>" + data.min_prox + "</td><td>" + data.max_prox + 
//                      "</td><td>" + data.temp_unit + "</td><td>" + data.device_type + "</td></tr>";
//     $(tableData).append(htmlstring); 
// }
// appendData();

// var proximity = ""

// function getProx(){
//     url = "https://api.github.com/users";
//     fetch(url).then((response)=>{
//         return response.json();
//     }).then((data)=>{
//         console.log(data);
//         proximity += data[0]
//     })
//     .catch(function (err) {
//         console.log('error: ' + err);
//     })

// }
