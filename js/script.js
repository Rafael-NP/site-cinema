
const btn18 = document.getElementById('btn18');
const btn20 = document.getElementById('btn20');
const btnNao = document.getElementById('btnNao');

const musica = new Audio('../assets/musica.mpeg');
const fah = new Audio('./assets/fah.mpeg');
const jumpScare = document.getElementById('jumpScare');

// BOTÃO 18
btn18.addEventListener('click', function () {

    musica.currentTime = 0;
    musica.play();

    alert('TEMOS UM ENCONTRO! ❤️');

    const mensagem = encodeURIComponent(
        'Oi amor! Quero sair no dia 18. ❤️'
    );

    window.location.href =
        `https://wa.me/5511940775152?text=${mensagem}`;
});

// BOTÃO 20
btn20.addEventListener('click', function () {

    musica.currentTime = 0;
    musica.play();

    alert('TEMOS UM ENCONTRO! ❤️');

    const mensagem = encodeURIComponent(
        'Oi amor! Quero sair no dia 20. ❤️'
    );

    window.location.href =
        `https://wa.me/5511940775152?text=${mensagem}`;
});

// BOTÃO NÃO
btnNao.addEventListener('click', function () {

    // ESCONDE O BOTÃO
    btnNao.style.display = 'none';

    // TOCA A MÚSICA FAH
    fah.currentTime = 0;
    fah.play();

    // MOSTRA E TOCA O JUMPSCARE
    jumpScare.style.display = 'block';
    jumpScare.currentTime = 0;
    jumpScare.muted = true;
    jumpScare.play();

    // QUANDO O VÍDEO TERMINAR
    jumpScare.onended = function () {

        // ESCONDE O VÍDEO
        jumpScare.style.display = 'none';

        // PARA A MÚSICA
        fah.pause();
        fah.currentTime = 0;

        // VOLTA O BOTÃO
        btnNao.style.display = 'block';
    };
});
