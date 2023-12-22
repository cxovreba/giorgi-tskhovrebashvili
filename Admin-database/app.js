const initData = async () => {
    const { data } = await fetch('./data.json').then(response => response.json());
    console.log(data);
    const sortTitles = (data) => {
        data.sort(function (a, b) {
            const titleA = a.Title.toLowerCase();
            const titleB = b.Title.toLowerCase();
            if (titleA < titleB) {
                return -1;
            }
            if (titleA > titleB) {
                return 1;
            }
            return 0;
        });

        return data;
    }

    const table = document.querySelector('table');
    const sortButton = document.getElementById('button1');
    const reverseButton = document.getElementById('button2');

    const renderTable = (data) => {
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
    }
    
    renderTable(data);
    sortButton.addEventListener("click", () => {
        table.innerHTML = `<tr>
        <th><input type="checkbox"></th>
        <th id="title">
            Title 
            <div class="button">
                <button id="button1"><img src="./ant-design_caret-up-filled.png" alt=""></button>
                <button id="button2"><img src="./ant-design_caret-down-filled.png" alt=""></button>
            </div>
        </th>
        <th>Date</th>
        <th>title</th>
        <th class="amount">amount</th>
        <th class="status1">status</th>
    </tr>`;
        sortTitles(data);
        renderTable(data);
    })

};

initData();