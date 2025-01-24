const card1 = document.querySelector('.card1');

card1.addEventListener('mousemove', (event) => {
    const { offsetWidth: width, offsetHeight: height } = card1;
    const { offsetX: x, offsetY: y } = event;

    const rotateX = ((y / height) - 0.10) * 20; 
    const rotateY = ((x / width) - 0.10) * -20; 

    card1.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

card1.addEventListener('mouseleave', () => {
    card1.style.transform = 'rotateX(0) rotateY(0)';
});