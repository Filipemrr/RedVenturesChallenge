document.addEventListener("DOMContentLoaded", function() {
    const apiUrl = 'http://localhost:3000/meals/protein';

    function createCard(data) {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <img src="${data.imageInactive}" alt="${data.name}">
            <h2 class="card-name">${data.name}</h2>
            <p class="card-description">${data.description}</p>
            <h2 class="card-price">US$ ${data.price}</h2>
        `;

        return card;
    }

    function fetchBrothData() {
        fetch(apiUrl)
            .then(response => response.json())
            .then(responseData => {
                const data = responseData.data;
                console.log("Data received:", data);
                if (Array.isArray(data)) {
                    const container = document.getElementById('protein-cards');
                    container.innerHTML = '';
                    data.forEach(item => {
                        const card = createCard(item);
                        container.appendChild(card);
                    });
                } else {
                    console.error('Data is not an array:', data);
                }
            })
            .catch(error => console.error('Error fetching data:', error));
    }

    // Chama a função para buscar os dados e gerar os cards
    fetchBrothData();
});