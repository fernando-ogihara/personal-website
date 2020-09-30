var cert_gerar;

function gerar() {
    contador = 1000000;

    while (contador > 0) {
        contador = contador - 1;
        htmlCertificado = emitirCertificado(inputNome.value);
    };
    /*
    links = 
    [
    '<li><a target="_blank" href="https://codepen.io/fernando-ogihara/details/jObNVBK">App_Transporte</a></li>',
    '<li><a target="_blank" href="https://codepen.io/fernando-ogihara/details/vYOqKeP">Pokebola</a></li>'    
    ]
    */

    links = [
        '<li>HTML - 95%</li>',
        '<li>CSS - 98%</li>',
        '<li>Javascript - 80%</li>',
        '<li>PHP - 81%</li>',
        '<li>MySQL - 85%</li>',
        '<li>Ajax - 86%</li>',
        '<li>JQuery - 89%</li>',
        '<li>Bootstrap - 92%</li>',
        '<li>GIT - 95%</li>',
        '<li>Wordpress - 98%</li>'
    ]

    listalinksHTML = ""
    contadorlinks = 0
    while (contadorlinks < 10) {
        listalinksHTML = ` ${listalinksHTML} ${links[contadorlinks]} `

        contadorlinks = contadorlinks + 1

        document.body.innerHTML = `${htmlCertificado} <ol>${listalinksHTML}</ol>`;

    }

    print()
}