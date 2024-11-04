// Menu mobile
function expand(){
  const nav =  document.querySelector('nav');
  nav.classList.toggle('mobile');
}

// Imagem 1
const imagem1 = document.getElementById('lampada-01');
imagem1.addEventListener('click', function () {
    imagem1.src = 'img/lampada-on.jpg';
});

// Imagem 2
const imagem2 = document.getElementById('lampada-02');
imagem2.addEventListener('mouseover', function () {
    imagem2.src = 'img/lampada-on.jpg';

});

imagem2.addEventListener('mouseout', function () {
    imagem2.src = 'img/lampada.jpg';
});