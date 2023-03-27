function entrar(){
    let username = document.getElementById("user").value;
    let password = document.getElementById("password").value;
    localStorage.setItem("name", username )
    localStorage.setItem("password", password )
    location.href="apk-web.html";
    
}
 

