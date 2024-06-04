document.addEventListener("DOMContentLoaded", function() {
    const orderDataJSON = localStorage.getItem('orderData');
    const orderData = JSON.parse(orderDataJSON);

    if (orderData) {
        const { id, description, image } = orderData;

        function createOrderImage(data) {
            const imageContainer = document.createElement('div');
            imageContainer.classList.add('order-image');

            imageContainer.innerHTML = `
                <img src="${data.image}" alt="${data.description}" class="order-image__img">
                <p class="section__title" style="color: #fafaed; font-size: 24px; font-weight: bolder; padding: 0">Your Order:</p>
                <h2 class="section__title" style="color: #FFC024">${data.description}</h2>
            `;

            return imageContainer;
        }

        const orderImage = createOrderImage(orderData);
        const targetContainer = document.getElementById('order-image-container');  // Get the target container

        if (targetContainer) {
            targetContainer.appendChild(orderImage);
        } else {
            console.warn("Target container with ID 'order-image-container' not found.");
        }
    } else {
        console.log("No order data found in localStorage.");
    }

    const placeNewOrderButton = document.getElementById('place-new-order-btn');

    if (placeNewOrderButton) {
        placeNewOrderButton.addEventListener('click', function() {
            window.location.href = 'index.html';  // Redirect to index.html
        });
    } else {
        console.warn("Place new order button not found.");
    }
});
