// --- VARIABLES ---
const screenWelcome = document.getElementById('screen-welcome');
const screenQuestion = document.getElementById('screen-question');
const screenFinal = document.getElementById('screen-final');

const btnYes = document.getElementById('btn-yes');
const btnNo = document.getElementById('btn-no');

// ESTA LÍNEA ES NUEVA: Buscamos la imagen del gato
const catImage = document.getElementById('cat-image');

// Variables para el juego del botón
let fontSize = 1.2;
let messages = [
    '¿Segura?',
    'Piénsalo bien...',
    'Mira que soy yo 🥺',
    '¡No me hagas esto!',
    '¡Dale al verde!',
    'Voy a llorar...',
    'Se me rompe el corazón 💔',
    'Anda, di que sí ❤️'
];

// --- FUNCIONES ---

// 1. Pasar de la carta a la pregunta
function goToQuestion() {
    screenWelcome.style.display = 'none';
    screenQuestion.classList.remove('hidden');
    screenQuestion.classList.add('fade-in');
}

// 2. Lógica del Botón NO (Crece el botón SÍ y CAMBIA EL GIF)
btnNo.addEventListener('click', () => {
    // Aumentar tamaño del botón SÍ
    fontSize += 0.5;
    btnYes.style.fontSize = `${fontSize}rem`;
    btnYes.style.padding = `${fontSize * 0.5}rem ${fontSize * 1.5}rem`;

    // Cambiar texto del botón NO aleatoriamente
    const randomIndex = Math.floor(Math.random() * messages.length);
    btnNo.textContent = messages[randomIndex];

    // AQUÍ ES LA MAGIA: Cambiamos al gif llorando
    catImage.src = 'gatito_llorando.gif';
});

// 3. Lógica del Botón SÍ (Final feliz)
btnYes.addEventListener('click', () => {
    screenQuestion.style.display = 'none';
    screenFinal.classList.remove('hidden');
    screenFinal.classList.add('fade-in');

    // Lanza el confeti
    lanzarConfeti();
});

// Función de Confeti
function lanzarConfeti() {
    var duration = 3 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function() {
        var timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        var particleCount = 50 * (timeLeft / duration);
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);
}