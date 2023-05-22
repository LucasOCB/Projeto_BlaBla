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
div_imagem_ativada.addEventListener("click", () => {foco_imagem()})
const imgs_1_descricao = ["foto de demonstração de camiseta"]
const imgs_2_descricao = ["foto de demonstração de bermuda"]
const imgs_3_descricao = ["foto de demonstração de conjunto"]
const imgs_4_descricao = ["foto de demonstração de vestido"]
const imgs_5_descricao = ["foto de demonstração de calça"]
const imgs_6_descricao = ["foto de demonstração de roupa de bebe"]
const imgs_7_descricao = ["foto de demonstração de acesorios"]
const imgs_8_descricao = ["foto de demonstração de pijama"]

const imgs_1_camisetas = [
    "../img/produtos/camisetas/cami1.png",
    "../img/produtos/camisetas/cami3.png",
    "../img/produtos/camisetas/cami2.png",
    "../img/produtos/camisetas/cami4.png",
    "../img/produtos/camisetas/cami5.png",
    "../img/produtos/camisetas/cami6.png",
    "../img/produtos/camisetas/cami7.png",
    "../img/produtos/camisetas/cami8.png",
    "../img/produtos/camisetas/cami9.png"
];
const imgs_2_bermudas = [
    "../img/produtos/bermudas/berm1.png",
    "../img/produtos/bermudas/berm2.png",
    "../img/produtos/bermudas/berm3.png",
    "../img/produtos/bermudas/berm4.png",
    "../img/produtos/bermudas/berm5.png",
    "../img/produtos/bermudas/berm6.png",
    "../img/produtos/bermudas/berm7.png",
    "../img/produtos/bermudas/berm8.png",
    "../img/produtos/bermudas/berm9.png"
];
const imgs_3_conjuntos = [
    "../img/produtos/conjuntos/conj4.png",
    "../img/produtos/conjuntos/conj5.png",
    "../img/produtos/conjuntos/conj6.png",
    "../img/produtos/conjuntos/conj1.png",
    "../img/produtos/conjuntos/conj2.png",
    "../img/produtos/conjuntos/conj3.png",
    "../img/produtos/conjuntos/conj7.png",
    "../img/produtos/conjuntos/conj8.png",
    "../img/produtos/conjuntos/conj9.png"
];
const imgs_4_vestidos = [
    "../img/produtos/vestidos/ves1.png",
    "../img/produtos/vestidos/ves2.png",
    "../img/produtos/vestidos/ves3.png",
    "../img/produtos/vestidos/ves4.png",
    "../img/produtos/vestidos/ves5.png",
    "../img/produtos/vestidos/ves6.png",
    "../img/produtos/vestidos/ves7.png",
    "../img/produtos/vestidos/ves8.png",
    "../img/produtos/vestidos/ves9.png"
];
const imgs_5_calcas = [
    "../img/produtos/calcas/cal2.png",
    "../img/produtos/calcas/cal1.png",
    "../img/produtos/calcas/cal3.png",
    "../img/produtos/calcas/cal4.png",
    "../img/produtos/calcas/cal6.png",
    "../img/produtos/calcas/cal5.png",
    "../img/produtos/calcas/cal8.png",
    "../img/produtos/calcas/cal7.png",
    "../img/produtos/calcas/cal9.png"
];
const imgs_6_bebes = [
    "../img/produtos/bebe/bebe2.png",
    "../img/produtos/bebe/bebe1.png",
    "../img/produtos/bebe/bebe3.png",
    "../img/produtos/bebe/bebe4.png",
    "../img/produtos/bebe/bebe8.png",
    "../img/produtos/bebe/bebe5.png",
    "../img/produtos/bebe/bebe7.png",
    "../img/produtos/bebe/bebe6.png",
    "../img/produtos/bebe/bebe9.png"
];
const imgs_7_acessorios = [
    "../img/produtos/acessorios/aces1.png",
    "../img/produtos/acessorios/aces2.png",
    "../img/produtos/acessorios/aces3.png",
    "../img/produtos/acessorios/aces4.png",
    "../img/produtos/acessorios/aces5.png",
    "../img/produtos/acessorios/aces6.png",
    "../img/produtos/acessorios/aces7.png",
    "../img/produtos/acessorios/aces8.png",
    "../img/produtos/acessorios/aces9.png"
];
const imgs_8_pijamas = [
    "../img/produtos/pijamas/pij1.png",
    "../img/produtos/pijamas/pij2.png",
    "../img/produtos/pijamas/pij3.png",
    "../img/produtos/pijamas/pij4.png",
    "../img/produtos/pijamas/pij5.png",
    "../img/produtos/pijamas/pij6.png",
    "../img/produtos/pijamas/pij7.png",
    "../img/produtos/pijamas/pij8.png",
    "../img/produtos/pijamas/pij9.png"
]
const tipos_imagens = [imgs_1_camisetas, imgs_2_bermudas, imgs_3_conjuntos, imgs_4_vestidos, imgs_5_calcas, imgs_6_bebes, imgs_7_acessorios, imgs_8_pijamas]
const tipos_descricao = [imgs_1_descricao, imgs_2_descricao, imgs_3_descricao, imgs_4_descricao, imgs_5_descricao, imgs_6_descricao, imgs_7_descricao, imgs_8_descricao]
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
    fixar_botoes(posicao_Objeto.bottom)
})
function fixar_botoes(dado1){
    if(dado1 < 117.5){
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
        imagens[contador].setAttribute("src", tipos_imagens[numero][contador]);
        imagens[contador].setAttribute("alt", tipos_descricao[numero]);
    }
}
//dado = saber que será ativada por seta
function foco_imagem(dado){
    if(dado == "seta"){
        img_imagem_ativada.setAttribute("src", tipos_imagens[contador_tipoImagem][contador_imagem_hover])
        img_imagem_ativada.setAttribute("alt", tipos_descricao[contador_tipoImagem])
    }else{
        div_imagem_ativada.classList.toggle('foco_img')
        div_imagem_ativada.classList.toggle('foco_img_desaparecer')
        img_imagem_ativada.setAttribute("src", tipos_imagens[contador_tipoImagem][contador_imagem_hover])
        img_imagem_ativada.setAttribute("alt", tipos_descricao[contador_tipoImagem])
        header_blur.classList.toggle('blur');
        main_blur.classList.toggle('blur');
        footer_blur.classList.toggle('blur');
    }
}
function prox_foco_imagem(){
    foco_imagem()
    if(contador_imagem_hover == 8){
        contador_imagem_hover = 0;
        foco_imagem("seta")
    }else{
        contador_imagem_hover++
        foco_imagem("seta");
    }
}
function ante_foco_imagem(){
    foco_imagem();
    if(contador_imagem_hover == 0){
        contador_imagem_hover = 8
        foco_imagem("seta")
    }else{
        contador_imagem_hover--
        foco_imagem("seta");
    }
}
img_imagem_ativada.addEventListener("mousemove", (d) => {
    const eixo_x = d.clientX - d.target.offsetLeft;
    const eixo_y = d.clientY - d.target.offsetTop;
    
    img_imagem_ativada.style.transformOrigin = `${eixo_x}px ${eixo_y}px`;
    img_imagem_ativada.style.transform = "scale(1.5)";
})
img_imagem_ativada.addEventListener("mouseleave", (d) => {
    img_imagem_ativada.style.transformOrigin = `center center`;
    img_imagem_ativada.style.transform = "scale(1)";
})

const coords = { x: 0, y: 0 };

const circles = document.querySelectorAll(".circle");

var colors = [
  "#87D2FB",
];

var focus_circle = document.getElementsByClassName('focus_circle')
for(let x = 0; x < focus_circle.length; x++){
    focus_circle[x].addEventListener("mouseover", () => {
        for(let y = 0; y < circles.length; y++){
            circles[y].style.background = "#f16923"
        }
    })
    focus_circle[x].addEventListener("mouseout", () => {
        for(let y = 0; y < circles.length; y++){
            circles[y].style.background = "#87d2fb"
        }
    })
}
circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX + 12;
  coords.y = e.clientY + 12;
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();