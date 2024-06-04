document.addEventListener("DOMContentLoaded", function() {
    const placeOrderButton = document.querySelector('.place-order-button .button');

    placeOrderButton.addEventListener('click', function(event) {
        event.preventDefault();

        const selectedBrothId = localStorage.getItem('selectedBrothId');
        const selectedProteinId = localStorage.getItem('selectedProteinId');

        console.log("Place order button clicked!");
        console.log("Selected Broth ID:", selectedBrothId);
        console.log("Selected Protein ID:", selectedProteinId);
    });
});
