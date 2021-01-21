// window.onload = function() {

//     /// --- Login Form --- ///
//     const modal = document.getElementById("modal");
//     const pageData = document.getElementById("pageData");
//     const Btn = document.getElementById("formSubmit");
//     var error_message = document.getElementById("error_message");
//     var text;
//     Btn.addEventListener("click", (e) => {
//         e.preventDefault();
//         var login = "";
//         var pass = "";
//         login += document.getElementById("userid").value;
//         pass += document.getElementById("pwd").value;

//         // URL.....
//         url = "/login/";
//         data = {"id": login, "password": pass};
//         var postData = JSON.stringify(data);
//         alert(postData);
//         alert(url)
//         var xhttp = new XMLHttpRequest();
//         xhttp.open("POST", url, true);
//         xhttp.setRequestHeader("Content-type", "application/json");
//         xhttp.send(postData);
//         xhttp.onreadystatechange = processRequest;
//         xhttp.addEventListener('error', function() {
//             alert( 'Oops! Something went wrong.' );
//         });
//         function processRequest(e) {
//             e.preventDefault();
//             if (xhttp.readyState == 4 && xhttp.status == 200) {
//                 let response = JSON.parse(xhttp.responseText);
//                 if (response.result === "success") {
//                     pageData.style.display="block"
//                     modal.style.display="none";
//                     return true;
//                 }
//                 else {
//                     text = "Wrong Email or Password !";
//                     error_message.innerHTML = text;
//                     console.log('wrong user id or password!');
//                     return false;
//                 }
//             }
//             else{
//                 text = "Your processRequest is Failed !";
//                 error_message.innerHTML = text;
//                 console.log("Your processRequest is Failed !");
//                 return false;
//             }
//         }
//     });

    
//     /// --- Close Button --- ///
//     const close = document.getElementById("close");
//     close.addEventListener("click", function() {
//         window.history.back();
//     });

// }

window.onload = function() {

    /// --- Login Form --- ///
    const modal = document.getElementById("modal");
    const pageData = document.getElementById("pageData");
    const Btn = document.getElementById("formSubmit");
    var error_message = document.getElementById("error_message");
    var text;
    Btn.addEventListener("click", (e) => {
        e.preventDefault();
        var userid = document.getElementById("userid").value;
        var password = document.getElementById("pwd").value;
        var login = "";
        var pass = "";
        login += userid;
        pass += password;

        if (userid.length === 0) {
            text = "Please Enter Valid User Id !";
            error_message.innerHTML = text;
        }
        else if (password.length === 0) {
            text = "Please Enter Valid Password !";
            error_message.innerHTML = text;
        }

        else if (login === "admin" && pass === "covicheck@123") {
            pageData.style.display="block"
            modal.style.display="none";
            return true;
            
        }
        else {
            text = "Wrong Email or Password !";
            error_message.innerHTML = text;
            console.log('wrong user id or password!');
            return false;
        }
    });

    /// --- Close Button --- ///
    const close = document.getElementById("close");
    close.addEventListener("click", function() {
        window.history.back();
    });

}

