function changeMode() {
    changeClasses();
    changeText();
}

function changeClasses() {
    button.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
	body.classList.toggle(darkModeClass);
}

function changeText() {
	const lightMode = 'Modo claro';
	const darkMode = 'Modo escuro';
    
    if (body.classList.contains(darkModeClass)) {
		button.innerHTML = lightMode;
		h1.innerHTML = darkMode + ' Ativo';
		return;
    }

    button.innerHTML = darkMode;
	h1.innerHTML = lightMode + ' Ativo';
}

const darkModeClass = 'dark-mode';
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];



button.addEventListener('click', changeMode);