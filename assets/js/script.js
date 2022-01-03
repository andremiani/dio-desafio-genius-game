let sequence = [];
let clickedSequence = [];
let score = 0;

// 0. verde
// 1. vermelhor
// 2. amarelo
// 3. azul

const blue = document.querySelector(".blue");
const red = document.querySelector(".red");
const green = document.querySelector(".green");
const yellow = document.querySelector(".yellow");

let shuffleSequecence = () => {
    let colorSequence = Math.floor(Math.random() * 4);
    sequence[sequence.length] = colorSequence;
    clickedSequence = [];

    for(let i in sequence){
        let elementColor = createColorElement(sequence[i]);
        highlightNextColor(elementColor, Number(i) + 1);
    }
}

let highlightNextColor = (element, number) => {
    number = (number * 500);
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}

//checa se os botoes clicados são os mesmos da ordem gerada no jogo
let checkSequence = () => {
    for(let i in clickedSequence) {
        if(clickedSequence[i] != sequence[i]) {
            gameOver();
            break;
        }
    }
    if(clickedSequence.length == sequence.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
        gotoNextLevel();
    }
}

//funcao para o clique do usuario
let userClick = (color) => {
    clickedSequence[clickedSequence.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkSequence();
    },250);
}

//funcao que retorna a cor
let createColorElement = (color) => {
    if(color == 0) {
        return green;
    } else if(color == 1) {
        return red;
    } else if (color == 2) {
        return yellow;
    } else if (color == 3) {
        return blue;
    }
}

//funcao para proximo nivel do jogo
let gotoNextLevel = () => {
    score++;
    shuffleSequecence();
}

//funcao para game over
let gameOver = () => {
    alert(`Pontuação: ${score}!\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo`);
    order = [];
    clickedSequence = [];

    startGame();
}

//funcao de inicio do jogo
let startGame = () => {
    alert('Bem vindo ao Gênesis! Iniciando novo jogo!');
    score = 0;

    gotoNextLevel();
}


//eventos de clique para as cores
green.onclick = () => userClick(0);
red.onclick = () => userClick(1);
yellow.onclick = () => userClick(2);
blue.onclick = () => userClick(3);



//inicio do jogo
startGame();
