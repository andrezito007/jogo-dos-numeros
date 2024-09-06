const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

  const elementoChute = document.getElementById("chute")

const recognition = new SpeechRecognition();
recognition.lang = 'pt-br'
recognition.start()

recognition.addEventListener('result', oneSpeak)

function oneSpeak(e) {
    chute = (e.result[0] [0].transcript)
    exibeChuteNaTela(chute)
}

function exibeChuteNaTela(chute){
      elementoChute.innerHTML = `
      <div> Você disse:</div>
      <span class="box"> ${chute} </span>
      `
}