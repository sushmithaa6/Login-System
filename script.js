var objUser=
[
    {
        username:"sushmitha",password:"1234"
    },
    {
        username:"sush",password:"sush"
    }
]
function getInfo()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    for(i=0;i<objUser.length;i++)
    {
        if(username==objUser[i].username && password==objUser[i].password)
        {
            console.log(username+" is logged in!")
            alert("Login successful!");
            window.open('success.html','newwindow');
            return
        }
        else
        {
            alert("Invalid username or password. Please try again.");
            window.open('failed.html','newwindow'); 
        }
    }
    console.log("Incorrect Username or Password");
}