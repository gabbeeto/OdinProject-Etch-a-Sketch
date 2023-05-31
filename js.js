const input = document.querySelector('#optionsContainer input');
input.addEventListener('mousemove', updateSizeSlice);



function updateSizeSlice(){
document.querySelector('#optionsContainer h1 ').innerText = `size: ${input.value}x${input.value}`;

}

updateButton = document.querySelector('#optionsContainer button').addEventListener('click', updateEtchASketchSize)




const EASContainer = document.querySelector('#EASContainer');
function updateEtchASketchSize(){
EASContainer.style.cssText = `grid-template-columns: repeat(${input.value},1fr); grid-template-rows: repeat(${input.value},1fr); `;

for(let index = 0; Number(input.value * input.value) > index; index++){
div = document.createElement('div');
div.id = `n${index}`;
div.classList.add('notPainted');
EASContainer.appendChild(div);
}

EASContainer.addEventListener('mouseover',function (e){if(e.buttons == 1){e.target.classList.remove('notPainted'); e.target.classList.add('painted');}} )
}

