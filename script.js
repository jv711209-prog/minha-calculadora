const display = document.getElementById('display');

function adicionarAoDisplay(valor) {
    if (display.value === '0' && valor !== '.') {
        display.value = valor;
    } else {
        display.value += valor;
    }
}

function limparTudo() {
    display.value = '0';
}

function calcularResultado() {
    try {
        // O método eval calcula a string matemática que está no ecrã
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Erro';
    }
}