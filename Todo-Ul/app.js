const add = document.querySelector('.btn');
const input = document.querySelector('input');

setInterval(() => {
    document.getElementById('currentTime').innerText = new Date().toLocaleTimeString('en-Us', {timeStyle: 'short'});
    document.getElementById('currentDay').innerText = new Date().toLocaleDateString('en-US', {weekday: 'short'});
    document.getElementById('currentDate').innerText = new Date().toLocaleDateString('en-US', {day: 'numeric'});
}, 1000);

const data = localStorage.getItem('data');
let list = data ? JSON.parse(data) : [];

function generateListItem() {
    const ul = document.querySelector('#ul');
    if (list.length) {
        ul.innerHTML = '';
        list.forEach((el, i) => {
            const li = document.createElement('li');
            li.innerText = el;
            const div = document.createElement('div');
            const p = document.createElement('p');
            li.innerHTML = `${el.value}`;
            p.innerHTML = `${el.date}`;
            div.innerHTML = `<input id="checkbox" type="checkbox" ${ el.isChecked ? 'checked' : null} onchange="check(${i})"/> <button id="btn1" onclick="DeleteItem(${i})"></button>`;
            ul.appendChild(li);
            li.appendChild(p);
            li.appendChild(div);
        });
        return;
    }
    ul.innerHTML = '';
}

generateListItem();

function check(i) {
    list[i].isChecked = !list[i].isChecked;
    updateStorage(list);
    generateListItem();
}

function DeleteItem(i) {
    list.splice(i, 1);
    updateStorage(list);
    generateListItem();
}

add.addEventListener('click', () => {
    let {value} = document.querySelector('#note');
    const date = new Date().toLocaleTimeString('en-Us', {timeStyle: 'short'});
    list.push({ value, date, isChecked: false });
    document.querySelector('#note').value = '';
    updateStorage(list);
    generateListItem();
})

function updateStorage(list) {
    localStorage.setItem('data', JSON.stringify(list));
};