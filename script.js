//primeiro programa

//variaveis
//var mensagem = "olá mundo";
/*
var a = 2;
var b = 4;
var c = "ola mundo";


var soma = a + b;
var sub = a - b;
var mult = a*b;
var div = a/b;

if(b%2 == 1 ){
    alert("numero impar");
}
else if (c%2 == 1){
    alert("numero par");
}
else {
    alert("valor invalido");
}
*/
/*
alert(soma);
alert(sub);
alert(mult);
alert(div);
*/

/*
var i = 0;

while(i < 3){
    alert(i);
    i = i+1;
}

//for

for (var j = 0; j <3; j++){
    alert(j);
}
*/

/*
var numero = 6; 
var decimanl = 4.5;
var nome = "ola mundo";
var lista = ["laranja", "maça", "banana"];

for (i in lista){
    alert(lista[i]);
}

//console.log envia mensagens para o navegador atraves do console

*/
/*
function soma(a, b){
    console.log(a + b);
}

soma(2,2);

function subtracao(a,b){
    return a-b;
}

var s = subtracao(5,3);
console.log(s);

function multiplicar(a,b){
    return a*b;
}

console.log(multiplicar(5,5));
*/

/*
function mensagem(nome){
    alert("não clique em mim " +nome);
}
*/

//document quer dizer que esta navegando no documento principal
function mudaCor(cor){
    var elemento = document.getElementById("mensagem");
    elemento.style.color = cor;
}


