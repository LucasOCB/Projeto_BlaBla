var lista_nav = document.getElementById('alvo');
var validar = false;
var barra1 = document.getElementById('bc');
var barra2 = document.getElementById('bm');
var barra3 = document.getElementById('bb');
var botoes = document.getElementById('botoes');
var body = document.getElementById('body');
var div_imagem_ativada = document.getElementById('div_imagem_ativada')
var img_imagem_ativada = document.getElementById('img_imagem_ativada')
var imagens_produtos = document.getElementById('imagens_produtos');
var descricao = document.getElementById('descricao');
const imagens = document.getElementsByClassName('img_img');
const div_imagens = document.getElementsByClassName('img');
var header_blur = document.getElementById("header");
var main_blur = document.getElementById("main");
var footer_blur = document.getElementById("footer");
var contador = 0; 
var contador_imagem_hover = 0;
var contador_tipoImagem = 0;

div_imagem_ativada.addEventListener("click", () => {foco_imagem()})
for(let x = 0; x < div_imagens.length; x++){
    div_imagens[x].addEventListener("click", () => {
        foco_imagem(contador_imagem_hover);
    })
}
for(let x = 0; x < imagens.length; x++){
    imagens[x].classList.add('hover_img')
    imagens[x].addEventListener("click", () => {
        contador_imagem_hover = x;
    })
}
const imgs_1_camisetas = [
    "../img/produtos/camisetas/cami1.jpeg",
    "../img/produtos/camisetas/cami2.jpeg",
    "../img/produtos/camisetas/cami3.jpeg",
    "../img/produtos/camisetas/cami4.jpeg",
    "../img/produtos/camisetas/cami5.jpeg",
    "../img/produtos/camisetas/cami6.jpeg",
    "../img/produtos/camisetas/cami7.jpeg",
    "../img/produtos/camisetas/cami8.jpeg",
    "../img/produtos/camisetas/cami9.jpeg"
];
const imgs_2_bermudas = [
    "../img/produtos/bermudas/berm1.jpeg",
    "../img/produtos/bermudas/berm2.jpeg",
    "../img/produtos/bermudas/berm3.jpeg",
    "../img/produtos/bermudas/berm4.jpeg",
    "../img/produtos/bermudas/berm5.jpeg",
    "../img/produtos/bermudas/berm6.jpeg",
    "../img/produtos/bermudas/berm7.jpeg",
    "../img/produtos/bermudas/berm8.jpeg",
    "../img/produtos/bermudas/berm9.jpeg"
];
const imgs_3_conjuntos = [
    "../img/produtos/conjuntos/conj1.jpeg",
    "../img/produtos/conjuntos/conj2.jpeg",
    "../img/produtos/conjuntos/conj3.jpeg",
    "../img/produtos/conjuntos/conj4.jpeg",
    "../img/produtos/conjuntos/conj5.jpeg",
    "../img/produtos/conjuntos/conj6.jpeg",
    "../img/produtos/conjuntos/conj7.jpeg",
    "../img/produtos/conjuntos/conj8.jpeg",
    "../img/produtos/conjuntos/conj9.jpeg"
];
const imgs_4_vestidos = [
    "../img/produtos/vestidos/1",
    "../img/produtos/vestidos/2",
    "../img/produtos/vestidos/3",
    "../img/produtos/vestidos/4",
    "../img/produtos/vestidos/5",
    "../img/produtos/vestidos/6",
    "../img/produtos/vestidos/7",
    "../img/produtos/vestidos/8",
    "../img/produtos/vestidos/9"
];
const imgs_5_calcas = [
    "../img/produtos/calcas/1",
    "../img/produtos/calcas/2",
    "../img/produtos/calcas/3",
    "../img/produtos/calcas/4",
    "../img/produtos/calcas/5",
    "../img/produtos/calcas/6",
    "../img/produtos/calcas/7",
    "../img/produtos/calcas/8",
    "../img/produtos/calcas/9"
];
const imgs_6_bodys = [
    "../img/produtos/bodys/1",
    "../img/produtos/bodys/2",
    "../img/produtos/bodys/3",
    "../img/produtos/bodys/4",
    "../img/produtos/bodys/5",
    "../img/produtos/bodys/6",
    "../img/produtos/bodys/7",
    "../img/produtos/bodys/8",
    "../img/produtos/bodys/9"
];
const imgs_7_jardineiras = [
    "../img/produtos/jardineiras/1",
    "../img/produtos/jardineiras/2",
    "../img/produtos/jardineiras/3",
    "../img/produtos/jardineiras/4",
    "../img/produtos/jardineiras/5",
    "../img/produtos/jardineiras/6",
    "../img/produtos/jardineiras/7",
    "../img/produtos/jardineiras/8",
    "../img/produtos/jardineiras/9"
];
const imgs_8_acessorios = [
    "../img/produtos/acessorios/1",
    "../img/produtos/acessorios/2",
    "../img/produtos/acessorios/3",
    "../img/produtos/acessorios/4",
    "../img/produtos/acessorios/5",
    "../img/produtos/acessorios/6",
    "../img/produtos/acessorios/7",
    "../img/produtos/acessorios/8",
    "../img/produtos/acessorios/9"
];
const imgs_9_pijamas = [
    "../img/produtos/pijamas/1",
    "../img/produtos/pijamas/2",
    "../img/produtos/pijamas/3",
    "../img/produtos/pijamas/4",
    "../img/produtos/pijamas/5",
    "../img/produtos/pijamas/6",
    "../img/produtos/pijamas/7",
    "../img/produtos/pijamas/8",
    "../img/produtos/pijamas/9"
]

const tipos_imagens = [imgs_1_camisetas, imgs_2_bermudas, imgs_3_conjuntos, imgs_4_vestidos, imgs_5_calcas, imgs_6_bodys, imgs_7_jardineiras, imgs_8_acessorios, imgs_9_pijamas]


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
    contador_tipoImagem = numero
    for(let contador = 0; contador < imagens.length; contador++){
        imagens[contador].setAttribute("src", tipos_imagens[numero][contador])
        // console.log(tipos_imagens[numero][contador])
    }
}
function foco_imagem(){
    div_imagem_ativada.classList.toggle('foco_img')
    div_imagem_ativada.classList.toggle('foco_img_desaparecer')
    img_imagem_ativada.setAttribute("src", tipos_imagens[contador_tipoImagem][contador_imagem_hover])
    header_blur.classList.toggle('blur');
    main_blur.classList.toggle('blur');
    footer_blur.classList.toggle('blur');
}