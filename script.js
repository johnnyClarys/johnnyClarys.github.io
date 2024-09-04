document.addEventListener('DOMContentLoaded', () => {
    // Met à jour les barres de compétence
    const skillBars = document.querySelectorAll('.skill-bar');
    skillBars.forEach(bar => {
        const level = bar.dataset.level;
        bar.style.width = `${level * 5}%`;
    });
});

// script.js
// script.js
document.addEventListener('DOMContentLoaded', () => {
    const dice = document.getElementById('diceImage');
    const number = document.getElementById('number');
    const clickText = document.getElementById('clickText');

    dice.addEventListener('click', () => {
        // Ajouter la classe d'animation pour faire tourner l'image
        dice.style.animation = 'rotateDice 1s ease';

        // Générer un résultat aléatoire entre 1 et 20
        const randomFace = Math.floor(Math.random() * 20) + 1;

        // Afficher le numéro au centre du dé
        number.textContent = randomFace;

        // Cacher le texte "Click on me"
        clickText.style.display = 'none';

        // Réinitialiser l'animation après la fin pour permettre de la rejouer
        dice.addEventListener('animationend', () => {
            dice.style.animation = '';
        }, { once: true }); // L'événement est écouté une seule fois
    });
});
