function entrar(){
    let username = document.getElementById("user").value;
    let password = document.getElementById("password").value;
    localStorage.setItem("name", username )
    localStorage.setItem("password", password )
    localStorage.setItem("keyDeEntrada", "123456")
    location.href="home.html";
    
}

