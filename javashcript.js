const play = document.getElementById('play');
const pause = document.getElementById('pause');

let toggle = () => {
    if(play.classList.contains('playdown') && pause.classList.contains('show')) {
        pause.classList.add('hide');
        play.classList.add('playup');
        pause.classList.remove('show');
        play.classList.remove('playdown');
    }
    else {
        play.classList.add('playdown');
        pause.classList.add('show')
        play.classList.remove('playup');
        pause.classList.remove('hide');
    }
};

play.addEventListener('click', toggle);
pause.addEventListener('click', toggle);