var URL_COMMON = "";        //http://192.168.0.103:8888

// ----- Factory Settings Post-Request -------- //

window.onload = function(){
    var refButton = document.getElementById("buttonFactorySubmit");
    refButton.onclick = function() {
        var temp_Unit = "";
        var minTemperature ="";
        var maxTemperature = "";
        var proximityMin ="";
        var proximityMax = "";
        var device_Type ="";
        temp_Unit += document.getElementById("unit").value;
        minTemperature += document.getElementById("tempMin").value;
        maxTemperature += document.getElementById("tempMax").value;
        proximityMin += document.getElementById("minProx").value;
        proximityMax += document.getElementById("maxProx").value;
        device_Type += document.getElementById("device_Type").value;
    
        url = URL_COMMON + "/factory_settings.html";
        data =  {   "temp_unit": temp_Unit, "min_temp": minTemperature, "max_temp": maxTemperature, 
                    "min_prox": proximityMin, "device_type": device_Type, "max_prox": proximityMax 
                };

        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", url, true);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.send(JSON.stringify(data));
        xhttp.onreadystatechange = processRequest;
        // Define what happens on successful data submission
        xhttp.addEventListener( 'load', function( event ) 
        {
            alert( 'Yeah! Factory data set successfully.' );
        });

        // Define what happens in case of error
        xhttp.addEventListener(' error', function( event ) {
        alert( 'Oops! Something went wrong.' );
        } );

        function processRequest(e) {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                let response = JSON.parse(xhttp.responseText);
                document.getElementById("factorySettingsH2Id").innerHTML = response.result;
            }
            else{
               // alert("Error: Response\n");
                document.getElementById("factorySettingsH2Id").innerHTML = response.result;
            }
        }
     
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
