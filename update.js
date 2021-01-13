///  ----- Upload -----  ///
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
/// ------ End -------- ///