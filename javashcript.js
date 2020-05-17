var show = document.getElementById('show');
var box = document.getElementById('random-box');
var button = document.getElementById('button');
var icon = document.getElementById('icon');

var toggleBox = () => {
    if(box.className == 'show'){
        box.className = 'remove';
    } else{
        box.className = 'show';
    }
}
var toggleTurn = () => {
    if(icon.classList.contains('turn')){
        icon.classList.add('unturn');
        icon.classList.remove('turn');
    } else{
        icon.classList.add('turn');
        icon.classList.remove('unturn');
    }
}

button.addEventListener('focus', toggleBox);
button.addEventListener('focus', toggleTurn);
button.addEventListener('blur', toggleBox);
button.addEventListener('blur', toggleTurn);