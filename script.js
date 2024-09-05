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
    const clickText = document.getElementById('clickOnMe'); // bouton pour le texte

    dice.addEventListener('click', () => {
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

        // Cacher le texte du bouton après un clic
        clickText.style.display = 'none';

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
    });
});
