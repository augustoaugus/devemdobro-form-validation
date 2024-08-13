const botao = document.querySelector('#send');

botao.addEventListener('click', function () {
    const inputs = document.querySelectorAll('div.form > input, textarea');

    inputs.forEach(function (input) {
        const campoVazio = input.value.length == 0;
        const span = input.nextElementSibling;

        if (campoVazio) {
            input.classList.add('obrigatorio');
            span.classList.add('active');

        } else {
            input.classList.remove('obrigatorio');
            span.classList.remove('active');
        }
    });
});