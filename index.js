const db=require("./db");

console.log("passou");
function validation(event){

    event.preventDefault(event)
    var regexName=/^[a-zA-Z]+(?: [a-zA-Z]+)*$/;
    var regex=/^(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]/;
    var nome=document.getElementById("name").value
    var senha=document.getElementById("password").value

   if(regexName.test(nome)){

        document.getElementById("errnome").style.display="none";
    }
    else{
        document.getElementById("name").style.border="2px solid rgba(211, 67, 67, 0.729)";
        document.getElementById("errnome").style.display="block";

    }
    if(senha.length>5){
        if(regex.test(senha)){
            document.getElementById("errsenha").style.display="none";
            document.getElementById("errsenha1").style.display="none";
            document.getElementById("password").style.border="";
        }
        else{
            document.getElementById("errsenha").style.display="none";
            document.getElementById("errsenha1").style.display="block"
            document.getElementById("password").style.border="2px solid rgba(211, 67, 67, 0.729)";
        }
    }
    else{
        alert("aaaa")
        document.getElementById("errsenha1").style.display="none";
        document.getElementById("errsenha").style.display="block"
        document.getElementById("password").style.border="2px solid rgba(211, 67, 67, 0.729)";
    }
    enviarParaServidor();
}


  


function enviarParaServidor() {
    // Obtenha os dados do formulário
    const nome = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('password').value;
  
    // Crie um objeto com os dados
    const dados = {
      nome,
      email,
      senha
    };
  
    // Faça uma solicitação HTTP (por exemplo, usando fetch) para o servidor
    fetch('/cadastro', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dados)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Resposta do servidor:', data);
      // Lógica adicional conforme necessário
    })
    .catch(error => console.error('Erro na solicitação:', error));
  }