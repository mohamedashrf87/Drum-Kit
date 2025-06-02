window.addEventListener('keydown', function(e) {
    const keyElement = document.querySelector(`.key-box[data-key="${e.key}"]`);
    if (keyElement) {
        keyElement.classList.add('playing');
        const audio = document.querySelector(`.key-audio[data-key="${e.key}"]`);
        audio.currentTime = 0;
        audio.play();
    }
});

window.addEventListener('keyup', function(e) {
    const keyElement = document.querySelector(`.key-box[data-key="${e.key}"]`);
    if (keyElement) {
        keyElement.classList.remove('playing');
    }
});