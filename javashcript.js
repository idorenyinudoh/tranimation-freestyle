const play = document.getElementById('play');
const pause = document.getElementById('pause');

let toggle = () => {
    if(play.classList.contains('playdown') && pause.classList.contains('movedown')) {
        pause.classList.add('moveup');
        play.classList.add('playup');
        pause.classList.remove('movedown');
        play.classList.remove('playdown');
    }
    else {
        play.classList.add('playdown');
        pause.classList.add('movedown');
        play.classList.remove('playup');
        pause.classList.remove('moveup');
    }
};

play.addEventListener('click', toggle);
pause.addEventListener('click', toggle);