var lista_nav = document.getElementById('alvo');
var validar = false;
var barra1 = document.getElementById('bc');
var barra2 = document.getElementById('bm');
var barra3 = document.getElementById('bb');
var contador = 0; 
var largura_pagina = document.documentElement.clientWidth;
var imagem_celular_element = document.getElementById("imagem_fundo")
// window.addEventListener('resize', () => {
//     largura_pagina = document.documentElement.clientWidth;
//     mudarImagem_cell(largura_pagina);
// })
// mudarImagem_cell(largura_pagina);
// function mudarImagem_cell(largura){
//     //../img/blabla/loja_celular.jpeg
//     //../img/blabla/loja_celular_grande.png
//     if(largura > 1130){
//         imagem_celular_element.setAttribute("src", "../img/blabla/loja_celular.jpeg")
//     }else if(largura < 1130 && largura > 543){
//         imagem_celular_element.setAttribute("src", "../img/blabla/loja_celular_grande.png")
//     }else{
//         imagem_celular_element.setAttribute("src", "../img/blabla/loja_celular.jpeg")
//     }
// }

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