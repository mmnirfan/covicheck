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

window.onload = function(){
    var refButton = document.getElementById("buttonWifiSubmit");

    refButton.onclick = async function() {
        var ssID = document.getElementById("ssid").value;
        var pass = document.getElementById("newPass").value;
    
        url = URL_COMMON + "/wifi_setting.html";
        data = {"ssid": ssID, "password": pass}
        params = {
            method:'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(data)
        }
        await fetch(url, {mode: "no-cors"}, params).then( response => response.json())
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

// async function postsData() {
//     url = "https://jsonplaceholder.typicode.com/posts";
//     data = {"userId": 1121, "title": "sunt aut c facere", "body": "quia cc et"};
//     params = {
//         method: 'post',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     }
//     await fetch(url, params).then(response => {
//       return response.json();
//     }).then( data  => {
//         const postResponse = data;
//         console.log(postResponse);
//     }).catch(err => {
//         console.log(err);
//     });
// }
// postsData();