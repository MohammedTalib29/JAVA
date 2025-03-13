function fetchData() {
    fetch("http://localhost:5000/data")
    .then(response => response.json())
    .then(data => {
        const tableBody = document.getElementById("data-table");
        tableBody.innerHTML = ""; // Clear existing data

        data.forEach(item => {
            const row = `<tr>
                            <td>${item.Period}</td>
                            <td>${item.Birth_Death}</td>
                            <td>${item.Region}</td>
                            <td>${item.Count}</td>
                        </tr>`;
            tableBody.innerHTML += row;
        });
    })
    .catch(error => console.error("Error fetching data:", error));
}