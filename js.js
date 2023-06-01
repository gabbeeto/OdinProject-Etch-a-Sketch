let mode;

const slice = document.querySelector('#optionsContainer input');
slice.addEventListener('mousemove', updateSliceSizeText);

function updateSliceSizeText(){
document.querySelector('#optionsContainer h1 ').innerText = `size: ${slice.value}x${slice.value}`;
}


const generateButton = document.querySelector('#optionsContainer button').addEventListener('click', generateEtchASketchWithSizeInMind)



function paint(e){
if(e.buttons == 1){
	e.target.classList.remove('notPainted');
	e.target.classList.add('painted');
}
}

function unPaint(e){
if(e.buttons == 1){
	e.target.classList.remove('painted');
	e.target.classList.add('notPainted');
}
}

const clearButton =document.querySelectorAll('#optionsContainer2 button')[0];
clearButton.addEventListener('click', clearTheDrawing);

const eraseButton =document.querySelectorAll('#optionsContainer2 button')[1];
eraseButton.addEventListener('click', setToEraseMode);

const paintButton = document.querySelectorAll('#optionsContainer2 button')[2];
paintButton.addEventListener('click', setToPaintMode);

function clearTheDrawing(){

const EASContainerItems = document.querySelectorAll('#EASContainer div');
for(let index = 0;EASContainerItems.length > index;index++){
if(EASContainerItems[index].className == 'painted'){
EASContainerItems[index].classList.remove('painted');
EASContainerItems[index].classList.add('notPainted');
}
}
}

function setToPaintMode(){
mode = 'paint';
}

function setToEraseMode(){
mode = 'erase';
}


function actionOverDrawing(e){
if(mode == 'paint'){
paint(e);}
else{
unPaint(e);
}

}




const EASContainer = document.querySelector('#EASContainer');

function generateEtchASketchWithSizeInMind(){
EASContainer.style.cssText = `grid-template-columns: repeat(${slice.value},1fr); grid-template-rows: repeat(${slice.value},1fr); `;

for(let index = 0; Number(slice.value * slice.value) > index; index++){
div = document.createElement('div');
div.id = `n${index}`;
div.classList.add('notPainted');
div.ondragstart = function () {return false};
EASContainer.appendChild(div);
}

EASContainer.addEventListener('mouseover',actionOverDrawing);
}

