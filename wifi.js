var URL_COMMON = "";


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
        /* // Define what happens on successful data submission
        xhttp.addEventListener( 'load', function( event ) 
        {
            alert( 'Yeah! New SSID and Password set successfully.' );
        });
         */
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
    var newPass = document.getElementById('newPass');
    var ssid = document.getElementById('ssid');
    var ssid_below = document.getElementById('ssid_below');
    
    password.value += data.password;
    newPass.value += data.password;
    ssid.value += data.ssid;
    ssid_below.value += data.ssid;

    $(password).append(password.value);
    $(newPass).append(password.value);
    $(ssid).append(ssid.value);
    $(ssid_below).append(ssid.value);
}
appendData();


/// ---- Device Reboot ------ ///
function deviceReboot(){
    url = URL_COMMON + "/reboot/";

    var confirming = confirm("Do you want to Reboot Device ?");
    if (confirming == true) {
        
        fetch(url).then( response => response.json())
        .then( data => {
            alert('Your Device is Rebooting....');
            window.open('/');
        })
        .catch( err => {
            console.log("error: ", err);
        });

        
    } 
    else if (confirming == false){
        return false;
    }

}
