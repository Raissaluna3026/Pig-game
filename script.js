'use-strict';

const score0Elemento =  document.querySelector('#pontos--0')
const score1Elemento = document.getElementById('pontos--1')
const current0Elemento = document.getElementById("current--0")
const current1Elemento = document.getElementById("current--1")
const diceElmento = document.querySelector('.dice')
const btnNovo = document.querySelector(".btn--new")
const btnRoll = document.querySelector(".btn--roll")
const btnHold = document.querySelector(".btn--hold")


//começando condições
score0Elemento.textContent = 0;
score1Elemento.textContent = 0;
diceElmento.classList.add('hidden')
let currentPontos= 0;
let activePlayer = 0;
const pontos = [0,0]

//funcionalidade do dado

btnRoll.addEventListener('click', function(){
    //1.gerando um lançamento de dados aleatório
    const dice = Math.trunc(Math.random() * 6) + 1;

    //2.exibir dados
    diceElmento.classList.remove('hidden');
    diceElmento.src = `dice-${dice}.png`
    //3.verifica o 1 rolada, se for verdade, muda para o próximo jogador
    if (dice !== 1){
        currentPontos = currentPontos + dice;
        document.getElementById(`current--${activePlayer}`)

        current0Elemento.textContent = currentPontos;
    }else{

    }
})