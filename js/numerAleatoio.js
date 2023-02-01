const menorValor = 1;
const maiorValor = 1000;
const numeroSecreto = numeroAleatorio();

console.log(numeroSecreto)

function numeroAleatorio(){
     return parseInt(Math.random()*maiorValor +1)
}

const elementoComMenorValor = document.getElementById('valor-menor')
elementoComMenorValor.innerHTML = menorValor

const elementoComMaiorValor = document.getElementById('valor-maior')
elementoComMaiorValor.innerHTML = maiorValor