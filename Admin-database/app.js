const initData = async () => {
    const { data } = await fetch('./data.json').then(response => response.json());
    console.log(data);

    const sortTitles = (data) => {
        return data.sort((a, b) => a.Title.toLowerCase().localeCompare(b.Title.toLowerCase()));
    };

    const reverseTitles = (data) => {
        return data.sort((a, b) => b.Title.toLowerCase().localeCompare(a.Title.toLowerCase()));
    };

    const table = document.querySelector('table');

    const renderTable = (data) => {
        table.innerHTML = `<tr>
            <th><input type="checkbox"></th>
            <th id="title">
                Title
                <input id="search" type="text" placeholder="search name..."> 
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
        
        for (const course of data) {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td><input type="checkbox"></td>
                <td>${course.Title}</td>
                <td>${course.Date}</td>
                <td>${course.Title1}</td>
                <td class="amount">${course.Amount}</td>
                <td class="status">${course.Status}</td>
            `;
            table.appendChild(tr);
        }

        // Reattach event listeners
        document.getElementById('button1').addEventListener("click", sortData);
        document.getElementById('button2').addEventListener("click", reverseData);
    }

    const sortData = () => {
        renderTable(sortTitles([...data]));
    }

    const reverseData = () => {
        renderTable(reverseTitles([...data]));
    }
    
    renderTable(data);

    document.getElementById('button1').addEventListener("click", sortData);
    document.getElementById('button2').addEventListener("click", reverseData);

    const search = document.getElementById("search");

    const filterData = (searchTerm) => {
        const filteredData = data.filter(course =>
            course.Title.toLowerCase().includes(searchTerm.toLowerCase())
        );
  
        const filteredHTML = filteredData.map(course => `
            <tr>
                <td><input type="checkbox"></td>
                <td>${course.Title}</td>
                <td>${course.Date}</td>
                <td>${course.Title1}</td>
                <td class="amount">${course.Amount}</td>
                <td class="status">${course.Status}</td>
            </tr>
        `).join('');

        const tableRows = table.querySelectorAll('tr');
        for (let i = 1; i < tableRows.length; i++) {
            tableRows[i].remove();
        }
        
        table.insertAdjacentHTML('beforeend', filteredHTML);
    };

    search.addEventListener("input", () => {
        const searchTerm = search.value.trim();
        filterData(searchTerm);
    });
};

initData();