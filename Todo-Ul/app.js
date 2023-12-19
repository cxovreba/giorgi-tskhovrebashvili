const add = document.querySelector('.btn');
const ul = document.querySelector('#ul');

setInterval(() => {
    document.getElementById('currentTime').innerText = new Date().toLocaleTimeString('en-Us', {timeStyle: 'short'});
    document.getElementById('currentDay').innerText = new Date().toLocaleDateString('en-US', {weekday: 'short'});
    document.getElementById('currentDate').innerText = new Date().toLocaleDateString('en-US', {day: 'numeric'});
}, 1000);

let counter = 0;

const generateListItem = val => {
    const li = document.createElement('li');
    const div = document.createElement('div');
    const p = document.createElement('p');
    li.classList.add(`li-${counter++}`);
    li.innerHTML = `${val}`;
    ul.appendChild(li);
    div.innerHTML = `<input class="checkbox" type="checkbox"/> <button class="btn1" onclick="Delete(this)"></button>`;
    li.appendChild(p);
    li.appendChild(div);
    p.innerHTML = `${new Date().toLocaleTimeString('en-Us', {timeStyle: 'short'})}`;
}

add.addEventListener('click', () => {
    const input = document.querySelector('input');
    generateListItem(input.value);
    input.value = '';
})

input.addEventListener('blur', () => {
    this.classList.add('typing');
})

function Delete(btn) {
    const listItem = btn.closest('li');
    if (listItem) {
        ul.removeChild(listItem);
    }
}