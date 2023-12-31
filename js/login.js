if(localStorage.getItem("users")!=null){
    userLogin = localStorage.getItem("sessionUsername")
  }

 document.getElementById("welcomText").innerHTML=`Welcome ${userLogin}`
 document.getElementById("exitBtn").addEventListener('click', exit)

 function exit(){
  localStorage.removeItem("sessionUsername")
  window.location = '../index.html'
 }