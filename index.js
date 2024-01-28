function validation(event){

    event.preventDefault(event)
    
    var regex=/^(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]/;
    var nome=document.getElementById("name").value
    var senha=document.getElementById("password").value


   if(regex.test(nome)){
        document.getElementById("errnome").style.display="block";
    }
    else{
        document.getElementById("errnome").style.display="none";
        alert("O nome está correto")

    }

    if(senha.length>5){
        if(regex.test(senha)){
            alert("ok")
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

}