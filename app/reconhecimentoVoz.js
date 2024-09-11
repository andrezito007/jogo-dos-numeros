// Verifica se a API de reconhecimento de fala está disponível
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (!SpeechRecognition) {
  console.error('Speech Recognition API not supported.');
} else {
  const elementoChute = document.getElementById("chute");
  
  const recognition = new SpeechRecognition();
  recognition.lang = 'pt-BR'; // Use 'pt-BR' para português do Brasil
  recognition.interimResults = false; // Para não mostrar resultados intermediários
  recognition.maxAlternatives = 1; // Para obter apenas uma alternativa

  recognition.start();

  // Adiciona um ouvinte de eventos para processar o resultado da fala
  recognition.addEventListener('result', (e) => {
    const chute = e.results[0][0].transcript;
    exibeChuteNaTela(chute);
  });

  recognition.addEventListener('error', (e) => {
    console.error('Speech Recognition Error:', e.error);
  });

  recognition.addEventListener('end', () => {
    console.log('Speech recognition service disconnected');
    recognition.start(); // Reinicia o reconhecimento de fala se for interrompido
  });

  function oneSpeak(e) {
    chute = (e.result[0] [0].transcript)
    exibeChuteNaTela(chute)
    verificaValorChuteValido(chute)
}

  function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
      <div>Você disse:</div>
      <span class="box">${chute}</span>
    `;
  }
}
