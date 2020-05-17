var show = document.getElementById('show');
var box = document.getElementById('random-box');
var button = document.getElementById('button');
var icon = document.getElementById('icon');

var toggle = () => {
    if(box.className == 'show' && icon.classList.contains('turn')) {
        box.className = 'remove';
        icon.classList.add('unturn');
        icon.classList.remove('turn');
    } else {
        box.className = 'show';
        icon.classList.add('turn');
        icon.classList.remove('unturn');
    }
}

button.addEventListener('click', toggle);
button.addEventListener('mouseover', toggle)
button.addEventListener('mouseout', toggle);
box.addEventListener('mouseover', toggle)
box.addEventListener('mouseout', toggle);
button.addEventListener('blur', toggle);