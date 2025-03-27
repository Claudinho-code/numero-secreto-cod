let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
function exibirTextoNaTela(tag ,texto) { 
let campo = document.querySelector(tag);
campo.innerHTML = texto;
responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2}); 
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do numero Secreto');
    exibirTextoNaTela('p', 'Escolha um numero de 0 a 10');
}

exibirMensagemInicial();


function verificarChute(){
    let chute = parseInt(document.querySelector('input').value);

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas': 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`; 
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if (chute > numeroSecreto){ 
        exibirTextoNaTela('p', 'O numero é menor');
    } else {
        exibirTextoNaTela('p', 'O numero é maior');
        
tentativas ++;
limparCampo();
   }
}
function gerarNumeroAleatorio(){
   let numeroEscolhida = parseInt(Math.random() * numeroLimite + 1);
   let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }
   if(listaDeNumerosSorteados.includes(numeroEscolhida)){
       return gerarNumeroAleatorio();
   }else{
       listaDeNumerosSorteados.push(numeroEscolhida);
    return numeroEscolhida;
   }
}
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';

}
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}