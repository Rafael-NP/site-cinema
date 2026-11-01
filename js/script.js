const btn18 = document.getElementById('btn18');
const btn20 = document.getElementById('btn20');
const btnNao = document.getElementById('btnNao');

const musica = new Audio('./assets/musica.mpeg');
const fah = new Audio('./assets/fah.mpeg');

const jumpScare = document.getElementById('jumpScare');

// FUNÇÃO DOS BOTÕES SIM
function aceitarEncontro(dia) {
    musica.currentTime = 0;
    musica.play().catch(error => {
        console.error('Erro ao tocar música:', error);
    });
    
    alert('TEMOS UM ENCONTRO! ❤️');
    const mensagem = encodeURIComponent(
        `Oi amor! Quero sair no dia ${dia}. ❤️`
    );
    window.location.href = `https://wa.me/5511940775152?text=${mensagem}`;
}

// BOTÃO 18
btn18.addEventListener('click', function () {
    aceitarEncontro(18);
});

// BOTÃO 20
btn20.addEventListener('click', function () {
    aceitarEncontro(20);
});

// BOTÃO NÃO
btnNao.addEventListener('click', function () {
    btnNao.style.display = 'none';

    fah.currentTime = 0;
    fah.play();

    jumpScare.muted = true;
    jumpScare.volume = 0;
    jumpScare.currentTime = 0;

    jumpScare.style.display = 'block';
    jumpScare.play();
});

// QUANDO O VÍDEO TERMINAR
jumpScare.addEventListener('ended', function () {
    jumpScare.style.display = 'none';
    fah.pause();
    fah.currentTime = 0;
});