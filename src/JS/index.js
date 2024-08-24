const botoes = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');
const informacoes = document.querySelectorAll('.informacoes');

let indiceAtual = 0;
let intervaloAutomatico;


function ativarElemento(indice, elementos) {
    elementos.forEach((elemento, i) => {
        elemento.classList.toggle('ativa', i === indice);
    });
}


function trocarImagem() {
    indiceAtual = (indiceAtual + 1) % imagens.length;
    ativarElemento(indiceAtual, imagens);
    ativarElemento(indiceAtual, informacoes);
}


function toggleAutomatico() {
    if (intervaloAutomatico) {
        clearInterval(intervaloAutomatico);
        intervaloAutomatico = null;
    } else {
        intervaloAutomatico = setInterval(trocarImagem, 25000);
    }
}

botoes.forEach((botao, index) => {
    botao.addEventListener('click', () => {
        ativarElemento(index, botoes); 
        ativarElemento(index, imagens);
        ativarElemento(index, informacoes);
        indiceAtual = index;
        toggleAutomatico(); 
    });
});

ativarElemento(indiceAtual, imagens);
ativarElemento(indiceAtual, informacoes);
