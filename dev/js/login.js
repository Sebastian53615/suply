function entrar(){
    location.href="apk-web.html";
    let username = document.getElementById("user").value;
    let password = document.getElementById("password").value;
    localStorage.setItem("name", username )
    localStorage.setItem("nickname", password )
    
    
}