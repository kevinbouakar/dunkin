function passwordMinLength()
{
    var pwd = document.getElementById("passwordBox").value;
        if ( pwd.length < 6)
        {
            document.getElementById("errorbox").innerHTML= "<h1>Password must not be under 6 letters!</h1>";
            alert("Password must not contain your name!");
            // let lastName = prompt("What is your last name?");
            return false;
        }
}
