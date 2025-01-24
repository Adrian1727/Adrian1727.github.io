
const card = document.querySelector('.card');

card.addEventListener('mousemove', (event) => {
    const { offsetWidth: width, offsetHeight: height } = card;
    const { offsetX: x, offsetY: y } = event;

    const rotateX = ((y / height) - 0.10) * 20; 
    const rotateY = ((x / width) - 0.10) * -20; 

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0) rotateY(0)';
});
