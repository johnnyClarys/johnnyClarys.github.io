document.addEventListener('DOMContentLoaded', () => {
    // Met à jour les barres de compétence
    const skillBars = document.querySelectorAll('.skill-bar');
    skillBars.forEach(bar => {
        const level = bar.dataset.level;
        bar.style.width = `${level * 5}%`;
    });
});
