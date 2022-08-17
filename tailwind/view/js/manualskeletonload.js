const intro = document.querySelector('.intro-text');
const renderCard = () => {
    intro.textContent = 'Card Title Yo!';
    intro.classList.remove('loading');
};

setTimeout(() => {
    renderCard();
}, 2500);