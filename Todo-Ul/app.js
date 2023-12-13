const add = document.querySelector('.btn');
const ul = document.querySelector('.ul');

const generateListItem = val => {
    const li = document.createElement('li');
    li.innerHTML = `${val} <input style="15px" type="radio"/> <button class="btn1"></button>`;
    ul.appendChild(li);
}

add.addEventListener('click', () => {
    const input = document.querySelector('input');
    generateListItem(input.value);
})