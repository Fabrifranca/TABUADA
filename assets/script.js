function gerarTabuada() {
    const numero = document.getElementById('numero').value;
    const tabela = document.getElementById('tabuada');
    let html = '<tr><th>Tabuada do ' + numero + '</th></tr>';

    for (let i = 1; i <= 10; i++) {
        html += '<tr><td>' + numero + ' x ' + i + ' = ' + (numero * i) + '</td></tr>';
    }

    tabela.innerHTML = html;
}