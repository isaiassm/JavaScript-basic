function valida(){
    var nome =  document.getElementById('nome');
    if(nome.value == ""){
        alert("campo nome nao pode ser enviado em branco")
    }
    else{
        alert("nenhum problema foi detectado. formulario pode ser enviado")
    }
}