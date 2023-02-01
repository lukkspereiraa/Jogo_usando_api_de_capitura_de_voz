function verificaSeONumeroEValido(chute) {
    const valorNumerico = +chute
    const somCapiturado = chute
    
    if (testePraSaberSeENumero(valorNumerico)) {
        elementoChute.innerHTML +='<div>valor invalido</div>'
        return
    }
    if(numeroDentroDoValorPermitido(valorNumerico)){
        elementoChute.innerHTML +=`<div>numero nao esta dentro do permitido de ${menorValor} ate ${maiorValor}</div>`
        return
    }
    if(valorNumerico === numeroSecreto){
        document.body.innerHTML = `
        <h1>Parabes você acertou</h1>
       <h3>o numero misterioso:</h3>
       <samp class="box2">${numeroSecreto}</samp>
       <button id='jogarNovamente'>jogar novamente</button>  `
     

    }else if(valorNumerico > numeroSecreto){
        elementoChute.innerHTML += '<div>O numeor aleatorio é menor <i class="fa-solid fa-circle-down"></i></div> '
    }else{
        elementoChute.innerHTML +='<div>O numeor aleatorio é maior <i class="fa-solid fa-circle-up"></i></div> '
    }
}

function testePraSaberSeENumero(valorNumerico) {
    return Number.isNaN(valorNumerico)
}

function numeroDentroDoValorPermitido(valorNumerico){
    return valorNumerico > maiorValor || valorNumerico < menorValor
}   

document.body.addEventListener('click', e=> {
    if (e.target.id = "jogarNovamente"){
        window.location.reload()
    } 
})
