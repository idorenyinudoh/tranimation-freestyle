var show = document.getElementById('show');
var box = document.getElementById('random-box');
var button = document.getElementById('button');

button.addEventListener('focus', () => {
    box.className = 'show';
}, false);