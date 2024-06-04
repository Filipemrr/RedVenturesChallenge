document.addEventListener("DOMContentLoaded", function() {
    const apiUrl = 'http://localhost:3000/meals/broth';
    let activeCard = null;

    function createCard(data) {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <img src="${data.imageInactive}" alt="${data.name}" class="card-image">
            <h2 class="card-name">${data.name}</h2>
            <p class="card-description">${data.description}</p>
            <h2 class="card-price">US$ ${data.price}</h2>
        `;

        card.addEventListener('click', function() {
            if (activeCard) {
                activeCard.classList.remove('active');
                const prevImage = activeCard.querySelector('.card-image');
                prevImage.src = activeCard.dataset.imageInactive;

                const prevName = activeCard.querySelector('.card-name');
                prevName.classList.remove('active');

                const prevDescription = activeCard.querySelector('.card-description');
                prevDescription.classList.remove('active');

                const prevPrice = activeCard.querySelector('.card-price');
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

            activeCard = card;
        });

        card.dataset.imageInactive = data.imageInactive;
        card.dataset.imageActive = data.imageActive;

        return card;
    }

    function fetchBrothData() {
        fetch(apiUrl)
            .then(response => response.json())
            .then(responseData => {
                const data = responseData.data;
                console.log("Data received:", data);
                if (Array.isArray(data)) {
                    const container = document.getElementById('broth-cards');
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

    fetchBrothData();
});
