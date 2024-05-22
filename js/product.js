document.addEventListener('DOMContentLoaded', () => {
    const minusButton = document.querySelector('.minus');
    const plusButton = document.querySelector('.plus');
    const Input = document.querySelector('.quantity');
    minusButton.addEventListener('click', () => {
        let currentValue = parseInt(Input.value);
        if (currentValue > parseInt(Input.min)) {
            Input.value = currentValue - 1;
        }
    });
    plusButton.addEventListener('click', () => {
        let currentValue = parseInt(Input.value);
        Input.value = currentValue + 1;
    });
}); 