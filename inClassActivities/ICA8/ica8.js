let paragraph = document.querySelector('div');

let image = document.querySelector('img');

paragraph.addEventListener('click', textColor);

image.addEventListener('mouseover', imgColor);
image.addEventListener('mouseout', imgRestore)

function imgColor(){
    image.style.opacity = "0.5";
}

function imgRestore(){
    image.style.opacity = "1.0";
}

function random(number){
    return Math.floor(Math.random() * (number+1));
}

function textColor(){
    var rndColor = `rgb(${random(255)},${random(255)},${random(255)}`;
    paragraph.style.backgroundColor = rndColor;
}