//your JS code here. If required.
function playSound(soundFile) {
    var audio = new Audio('sounds/' + soundFile);
    audio.play();
}

function stopSound() {
    var audioElements = document.getElementsByTagName('audio');
    for (var i = 0; i < audioElements.length; i++) {
        audioElements[i].pause();
        audioElements[i].currentTime = 0;
    }
}
