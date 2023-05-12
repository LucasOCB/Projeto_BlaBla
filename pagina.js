var lista_nav = document.getElementById('alvo');
var validar = false;
var barra1 = document.getElementById('bc');
var barra2 = document.getElementById('bm');
var barra3 = document.getElementById('bb');
var wats_ani = document.getElementById('wats_ani')
var contador = 0; 
var contador_reset = 0; 
var mover_tamanho = 0;
var tamanho_tela = document.documentElement.clientWidth;
var imagens_post_principal = document.getElementsByClassName('img_post_principal')

for(let x = 0; x < imagens_post_principal.length; x++){
    if(document.documentElement.clientWidth < 750){
        imagens_post_principal[x].setAttribute('src', `img/pagina_principal/main_post/img_post_principal_${x + 1}_vert.png`)
    }else{
        imagens_post_principal[x].setAttribute('src', `img/pagina_principal/main_post/img_post_principal_${x + 1}_hori.png`)
    }
}

window.addEventListener('resize', function() {
    let tam_tela = document.documentElement.clientWidth;
    let atributo = imagens_post_principal[0].getAttribute('src')
    if(tam_tela > 751 && atributo == `img/pagina_principal/main_post/img_post_principal_1_vert.png`){
        mudar_postP_maior();
    }else if(tam_tela < 750 && atributo == `img/pagina_principal/main_post/img_post_principal_1_hori.png`){
        mudar_postP_menor();
    }
});

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

function mudar_postP_maior(){
    for(let x = 0; x < imagens_post_principal.length; x++){
        imagens_post_principal[x].setAttribute('src', `img/pagina_principal/main_post/img_post_principal_${x + 1}_hori.png`)
    }
}
function mudar_postP_menor(){
    for(let x = 0; x < imagens_post_principal.length; x++){
        imagens_post_principal[x].setAttribute('src', `img/pagina_principal/main_post/img_post_principal_${x + 1}_vert.png`)
    }
}