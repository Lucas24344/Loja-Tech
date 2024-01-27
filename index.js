function validation(event){

    event.preventDefault(event)
    
    var regex=/[^a-zA-Z]/
    var nome=document.getElementById("name").value
    var senha=document.getElementById("password").value
    //o if está rodando mesmo quando a senha <6
    if(senha>=6){
        if(regex.test(senha)){
            alert("ok")
            document.getElementById("password").style.display="none"
        }
        else{
            document.getElementById("password").style.display="block"
            document.getElementById("password").style.border="2px solid rgba(211, 67, 67, 0.729)"
        }
    }
    else{
        alert("aaaa")
    }
   if(regex.test(nome)){
        document.getElementById("errnome").style.display="block";
    }
    else{
        document.getElementById("errnome").style.display="none";
        alert("O nome está correto")

    }

}