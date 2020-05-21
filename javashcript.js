const play = document.getElementById('play');
const pause = document.getElementById('pause');

play.addEventListener('click', () => {
    play.classList.add('turn');
    pause.classList.add('move');
})