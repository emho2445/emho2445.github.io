const output = document.querySelector('.output');
let outputInt = parseInt(output.textContent);
console.log(outputInt);

const minusButton =  document.querySelector('.minusButton').addEventListener('click', minus);
const plusButton =  document.querySelector('.plusButton').addEventListener('click', plus);
const resetButton =  document.querySelector('.resetButton').addEventListener('click', reset);
const submitButton =  document.querySelector('.submitButton').addEventListener('click', submit);
const randomButton =  document.querySelector('.randomButton').addEventListener('click', random);

function check(){
    console.log('test');
}

function submit(){
    alert(output.textContent);
}

function reset(){
    outputInt = 0;
    output.textContent = outputInt;
    
}

function plus(){
    if (outputInt < 9999999999){
        outputInt ++;
        output.textContent = outputInt;
    }
}


function minus(){
    if (outputInt >0){
        outputInt --;
        output.textContent = outputInt;
    }
}

function randomNumber(min, max){
    const num = Math.floor(Math.random() * (max - min + 1) + min)
    return num;
}

function random(){
    outputInt = randomNumber(0, 9999999999);
    output.textContent = outputInt;
}

//Slider
var slider = document.getElementById("myRange");
const sliderSubmit = document.querySelector(".sliderSubmit").addEventListener('click', update);
var sliderOutput = document.querySelector(".slider-output");

function update(){
    sliderOutput.textContent = slider.value;
}