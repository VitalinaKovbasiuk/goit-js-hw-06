// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) 
// і змінює інлайн-стиль span#text, оновлюючи властивість font-size. 
// В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>


const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");
input.addEventListener("input", handleInputRange);
function handleInputRange(event) {
  span.style.fontSize = event.currentTarget.value + "px";
}


// const inputEl = document.querySelector('#font-size-control');
// const textEl = document.querySelector('#text');

// inputEl.addEventListener('input', onFontSizeControl);

// function onFontSizeControl(event) {
//     const fontSize = this.value;
//     textEl.style.fontSize = `${fontSize}px`;
// }


// const inputRef = document.querySelector('#font-size-control');
// const spanRef = document.querySelector('#text');

// inputRef.addEventListener('input', OnInputChange);

// function OnInputChange(event) {   
//     spanRef.style.fontSize = `${inputRef.value}px`;
// }