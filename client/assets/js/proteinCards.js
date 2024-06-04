document.addEventListener("DOMContentLoaded", function() {
    localStorage.clear();
    const proteinApiUrl = 'http://localhost:3000/meals/protein';
    let activeProteinCard = null;

    function createProteinCard(data) {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <img src="${data.imageInactive}" alt="${data.name}" class="card-image">
            <h2 class="card-name">${data.name}</h2>
            <p class="card-description">${data.description}</p>
            <h2 class="card-price">US$ ${data.price}</h2>
        `;

        card.addEventListener('click', function() {
            if (activeProteinCard) {
                activeProteinCard.classList.remove('active');
                const prevImage = activeProteinCard.querySelector('.card-image');
                prevImage.src = activeProteinCard.dataset.imageInactive;

                const prevName = activeProteinCard.querySelector('.card-name');
                prevName.classList.remove('active');

                const prevDescription = activeProteinCard.querySelector('.card-description');
                prevDescription.classList.remove('active');

                const prevPrice = activeProteinCard.querySelector('.card-price');
                prevPrice.classList.remove('active');
            }

            card.classList.add('active');
            const image = card.querySelector('.card-image');
            image.src = data.imageActive;

            const name = card.querySelector('.card-name');
            name.classList.add('active');

            const description = card.querySelector('.card-description');
            description.classList.add('active');

            const price = card.querySelector('.card-price');
            price.classList.add('active');

            activeProteinCard = card;

            // Salva o ID da proteína selecionada no localStorage
            localStorage.setItem('selectedProteinId', data.id);
        });

        card.dataset.imageInactive = data.imageInactive;
        card.dataset.imageActive = data.imageActive;

        return card;
    }

    function fetchProteinData() {
        fetch(proteinApiUrl)
            .then(response => response.json())
            .then(responseData => {
                const data = responseData.data;
                if (Array.isArray(data)) {
                    const container = document.getElementById('protein-cards');
                    container.innerHTML = '';
                    data.forEach(item => {
                        const proteinCard = createProteinCard(item);
                        container.appendChild(proteinCard);
                    });
                } else {
                    console.error('Data is not an array:', data);
                }
            })
            .catch(error => console.error('Error fetching data:', error));
    }

    fetchProteinData();
});
