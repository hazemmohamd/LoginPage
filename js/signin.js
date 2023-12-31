var entryEmail = document.getElementById("email")
var entryPassword = document.getElementById("password")
var btnSignIn = document.getElementById("btnSignIn")
var errorMessage = document.getElementById("errorMessage")

var users = []
if(localStorage.getItem("users")!=null){
    users = JSON.parse(localStorage.getItem("users"))
  }

btnSignIn.addEventListener('click', checkUser)


function checkUser(){
    check = users.find(entry => entry.email == entryEmail.value)
    if (entryPassword.value ==""||entryEmail.value ==""){
        errorMessage.innerText = "All Inputs Are Required"
        console.log("All Inputs Are Required");
    }
    else if(check == undefined || entryPassword.value !== check.password){
        errorMessage.innerText = "Wrong Email or Password"
        console.log("enter valid email");
    }
    else{
        localStorage.setItem("sessionUsername",check.name)
        console.log("nice");
        window.location = '../login.html'
    }
    
}



