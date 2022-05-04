function changeMode() {
    
}

const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];

console.log(body);

button.addEventListener('click', changeMode);