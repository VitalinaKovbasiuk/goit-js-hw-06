// Лічильник складається зі спану і кнопок, 
// які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Створи змінну counterValue, в якій буде зберігатися поточне 
// значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй 
// або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.


const counterValue = {
    value: 0,
    increment() {
        this.value +=1;
    },
    decrement() {
        this.value -=1; 
    }
};

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');

console.log(decrementBtn);
console.log(incrementBtn);
console.log(valueEl);

decrementBtn.addEventListener('click', function() {
    // console.log('Click decrement');

    counterValue.decrement();
    // console.log(counterValue);

    valueEl.textContent = counterValue.value;
});

incrementBtn.addEventListener('click', function() {
    // console.log('Click increment');

    counterValue.increment();
    // console.log(counterValue);

    valueEl.textContent = counterValue.value;
});

