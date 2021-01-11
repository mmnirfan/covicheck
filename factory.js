var URL_COMMON = "";        //http://192.168.0.103:8888

// ----- Factory Settings Post-Request -------- //

function setpath() {
    var default_path = document.getElementById("newfile").files[0].name;
    document.getElementById("filepath").value = default_path;
}
function upload() {
    var filePath = document.getElementById("filepath").value;
    var upload_path = "/upload/" + filePath;
    var fileInput = document.getElementById("newfile").files;
    var Extension = filePath.substring(filePath.lastIndexOf('.') + 1).toLowerCase(); 

    /* Max size of an individual file. Make sure this
     * value is same as that set in file_server.c */
    var MAX_FILE_SIZE = 200*1024;
    var MAX_FILE_SIZE_STR = "200KB";

    if (fileInput.length == 0) {
        alert("No file selected!");
    } else if (filePath.length == 0) {
        alert("File path on server is not set!");
    } else if (filePath.indexOf(' ') >= 0) {
        alert("File path on server cannot have spaces!");
    } else if (filePath[filePath.length-1] == '/') {
        alert("File name not specified after path!");
    } else if (fileInput[0].size > 1024*1024) {
        alert("File size must be less than 200KB!");
    } else if (Extension != "bin") {
        alert("File extension must be .bin!");
    } else {
        document.getElementById("newfile").disabled = true;
        document.getElementById("filepath").disabled = true;
        document.getElementById("upload").disabled = true;

        var file = fileInput[0];
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (xhttp.readyState == 4) {
                if (xhttp.status == 200) {
                    document.open();
                    document.write(xhttp.responseText);
                    document.close();
                } else if (xhttp.status == 0) {
                    alert("Server closed the connection abruptly!");
                    location.reload()
                } else {
                    alert(xhttp.status + " Error!\n" + xhttp.responseText);
                    location.reload()
                }
            }
        };
        xhttp.open("POST", upload_path, true);
        xhttp.send(file);
    }
}

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



// ------  Get Current Config ------ //////
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

function getProximityMin(){
    url = "/object_proximity/";
    var proxMin = document.getElementById('minProx');
    fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data.object_proximity);
        proxMin.value = "";
        proxMin.value = data.object_proximity;
    })
    .catch(function (err) {
        console.log('error: ' + err);
    })

}
function getProximityMax(){
    url = "/object_proximity/";
    var proxMax = document.getElementById('maxProx');
    fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data.object_proximity);
        proxMax.value = "";
        proxMax.value = data.object_proximity;
    })
    .catch(function (err) {
        console.log('error: ' + err);
    })

}
