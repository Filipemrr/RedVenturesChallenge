document.addEventListener("DOMContentLoaded", function() {
    const brothApiUrl = 'http://localhost:3000/meals/broth';
    let activeBrothCard = null;

    function createBrothCard(data) {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <img src="${data.imageInactive}" alt="${data.name}" class="card-image">
            <h2 class="card-name">${data.name}</h2>
            <p class="card-description">${data.description}</p>
            <h2 class="card-price">US$ ${data.price}</h2>
        `;

        card.addEventListener('click', function() {
            if (activeBrothCard) {
                activeBrothCard.classList.remove('active');
                const prevImage = activeBrothCard.querySelector('.card-image');
                prevImage.src = activeBrothCard.dataset.imageInactive;

                const prevName = activeBrothCard.querySelector('.card-name');
                prevName.classList.remove('active');

                const prevDescription = activeBrothCard.querySelector('.card-description');
                prevDescription.classList.remove('active');

                const prevPrice = activeBrothCard.querySelector('.card-price');
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

            activeBrothCard = card;

            // Salva o ID do caldo selecionado no localStorage
            localStorage.setItem('selectedBrothId', data.id);
        });

        card.dataset.imageInactive = data.imageInactive;
        card.dataset.imageActive = data.imageActive;

        return card;
    }

    function fetchBrothData() {
        fetch(brothApiUrl)
            .then(response => response.json())
            .then(responseData => {
                const data = responseData.data;
                if (Array.isArray(data)) {
                    const container = document.getElementById('broth-cards');
                    container.innerHTML = '';
                    data.forEach(item => {
                        const brothCard = createBrothCard(item);
                        container.appendChild(brothCard);
                    });
                } else {
                    console.error('Data is not an array:', data);
                }
            })
            .catch(error => console.error('Error fetching data:', error));
    }

    fetchBrothData();
});
