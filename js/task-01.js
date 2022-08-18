// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у спику ul#categories, знайде і виведе в консоль текст заголовку 
// елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// В результаті, в консолі будуть виведені наступні повідомлення.

const categoriesEl = document.querySelector('#categories');
const categoriesItems = categoriesEl.children;
console.log("Number of categories:", categoriesItems.length);


const categoryElements = document.querySelectorAll('.item');
for (let i = 0; i < categoryElements.length; i += 1) {
    const categoryEl = categoryElements[i].children;
    const categoryElTitle = categoryEl[0].textContent;
    const categoryElLength = categoryEl[1].querySelectorAll('li').length

    console.log("Category:", categoryElTitle);
    console.log("Elements:", categoryElLength);
}