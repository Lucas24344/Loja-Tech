function validation(event){
    event.preventDefault(event)
    var regex=/[^a-zA-Z]/
    var nome=document.getElementById("name").value
    if(regex.test(nome)){
        alert("O nome só pode conter letras!")

    }
    else{
        alert("O nome está correto")
    }
}