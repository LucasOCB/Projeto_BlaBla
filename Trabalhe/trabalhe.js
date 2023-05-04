var lista_nav = document.getElementById('alvo');
var validar = false;
var barra1 = document.getElementById('bc');
var barra2 = document.getElementById('bm');
var barra3 = document.getElementById('bb');
var contador = 0; 

function trocar(dado){
    contador += 1;
    if(dado == 2 && contador%2 == 1){
        contador -= 1
        return
    }
    if(contador%2 == 1){
        var validar = true;
        
    }else if(contador%2 == 0){
        var validar = false;
    }
    mudarBotao();
    mudar(validar);
}
function mudarBotao(){
    if(contador%2 == 1){
        barra1.classList.add('mbc')
        barra2.classList.add('abm')
        barra3.classList.add('mbb')
    }else if(contador%2 == 0){
        barra1.classList.remove('mbc')
        barra2.classList.remove('abm')
        barra3.classList.remove('mbb')
    }
}
function mudar(dado){
    if(dado == true){
        lista_nav.classList.add('aparecer');
    }else if(dado == false){
        lista_nav.classList.remove('aparecer');
    }
}