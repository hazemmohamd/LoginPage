var userName = document.getElementById("name")
var userEmail = document.getElementById("email")
var userPassword = document.getElementById("password")
var btnSignUp = document.getElementById("btnSignUp")
var errorMessage = document.getElementById("errorMessage")
var errorMessageEmail =document.getElementById("errorMessageEmail")
var errorMessagePassword = document.getElementById("errorMessagePassword")
var emailReg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
var passwordReg =/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
var users=[]

btnSignUp.addEventListener('click', addUser)

if(localStorage.getItem("users")!=null){
  users = JSON.parse(localStorage.getItem("users"))
}




function addUser(){
  errorMessage.classList.remove("good")
  if(userName.value == ""||userEmail.value == ""||userPassword.value ==""){
    errorMessage.innerText = "All Inputs Are Required";
    errorMessage.classList.remove("d-none")
    return;
  }
  else if(emailReg.test(userEmail.value) != true){
    errorMessageEmail.innerText ="Enter Valid Email";
    errorMessageEmail.classList.remove("d-none")
    errorMessage.classList.add("d-none")
    return;
  }
  else if (checkDup()==true){
    errorMessageEmail.innerText = "This Mail is Already Used"
    errorMessageEmail.classList.remove("d-none")
    errorMessage.classList.add("d-none")
    return;
  }
  else if (passwordReg.test(userPassword.value) != true){
    errorMessagePassword.innerText = "Enter Strong Passsword Contain min One Character and 8 numbers"
    errorMessageEmail.classList.add("d-none")
    errorMessage.classList.add("d-none")
    return;
  }
  else {
    errorMessageEmail.classList.add("d-none")
    errorMessage.classList.remove("d-none")
    errorMessage.classList.add("good")
    errorMessage.innerText = "Success Sign Up"
    errorMessagePassword.classList.add("d-none")

  input ={
    name : userName.value,
    email : userEmail.value,
    password :userPassword.value
  }
  
  users.push(input)
  localStorage.setItem("users",JSON.stringify(users))
  clearForm()
  console.log(users);
  }

}


function clearForm(){
  userName.value = "";
  userEmail.value = "";
  userPassword.value = "";
}


function checkDup(){
  check = users.find(entry => entry.email == userEmail.value)
  if(check != undefined){
      return true
  }
}