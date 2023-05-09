var lista_nav = document.getElementById('alvo');
var validar = false;
var barra1 = document.getElementById('bc');
var barra2 = document.getElementById('bm');
var barra3 = document.getElementById('bb');
var contador = 0; 
var valores = document.getElementsByClassName('valores_elementos')


window.addEventListener('scroll', () => {
    for(let x = 0; x < valores.length; x++){
        if(esta_visivel(valores[x])){
            valores[x].style.left = '0'
        }else{
            valores[x].style.left = '-100%'
        }
    }
})
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
var visibleBottom = window.innerHeight || document.documentElement.clientHeight;
var visibleTop = 0;
function esta_visivel(element) {
    var bounding = element.getBoundingClientRect();
    var elementHeight = bounding.bottom - bounding.top;
    var elementMiddle = bounding.top + elementHeight / 2;

    return (elementMiddle > visibleTop && elementMiddle < visibleBottom);
}