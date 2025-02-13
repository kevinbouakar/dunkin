function passwordMinLength()
{
    var pwd = document.getElementById("passwordBox").value;
    document.getElementById("errorbox").innerHTML = `Password must be longer than 6 characters`;
    if ( pwd.length <= 6 && pwd.length > 0)
    {
        document.getElementById("errorbox").innerHTML= `Password must not be under 6 letters!`;
        // let lastName = prompt("What is your last name?");    
        return passwordMinLength();  
    }
    else
    {
        document.getElementById("errorbox").innerHTML = `Password good enough`
    }
}
function emptyValues()
{
    var name, pwd;
    name
    pwd = document.getElementById("passwordBox").value;
}

function newWelcomeTitle()
{
    var name = document.getElementById("firstnameBox").value;
    document.getElementById("homeWelcomeTitle").hidden;
    document.getElementsByClassName("mainquote")[0].innerHTML = `<h1>Welcome to your happy place, ${name}!</h1>`
}

function formValidation()
{

}

