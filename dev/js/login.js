function entrar(){
    let username_key = document.getElementById("user").value;
    let password_key = document.getElementById("password").value;

    if (password_key ==localStorage.getItem("password" )) {
        if (username_key ==localStorage.getItem("name" )) {
            location.href="home.html";
        } else {
            alert("the password or the name is incorret") 
        }    
    } else{
        alert("the password or the name is incorret") 
    }
    
}