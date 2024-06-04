document.addEventListener("DOMContentLoaded", function() {
    const placeOrderButton = document.querySelector('.place-order-button .button');
    const errorMessage = document.querySelector('.place-order-button .error-message');

    placeOrderButton.addEventListener('click', function(event) {
        event.preventDefault();

        function postOrder(brothId, proteinId) {
            const url = 'http://localhost:3000/orders';
            const data = {
                brothId: brothId,
                proteinId: proteinId
            };

            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                    if (data.statusCode === 200) {
                        localStorage.setItem('orderData', JSON.stringify(data.data));
                        window.location.href = 'order-success.html';
                    } else {
                        console.error('Erro na resposta:', data.message);
                    }
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }

        const selectedBrothId = localStorage.getItem('selectedBrothId');
        const selectedProteinId = localStorage.getItem('selectedProteinId');

        if (selectedBrothId && selectedProteinId) {
            postOrder(selectedBrothId, selectedProteinId);
        } else {
            errorMessage.style.display = 'block';
            setTimeout(() => {
                errorMessage.style.display = 'none';
            }, 3000);
        }
    });
});