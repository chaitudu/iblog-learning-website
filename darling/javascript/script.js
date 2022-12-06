
/*window.print("all courses")*/
function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "chaitu" && password == "12212610") {
        alert("login succesfully");
        return false;
    }
    {
        alert("loginfailed");
    }
}
