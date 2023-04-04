var lista_nav = document.getElementById('alvo');
var validar = false;
var barra1 = document.getElementById('bc');
var barra2 = document.getElementById('bm');
var barra3 = document.getElementById('bb');
var wats_ani = document.getElementById('wats_ani');
var botoes = document.getElementById('botoes');
var body = document.getElementById('body');
var imagens_produtos = document.getElementById('imagens_produtos');
var descricao = document.getElementById('descricao');
const imagens = document.getElementsByClassName('img_img');
var contador = 0; 
const imgs_1_conjuntos = ["a", "b", "c", "d", "e", "f", "g", "h", "i"]
const imgs_2_acessorios = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
const imgs_3_vestidos = ["a", "1", "b", "2", "c", "3", "e", "4", "f", "5"]
const imgs_4_calcas = ["a", "a", "s", "s", "x", "x", "z", "z", "z"]
const imgs_5_bodys = ["q", "q", "q", "q", "q", "q", "q", "q", "q"]
const imgs_6_jardineiras = ["b", "b", "b", "b", "b", "b", "b", "b", "b"]

const tipos_imagens = [imgs_1_conjuntos, imgs_2_acessorios, imgs_3_vestidos, imgs_4_calcas, imgs_5_bodys, imgs_6_jardineiras]

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
        delay_wats();
    }else if(dado == false){
        lista_nav.classList.remove('aparecer');
    }
}
window.addEventListener("scroll", () => {
    let posicao_Objeto = descricao.getBoundingClientRect();
    let posicao_janela = {
        superior: 0,
        esquerda: 0,
        inferior: window.innerHeight,
        direita: window.innerWidth
    }
    fixar_botoes(posicao_Objeto.bottom)
})
function fixar_botoes(dado1){
    if(dado1 < 97.5){
        botoes.classList.add('fixar_botoes');
        imagens_produtos.classList.add('padding_pos_fixo')
    }else{
        botoes.classList.remove('fixar_botoes');
        imagens_produtos.classList.remove('padding_pos_fixo')
    }
}
function mudar_imagens(numero){
    for(let contador = 0; contador < imagens.length; contador++){
        imagens[contador].setAttribute("src", tipos_imagens[numero][contador])
        // console.log(tipos_imagens[numero][contador])
    }
}