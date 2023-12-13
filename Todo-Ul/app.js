const add = document.querySelector('.btn');
const ul = document.querySelector('.ul');

const date = new Date();
date.getDate();
date.getTime();

const generateListItem = val => {
    const li = document.createElement('li');
    li.innerHTML = `${val} <input type="checkbox"/> <button class="btn1"></button>`;
    ul.appendChild(li);
}

add.addEventListener('click', () => {
    const input = document.querySelector('input');
    generateListItem(input.value);
})