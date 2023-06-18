let mode;

const slice = document.querySelector('#optionsContainer input');
slice.addEventListener('mousemove', updateSliceSizeText);

function updateSliceSizeText(){
document.querySelector('#optionsContainer h2 ').innerText = `size: ${slice.value}x${slice.value}`;
}



let optionsContainer3 = document.querySelector('#optionsContainer3');

let optionsContainerInputs = document.querySelectorAll('#optionsContainer3 input');
let optionsContainerSpans = document.querySelectorAll('#optionsContainer3 h2 span');

let smallDiv = document.querySelector('#smallSquare')

document.addEventListener('mousemove',updateOptionContainerAndColor)
function updateOptionContainerAndColor(){

if(mode == "color"){
optionsContainer3.style.display = 'flex';
}
else{
optionsContainer3.style.display = 'none';
}

optionsContainerSpans[0].innerText = optionsContainerInputs[0].value;
optionsContainerSpans[2].innerText = optionsContainerInputs[1].value;
optionsContainerSpans[4].innerText = optionsContainerInputs[2].value;

smallDiv.style.backgroundColor = `hsl(${optionsContainerInputs[0].value}, ${optionsContainerInputs[1].value}%, ${optionsContainerInputs[2].value}%)`;
}




const generateButton = document.querySelector('#optionsContainer button').addEventListener('click', generateEtchASketchWithSizeInMind)


const EASContainer = document.querySelector('#EASContainer');

function generateEtchASketchWithSizeInMind(){
clearTheDrawing();
document.querySelector('footer').style.cssText = 'display: flex'
document.querySelector('#optionsContainer2').style.cssText = 'display: flex';
EASContainer.style.cssText = `display: grid; grid-template-columns: repeat(${slice.value},1fr); grid-template-rows: repeat(${slice.value},1fr); `;
for(let index = 0; Number(slice.value * slice.value) > index; index++){
div = document.createElement('div');
div.id = `n${index}`;
div.classList.add('notPainted');
div.ondragstart = function () {return false};
EASContainer.appendChild(div);
}
EASContainer.addEventListener('mouseover',actionOverDrawing);
}



function clearTheDrawing(){

const EASContainerItems = document.querySelectorAll('#EASContainer div');
for(let index = 0;EASContainerItems.length > index;index++){
if(EASContainerItems[index].className == 'painted'){
EASContainerItems[index].classList.remove('painted');
EASContainerItems[index].classList.add('notPainted');
}
EASContainerItems[index].style.cssText = "";
}
}



function paint(e){
if(e.buttons == 1 && e.target != EASContainer){
	e.target.classList.remove('notPainted');
	e.target.classList.add('painted');
  e.target.style.cssText = '';
}
}

function unPaint(e){
if(e.buttons == 1 && e.target != EASContainer){
	e.target.classList.remove('painted');
	e.target.classList.add('notPainted');
  e.target.style.cssText = '';
}
}


let randomNumber;
function paintRainbow(e){
randomNumber = Math.round(Math.random() * 360);
if(e.buttons == 1 && e.target != EASContainer){
e.target.style.cssText= `background-color:hsl(${randomNumber}, 100%, 50%)`;
}

}


//todo
function paintCustomColor(e){
if(e.buttons == 1 && e.target != EASContainer){
e.target.style.backgroundColor = `hsl(${optionsContainerInputs[0].value}, ${optionsContainerInputs[1].value}%, ${optionsContainerInputs[2].value}%)`
}

}



const clearButton =document.querySelectorAll('#optionsContainer2 button')[0];
clearButton.addEventListener('click', clearTheDrawing);

const eraseButton =document.querySelectorAll('#optionsContainer2 button')[1];
eraseButton.addEventListener('click', setToEraseMode);

const paintButton = document.querySelectorAll('#optionsContainer2 button')[2];
paintButton.addEventListener('click', setToPaintMode);


const rainbowButton = document.querySelectorAll('#optionsContainer2 button')[3];
rainbowButton.addEventListener('click', setToRainbowMode);


const colorButton = document.querySelectorAll('#optionsContainer2 button')[4];
colorButton.addEventListener('click', setToColorMode);


function setToPaintMode(){
mode = 'paint';
paintButton.classList.add('paintMode');
eraseButton.classList.remove('eraseMode');
colorButton.classList.remove('colorMode');
rainbowButton.classList.remove('rainbowMode');
}

function setToEraseMode(){
mode = 'erase';
paintButton.classList.remove('paintMode');
eraseButton.classList.add('eraseMode');
colorButton.classList.remove('colorMode');
rainbowButton.classList.remove('rainbowMode');
}

function setToRainbowMode(){
mode = 'rainbow';
paintButton.classList.remove('paintMode');
eraseButton.classList.remove('eraseMode');
colorButton.classList.remove('colorMode');
rainbowButton.classList.add('rainbowMode');
}

function setToColorMode(){
mode = 'color';
paintButton.classList.remove('paintMode');
eraseButton.classList.remove('eraseMode');
rainbowButton.classList.remove('rainbowMode');
colorButton.classList.add('colorMode');
}


function actionOverDrawing(e){
if(mode == 'paint'){
paint(e);}
else if(mode == 'erase'){
unPaint(e);
}
else if(mode == 'rainbow'){
paintRainbow(e);
}
else{
paintCustomColor(e);
}

}






