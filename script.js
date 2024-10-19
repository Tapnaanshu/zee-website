document.getElementById('noButton').addEventListener('mouseover', moveButton);

function moveButton() {
    const noButton = document.getElementById('noButton');
    const container = document.querySelector('.container');
    
    const x = Math.random() * (container.clientWidth - noButton.clientWidth);
    const y = Math.random() * (container.clientHeight - noButton.clientHeight);
    
    noButton.style.position = 'absolute';
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
}

// Firework and balloon animation for the "Yes" button click in plans.html
function showCelebration() {
    const container = document.getElementById('celebration-container');
    container.innerHTML = '';

    // Fireworks
    for (let i = 0; i < 50; i++) {
        const firework = document.createElement('div');
        firework.className = 'firework';
        firework.style.left = Math.random() * 100 + 'vw';
        firework.style.top = Math.random() * 100 + 'vh';
        firework.style.width = Math.random() * 10 + 5 + 'px';
        firework.style.height = firework.style.width;
        container.appendChild(firework);

        setTimeout(() => {
            firework.remove();
        }, 2000);
    }

    // Balloons
    for (let i = 0; i < 30; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.left = Math.random() * 100 + 'vw';
        balloon.style.bottom = '-50px';
        balloon.style.animationDelay = Math.random() * 2 + 's';
        container.appendChild(balloon);
    }
}
