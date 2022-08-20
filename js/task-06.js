
// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), 
// перевіряє його вміст щодо правильної кількості введених символів.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Яка кількість смиволів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }


// document.getElementById("validation-input").onblur = function () {
//     console.log(this.value.length);
//     if (this.getAttribute("data-length") > this.value.length) {
//       this.classList.remove("valid");
//       this.classList.add("invalid");
//     } else {
//       this.classList.remove("invalid");
//       this.classList.add("valid");
//     }
//   };

const input = document.querySelector('#validation-input');
input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
const inputText = event.currentTarget;
const InputLength = Number(inputText.dataset.length);

if (inputText.value.length === InputLength) {
    input.classList.add('valid');
    input.classList.remove('invalid');
}
else {
    input.classList.add('invalid');
    input.classList.remove('valid');
}
} 


