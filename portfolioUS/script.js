document.addEventListener('DOMContentLoaded', () => {
    // Mise à jour des barres de compétences
    const skillBars = document.querySelectorAll('.skill-bar');
    skillBars.forEach(bar => {
        const level = bar.dataset.level;
        bar.style.width = `${level * 5}%`;
    });

    const dice = document.getElementById('diceImage');
    const resultMessage = document.getElementById('resultMessage');
    const number = document.getElementById('number');
    const clickButton = document.getElementById('clickOnMe'); // bouton pour le jet

    // Fonction pour lancer le dé
    function rollDice() {
        // Ajouter la classe d'animation pour faire tourner l'image
        dice.style.animation = 'rotateDice 1s ease';

        // Générer un résultat aléatoire entre 1 et 20
        const randomFace = Math.floor(Math.random() * 20) + 1;

        // Afficher le numéro au centre du dé
        number.textContent = randomFace;

        // Réinitialiser l'animation après la fin pour permettre de la rejouer
        dice.addEventListener('animationend', () => {
            dice.style.animation = '';
        }, { once: true }); // L'événement est écouté une seule fois

        // Afficher le message en fonction du résultat
        if (randomFace === 20) {
            resultMessage.textContent = "WOUAWWW REUSSITE CRITIQUE";
              resultMessage.style.color = "green";
        } else if (randomFace >= 12) {
            resultMessage.textContent = "BRAVO action réussie !";
              resultMessage.style.color = "blue";
        } else if (randomFace === 1) {
            resultMessage.textContent = "FUMBLE !";
              resultMessage.style.color = "red";
        } else {
            resultMessage.textContent = "Dommage, relance";
              resultMessage.style.color = "orange";
        }
    }

    // Ajouter un événement de clic à l'image du dé
    dice.addEventListener('click', rollDice);

    // Ajouter un événement de clic au bouton
    clickButton.addEventListener('click', rollDice);
});
window.onload = function() {
    const tamponDiv = document.querySelector('.tampon');
    tamponDiv.style.opacity = 1;
};