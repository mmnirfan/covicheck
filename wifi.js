var URL_COMMON = "";
// ------ Login script for Update ----- ///
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

// ------ Login script for Factory settings ----- ///
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

// ---- WiFi Settings- Script --------- //

window.onload = function(){
    var refButton = document.getElementById("buttonWifiSubmit");

    refButton.onclick = function() {
        var ssID = "";
        var pass = "";
        ssID += document.getElementById("ssid").value;
        pass += document.getElementById("newPass").value;
        url = URL_COMMON + "/wifi_setting.html";
        data = {"ssid": ssID, "password": pass};
    
        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", url, true);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.send(JSON.stringify(data));
        xhttp.onreadystatechange = processRequest;
        // Define what happens on successful data submission
        xhttp.addEventListener( 'load', function( event ) 
        {
            alert( 'Yeah! New SSID and Password set successfully.' );
        });

        // Define what happens in case of error
        xhttp.addEventListener(' error', function( event ) {
        alert( 'Oops! Something went wrong.' );
        } );

        function processRequest(e) {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                let response = JSON.parse(xhttp.responseText);
                document.getElementById("WifiSettingsHeaderID").innerHTML = response.result;
                alert( 'Set SSID and Password Successfully.' );
            }
            else{
               // alert("Error: Response\n");
                document.getElementById("WifiSettingsHeaderID").innerHTML = response.result;
            }
        }
    }
};


// ------ Get Current Config -----///

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
    var password = document.getElementById('password');
    var ssid = document.getElementById('ssid');
    password.value += data.password;
    ssid.value += data.ssid;

    $(password).append(password.value);
    $(ssid).append(ssid.value);
}
appendData();