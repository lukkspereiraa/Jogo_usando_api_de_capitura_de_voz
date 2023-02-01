const elementoChute = document.getElementById('chute');

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-BR'
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(params) {
    const chute=params.results[0][0].transcript
    mostarChute(chute)  
    verificaSeONumeroEValido(chute)
}

function mostarChute(chute){
    elementoChute.innerHTML =`
    <div>Você falou o seginte numero:</div>
            <samp class="box">${chute}</samp>
         
    `
}
recognition.addEventListener('end',()=> recognition.start())
