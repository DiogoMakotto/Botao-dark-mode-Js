function changeMode() {
    console.log('Teste evento');
}

const button = document.getElementById('mode-selector');

button.addEventListener('click', changeMode);