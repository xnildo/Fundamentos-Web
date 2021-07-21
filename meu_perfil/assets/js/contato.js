let nome = document.getElementById('nome');
let email = document.querySelector('#email');
let assunto = document.querySelector('#assunto');

//função para validar o nome
function validarNome(){
    let txtNome = document.querySelector('#txtNome');
    if(nome.value.length < 3){
        txtNome.innerHTML = "Nome Inválido";
        txtNome.style.color="red"; 
    }
    else{
        txtNome.innerHTML = "Nome Válido"; 
        txtNome.style.color="green";
    }

}

function validarEmail(){
    let txtEmail = document.querySelector('#txtEmail');
    if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1){
        txtEmail.innerHTML="E-mail inválido"
        txtEmail.style.color="red"
    }
    else{
        txtEmail.innerHTML="E-mail Válido"
        txtEmail.style.color="green"
    }
}

function mudarTamMap(){
    
}