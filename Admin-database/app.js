const initData = async () => {
    const {data} = await fetch('./data.json').then(response => response.json());
    console.log(data);

    const table = document.querySelector('table');

    for (const course of data) {
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <td><input type="checkbox"></td>
        <td id="title">${course.Title}</td>
        <td>${course.Date}</td>
        <td>${course.Title1}</td>
        <td class="amount">${course.Amount}</td>
        <td class="status">${course.Status}</td>
        `;
        table.appendChild(tr);
    }
    
};

initData();