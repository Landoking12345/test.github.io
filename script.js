let cookies = 0;
let cookiesPerClick = 1;

const cookieElement = document.getElementById('cookie');
const scoreElement = document.getElementById('score');
const upgrade1Button = document.getElementById('upgrade1');
const upgrade2Button = document.getElementById('upgrade2');
const upgrade3Button = document.getElementById('upgrade3');

cookieElement.addEventListener('click', () => {
    cookies += cookiesPerClick;
    updateScore();
    checkUpgrades();
});

function updateScore() {
    scoreElement.textContent = `Cookies: ${cookies}`;
}

function checkUpgrades() {
    upgrade1Button.disabled = cookies < 10;
    upgrade2Button.disabled = cookies < 50;
    upgrade3Button.disabled = cookies < 100;
}

upgrade1Button.addEventListener('click', () => {
    if (cookies >= 10) {
        cookies -= 10;
        cookiesPerClick += 1;
        updateScore();
        checkUpgrades();
    }
});

upgrade2Button.addEventListener('click', () => {
    if (cookies >= 50) {
        cookies -= 50;
        cookiesPerClick += 5;
        updateScore();
        checkUpgrades();
    }
});

upgrade3Button.addEventListener('click', () => {
    if (cookies >= 100) {
        cookies -= 100;
        cookiesPerClick += 10;
        updateScore();
        checkUpgrades();
    }
});
