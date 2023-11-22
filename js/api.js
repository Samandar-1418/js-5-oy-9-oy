const searchInput = document.getElementById('search');
const main = document.querySelector('main'); 

document.addEventListener('DOMContentLoaded', function () {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then((response) => {
            return response.json();
        })
        .then((dataJson) => {
            localStorage.setItem('data', JSON.stringify(dataJson));
            container(dataJson);
        })
        .catch((error) => {
            console.error(error);
        });
});

function container(dataJson) {
    let add = '';

    dataJson.forEach((data) => {
        let card = `
            <div class="div">
                <p>ID: ${data.id}</p>
                <p>Name: ${data.name}</p>
                <p>Email: ${data.email}</p>
            </div>
        `;
        add += card;
    });
    main.innerHTML = add;

    searchInput.addEventListener('input', function () {
        let inputValue = this.value;
        let filteredData = dataJson.filter(el => {
            return el.name.includes(inputValue) || el.email.includes(inputValue);
        });
        updateContainer(filteredData);
    });
}

function updateContainer(data) {
    let add = '';

    data.forEach((item) => {
        let card = `
            <div class="div">
                <p>ID: ${item.id}</p>
                <p>Name: ${item.name}</p>
                <p>Email: ${item.email}</p>
            </div>
        `;
        add += card;
    });
    main.innerHTML = add;
}
