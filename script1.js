const form = document.getElementById('form-sign');
const birthdayInputs = document.getElementById('birthday-inputs');

const dayInput = document.createElement('input');
dayInput.classList.add('birthday-inputs');
dayInput.setAttribute('type', 'number');
dayInput.setAttribute('min', '1');
dayInput.setAttribute('max', '31');