var lista_nav = document.getElementById('alvo');
var validar = false;
var barra1 = document.getElementById('bc');
var barra2 = document.getElementById('bm');
var barra3 = document.getElementById('bb');
var carrocel = document.getElementById('carrocel');
var seta1 = document.getElementById('seta1');
seta1.classList.add('setaSumir');
var seta2 = document.getElementById('seta2');
var contador = 0; 
var mover_tamanho = 0;

function moverCarrocel(dado){
    if(dado == 0){
        seta1.classList.remove('setaSumir');
        mover_tamanho += 80
        if(mover_tamanho >= 232){
            mover_tamanho  = 232
            seta2.classList.add('setaSumir');
        }
    }else if(dado == 1){
        seta2.classList.remove('setaSumir');
        mover_tamanho -= 80
        if(mover_tamanho <= 0){
            mover_tamanho = 0
            seta1.classList.add('setaSumir');
        }
    }
    if(dado == 0 && mover_tamanho <= 400){
        carrocel.style.right = "" + mover_tamanho + "%";
    }else if(dado == 1 && mover_tamanho >= 0){
        carrocel.style.right = mover_tamanho + "%";
    }
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

function trocar(){
    contador += 1;
    if(contador%2 == 1){
        var validar = true;
        
    }else if(contador%2 == 0){
        var validar = false;
    }
    mudarBotao();
    mudar(validar);
}

function mudar(dado){
    if(dado == true){
        lista_nav.classList.add('aparecer');
    }else if(dado == false){
        lista_nav.classList.remove('aparecer');
    }
}