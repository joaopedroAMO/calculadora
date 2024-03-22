function insert(num){
    let numero = document.getElementById('tela').innerHTML;
    document.getElementById('tela').innerHTML = numero + num;
}

function clean(){
    document.getElementById('tela').innerHTML = "";
}

function excluir(){
    let tela = document.getElementById('tela').innerHTML;
    document.getElementById('tela').innerHTML = tela.substring(0, tela.length -1);
}

function calculo(){
    let tela = document.getElementById('tela').innerHTML;
    if(tela){
        document.getElementById('tela').innerHTML = eval(tela);
    }
    else{
        alert("Porfavor gite algo");
    }
}