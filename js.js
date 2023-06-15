let mode;

const slice = document.querySelector('#optionsContainer input');
slice.addEventListener('mousemove', updateSliceSizeText);

function updateSliceSizeText(){
document.querySelector('#optionsContainer h1 ').innerText = `size: ${slice.value}x${slice.value}`;
}


const generateButton = document.querySelector('#optionsContainer button').addEventListener('click', generateEtchASketchWithSizeInMind)



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



const clearButton =document.querySelectorAll('#optionsContainer2 button')[0];
clearButton.addEventListener('click', clearTheDrawing);

const eraseButton =document.querySelectorAll('#optionsContainer2 button')[1];
eraseButton.addEventListener('click', setToEraseMode);

const paintButton = document.querySelectorAll('#optionsContainer2 button')[2];
paintButton.addEventListener('click', setToPaintMode);


const rainbowButton = document.querySelectorAll('#optionsContainer2 button')[3];
rainbowButton.addEventListener('click', setToRainbowMode);

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

function setToPaintMode(){
mode = 'paint';
paintButton.classList.add('paintMode');
eraseButton.classList.remove('eraseMode');
rainbowButton.classList.remove('rainbowMode');
}

function setToEraseMode(){
mode = 'erase';
paintButton.classList.remove('paintMode');
eraseButton.classList.add('eraseMode');
rainbowButton.classList.remove('rainbowMode');
}

function setToRainbowMode(){
mode = 'rainbow';
paintButton.classList.remove('paintMode');
eraseButton.classList.remove('eraseMode');
rainbowButton.classList.add('rainbowMode');

}


function actionOverDrawing(e){
if(mode == 'paint'){
paint(e);}
else if(mode == 'erase'){
unPaint(e);
}
else{
paintRainbow(e);
}

}





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

