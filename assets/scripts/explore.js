// explore.js

window.addEventListener('DOMContentLoaded', init);


const dropDown = document.querySelector("select");

const img = document.querySelector("img");
let voices = null;


function init() {

  
  speechSynthesis.addEventListener("voiceschanged", function(){
  
    voices = speechSynthesis.getVoices();
  
    for (let i=0; i < voices.length; i++){
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      dropDown.appendChild(option);
    }
  });
  


  const talkButton = document.querySelector("button");

  talkButton.addEventListener('click', function(){
    const utterText = document.getElementById("text-to-speak").value;
    const utterThis = new SpeechSynthesisUtterance(utterText);
    const selectedVoice = dropDown.getAttribute("data-name");

    for(var i=0; i < voices.length; i++){
      if(selectedVoice == voices[i].name) {
        utterThis.voice = voices[i];
      }
    }
    speechSynthesis.speak(utterThis);
    console.log("run speak");
    img.src = "assets/images/smiling-open.png";
    

    utterThis.addEventListener("end", function(){
      img.src = "assets/images/smiling.png";
    });

  });

}