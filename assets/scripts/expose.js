// expose.js
//import JSConfetti from 'js-confetti'

const jsConfetti = new JSConfetti();

window.addEventListener('DOMContentLoaded', init);

function init() {
  // Get reference to corresponding elements
  const hornSelect = document.getElementById("horn-select");
  const img = document.querySelector("img")
  const audio = document.querySelector("audio")
  console.log(hornSelect);
  hornSelect.addEventListener('change', function(){
    console.log("hi3")
    // Get the selected horn value
    const hornValue = hornSelect.value;

    if (hornValue == "air-horn") {
      img.src = "assets/images/air-horn.svg";
      audio.src = "assets/audio/air-horn.mp3";
    }
    else if (hornValue == "car-horn") {
      img.src = "assets/images/car-horn.svg";
      audio.src = "assets/audio/car-horn.mp3";
    }
    else if (hornValue == "party-horn") {
      img.src = "assets/images/party-horn.svg";
      audio.src = "assets/audio/party-horn.mp3";
    }
    else {
      img.src = "assets/images/no-image.png";
    }
  });
  

  const volumeControl = document.getElementById("volume-controls");

  volumeControl.addEventListener('input', function(){
    const volumeValue = volumeControl.getElementsByTagName("input")[0].value;
    const img = volumeControl.getElementsByTagName("img")[0];
    
    if(volumeValue == 0) {
      img.src = "assets/icons/volume-level-0.svg";

    }
    else if (1 <= volumeValue && volumeValue < 33) {
      img.src ="assets/icons/volume-level-1.svg";
    }
    else if (33 <= volumeValue && volumeValue < 67) {
      img.src ="assets/icons/volume-level-2.svg";
    }
    else {
      img.src ="assets/icons/volume-level-3.svg";
    }
  });

  // Get reference to the play sound button
  const playButton = document.querySelector('button');
  // Listen for lcicks on the Play Sound button
  playButton.addEventListener('click', function(){ 
    if (hornSelect.value == "party-horn"){
      jsConfetti.addConfetti();
    }
    audio.volume = volumeControl.getElementsByTagName("input")[0].value / 100;
    audio.play();
  });

}

