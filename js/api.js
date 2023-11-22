const search = document.getElementById('search');
const main = document.querySelector('main'); // main elementini querySelector orqali tanlangan qilib olamiz

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
}
