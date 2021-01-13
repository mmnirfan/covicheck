// ----- Login Script for Update -------- //
function checkLoginPass() {
    var login = "";
    var pass = "";
    login += document.getElementById("userid").value;
    pass += document.getElementById("pwd").value;
    // URL.....
    url = "/login/";
    data = {"id": login, "password": pass};
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", url, true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(data));
    xhttp.onreadystatechange = processRequest;
    xhttp.addEventListener('error', function() {
        alert( 'Oops! Something went wrong.' );
    });
    function processRequest(e) {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            let response = JSON.parse(xhttp.responseText);
            document.getElementById("WifiSettingsHeaderID").innerHTML = response.result;
            alert( 'Set SSID and Password Successfully.' );
            if (response.result === "success") {
                return true;
            }
            else if (response.result === "FAIL") {
                alert("Wrong UserId or Password !");
                console.log('wrong user id or password!');
                return false;
            }
        }
        else{
            alert("Your processRequest is Failed !");
            console.log("Your processRequest is Failed !");
        }
    }
};
/// ------ End ------- ///

// ----- Login Script for Factory Settings -------- //

function checkLoginPassword() {
    var login = "";
    var pass = "";
    login = document.getElementById("user").value;
    pass = document.getElementById("pass").value;
    url = "/login/";
    data = {"id": login, "password": pass};
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", url, true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(data));
    xhttp.onreadystatechange = processRequest;
    xhttp.addEventListener('error', function() {
        alert( 'Oops! Something went wrong.' );
    });
    function processRequest(e) {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            let response = JSON.parse(xhttp.responseText);
            document.getElementById("WifiSettingsHeaderID").innerHTML = response.result;
            alert( 'Set SSID and Password Successfully.' );
            if (response.result === "success") {
                return true;
            }
            else if (response.result === "fail") {
                alert("Wrong UserId or Password !");
                console.log('wrong user id or password!');
                return false;
            }
        }
        else{
            alert("Your processRequest is Failed !");
            console.log("Your processRequest is Failed !");
        }
    }
};
/// ------ End ------- ///