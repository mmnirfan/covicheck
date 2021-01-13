var URL_COMMON = "";    //http://192.168.0.103:8888


/// ----- GET Object-Temperature ----- ///
function fetchObjectTemp(){
    document.getElementById("object_temp_button").disabled = true;
    url = URL_COMMON + "/object_temperature/";
    var objectTemperature = document.getElementById('object_temp_input');
    fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data.object_temperature);
        objectTemperature.value = "";
        objectTemperature.value = data.object_temperature;
        document.getElementById("object_temp_button").disabled = false;
    })
    .catch(function (err) {
        console.log('error: ' + err);
    })
    document.getElementById("object_temp_button").disabled = false;
}

/// ---- End..... ------//

// ------ GET Current Config ------- //
function getData(){
    url = URL_COMMON + "/current_config/";
	console.log(url);
    fetch(url).then( response => response.json())
    .then( data => {
        console.log(data);
        appendData(data);
    })
    .catch( err => {
        console.log("error: ", err);
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
/// ---- End ------//