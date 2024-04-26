function cadastroRealizadoComSucesso(){
    let email = document.getElementById("email").value;
    let senha = document.getElementById("password").value;

    if(email.length > 10 && senha.length > 3){
        window.location.href = "../index.html"    
    }else{
        alert("Credenciais inválidas. Tente novamente!")
    }
    limparForm("email")
    limparForm("password")
}

function limparForm(id){
    document.getElementById(id).value = "";
}
