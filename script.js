'use-strict';

const player0Elemento = document.querySelector('.player--0')
const player1Elemento = document.querySelector('.player--1')
const score0Elemento =  document.querySelector('#pontos--0')
const score1Elemento = document.getElementById('pontos--1')
const current0Elemento = document.getElementById("current--0")
const current1Elemento = document.getElementById("current--1")
const diceElmento = document.querySelector('.dice')
const btnNovo = document.querySelector(".btn--new")
const btnRoll = document.querySelector(".btn--roll")
const btnHold = document.querySelector(".btn--hold")
let pontos, currentPontos, activePlayer, jogando;


//começando condições
const init = function(){
    pontos = [0,0];
    currentPontos= 0;
    activePlayer = 0;
    jogando = true;
    score0Elemento.textContent = 0;
    score1Elemento.textContent = 0;
    current0Elemento.textContent = 0;
    current1Elemento.textContent = 0;

    diceElmento.classList.add('hidden')

    player0Elemento.classList.remove('player--winner')
    player1Elemento.classList.remove('player--winner');
    player0Elemento.classList.add('player--active');
    player1Elemento.classList.remove('player--active');
}
init();

const mudarPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentPontos = 0;
    activePlayer= activePlayer === 0 ? 1: 0
    player0Elemento.classList.toggle('player--active')
    player1Elemento.classList.toggle('player--active')
}




//funcionalidade do dado

btnRoll.addEventListener('click', function(){
    if(jogando){
        //1.gerando um lançamento de dados aleatório
        const dice = Math.trunc(Math.random() * 6) + 1;
        
        //2.exibir dados
        diceElmento.classList.remove('hidden');
        diceElmento.src = `dice-${dice}.png`
        //3.verifica o 1 apareceu, se for verdade, muda para o próximo jogador
        if (dice !== 1){
            currentPontos = currentPontos + dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentPontos;
        }else{
            mudarPlayer()
        }
    }
})

btnHold.addEventListener('click', function(){
    if(jogando){
        //1.adicionar a pontuação atual ao à pontuação do jogador ativo
        pontos[activePlayer] += currentPontos;
        //pontos[1] = pontos[1] + currentPontos;
        document.getElementById(`pontos--${activePlayer}`).textContent = pontos[activePlayer];
        //2.verificar se a pontuação do jogador é >= 100
        if(pontos[activePlayer] >= 10){
            jogando = false;
            diceElmento.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
        }else{
            mudarPlayer();
        }
    };
})

btnNovo.addEventListener('click', init)