/* eslint-disable no-use-before-define */
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var SpeechRecognitionEvent =
  SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

var recognition = new SpeechRecognition();
recognition.lang = "fr-FR"; // en français
recognition.continous = true; // écoute continue
recognition.interimResults = true; // recupére les resultats intermédiaire - réécriture à la volé des mots

var output = document.querySelector(".output");

recognition.onstart = () => {
  console.log("onstart");
};

recognition.onerror = (evt) => {
  console.log(evt.error);
};


recognition.addEventListener("result", (evt) => {
  const text = [...evt.results].map((r) => r[0].transcript).join("");
  output.textContent = text;
});

recognition.addEventListener("end", () => recognition.start());

recognition.start();
