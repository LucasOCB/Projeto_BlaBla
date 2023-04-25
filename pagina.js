var lista_nav = document.getElementById('alvo');
var validar = false;
var barra1 = document.getElementById('bc');
var barra2 = document.getElementById('bm');
var barra3 = document.getElementById('bb');
var carrocel = document.getElementById('carrocel');
var seta1 = document.getElementById('seta1');
seta1.classList.add('setaSumir');
var seta2 = document.getElementById('seta2');
var wats_ani = document.getElementById('wats_ani')
var contador = 0; 
var contador_reset = 0; 
var mover_tamanho = 0;
var tamanho_tela = document.documentElement.clientWidth;

//535
seta1.addEventListener("click", () => {
    moverCarrocel(1);
})
seta2.addEventListener("click", () => {
    moverCarrocel(0);
})

document.addEventListener("mousemove", () => {
    atualizar_tamanho_tela(); 
})

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
        carrocel.style.right =`${mover_tamanho}%`;
    }else if(dado == 1 && mover_tamanho >= 0){
        carrocel.style.right = `${mover_tamanho}%`;
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

function mudar(dado){
    if(dado == true){
        lista_nav.classList.add('aparecer');
        delay_wats();
    }else if(dado == false){
        lista_nav.classList.remove('aparecer');
    }
}
function atualizar_tamanho_tela() {
    tamanho_tela = document.documentElement.clientWidth;
    if(tamanho_tela <= 550){
        carrocel.style.right = `${0}%`;
    }
}
window.addEventListener("resize", () => {
    tamanho_tela = document.documentElement.clientWidth;
    if(tamanho_tela <= 550){
        contador_reset = 0
        return
    }
    if(contador_reset >=1){
        return
    }
    contador_reset = 1
    console.log(contador_reset)
    setTimeout(() => {
        timer_1();
        setTimeout(() => {
            timer_2();
        }, 0020)
    }, 0010)
})

function timer_1(){
    carrocel.classList.add('reset_carrosel')
    console.log("timer1")
}
function timer_2(){
    carrocel.classList.remove('reset_carrosel')
    console.log("timer2")
}