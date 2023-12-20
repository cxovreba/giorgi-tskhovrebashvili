const initData = async () => {
    const data = await fetch('./data.json').then(response => response.json());
    console.log(data);

    const table = document.querySelector('table');
    const tr = document.createElement('tr');
    const td = document.createElement('td')

    table.appendChild('tr');
    tr.appendChild('td');
    td.innerText = data[0].Title;
};

initData();