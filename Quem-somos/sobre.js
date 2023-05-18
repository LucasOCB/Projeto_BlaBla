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