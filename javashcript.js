var show = document.getElementById('show');
var box = document.getElementById('random-box');
var button = document.getElementById('button');

var toggleBox = () => {
    if(box.className == 'show'){
        box.className = 'remove';
    } else{
        box.className = 'show';
    }
}

button.addEventListener('focus', toggleBox);
button.addEventListener('blur', toggleBox);