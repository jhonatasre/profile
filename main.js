function runTerminal(comando) {
    var el = $(".content-input input");
    var span = $(el).prev()[0];

    var value = $("<div>").text($.trim(comando)).html();

    $(".content-input input").remove();
    span.style.display = 'block';
    span.innerHTML = value;

    var comandos = {
        'ajuda': () => showAjuda(),
        'certificados': () => showCertificados(),
        'experiencias': () => showExperiencias(),
        'tecnologias': () => showTecnologias(),
        'limpar': () => limparTerminal(),
        'clear': () => limparTerminal()
    }

    var resultado = (comandos[comando] || (() => false))();

    if (resultado || resultado === '') {
        $('#output').append(resultado);
        $('#output').append(areaInput());
        $(".content-input input").focus();

        return true;
    }

    $('#output').append(`Comando '${value}' não encontrado.`);
    $('#output').append(areaInput());
    $(".content-input input").focus();

    return false;
}

function limparTerminal() {
    $('.content-input').remove();
    $('#output').html('');

    return '';
}

function areaInput() {
    return $.trim(`
        <div class="content-input">
            <label>jhonatas@ads:~$</label>
            <span></span>
            <input onkeydown="readInput(this, event)"/>
        </div>
    `);
}

function showCertificados() {
    $(".content-input input").val('certificados');

    let content = "\n";
    content += '----------------------------------------------------------------------------------------------------' + "\n";
    content += '| Gerenciamento de Carreira                                      | 2011-06-04 / 2011-06-01 | 10h   |' + "\n";
    content += '| Técnico em Informática                                         | 2017-03-10              | 1348h |' + "\n";
    content += '| Sisnema - Aprenda Arduíno Com Integração Sistemas Mobile e Iot | 2017-07-01              | 40h   |' + "\n";
    content += '| Tecnólogo em Anpalise e Desenvolvimento de Sistemas            | 2020-11-23              | 2056h |' + "\n";
    content += '----------------------------------------------------------------------------------------------------' + "\n";
    content += "\n";

    return content;
}

function showExperiencias() {
    $(".content-input input").val('experiencias');

    let content = "\n";
    content += '------------------------------------------------------------------------------------------------' + "\n";
    content += '| Comando do Exército                            | 2013-03 / 2014-01 | Praça do Exército       |' + "\n";
    content += '| Bruning Tecnometal LTDA.                       | 2014-03 / 2015-10 | Embalador               |' + "\n";
    content += '| Globall Serviços de Telecomunicações           | 2015-11 / 2018-03 | Programador de sistemas |' + "\n";
    content += '| H2J Soluções Corporativas em Gestão e Ti LTDA. | 2018-06 / 2020-01 | Programador de sistemas |' + "\n";
    content += '| BFT Online Serviços LTDA.                      | 2020-01 / 2020-10 | Programador de sistemas |' + "\n";
    content += '| Hextor Sistemas LTDA.                          | 2020-10 / 2022-02 | Programador de sistemas |' + "\n";
    content += '| Superlógica Tecnologias S.A.                   | 2022-02 / Atual   | Programador de sistemas |' + "\n";
    content += '------------------------------------------------------------------------------------------------' + "\n";
    content += "\n";

    return content;
}

function showTecnologias() {
    $(".content-input input").val('tecnologias');

    let content = "\n";
    content += 'Backend: PHP, Laravel, Zend, Node.js;                                   ' + "\n";
    content += 'Frontend: JavaScript, JQuery, ReactJs, NextJs, Angular, CSS, Sass, Less;' + "\n";
    content += 'Banco de Dados: Mysql, SqlServer, MariaDB, MongoDB, Postgress;          ' + "\n";
    content += 'Cache: Memcached, Redis;                                                ' + "\n";
    content += 'Servidores: Apache, Nginx;                                              ' + "\n";
    content += 'AWS: S3, ECS, EC2, Secrets Manager, Route53;                            ' + "\n";
    content += 'Outros: Git, Docker.                                                    ' + "\n";
    content += "\n";

    return content;
}

function showAjuda() {
    $(".content-input input").val('ajuda');

    let content = "\n";
    content += 'Comandos disponíveis                                              ' + "\n";
    content += '----------------------------------------------------------------- ' + "\n";
    content += 'limpar, clear | Limpa todo o conteúdo que foi exibido no terminal.' + "\n";
    content += 'certificados  | Exibe alguns dos certificados que possuo          ' + "\n";
    content += 'experiencias  | Exibe um pouco do caminho que tracei              ' + "\n";
    content += 'tecnologias   | Tecnologias que em eu trabalhei                   ' + "\n";
    content += 'ajuda         |                                                   ' + "\n";
    content += "\n";

    return content;
}

function readInput(el, event) {
    if (event.keyCode == 13) {
        runTerminal(el.value);
    }
}
$(document).ready(function () {
    $('#output').html(areaInput());
    $(".content-input input").focus();

    $('#terminal').click(function () {
        $(".content-input input").focus();
    });

    $('#btn-limpar').click(function () {
        runTerminal('limpar');
    });

    $('#btn-certificados').click(function () {
        runTerminal('certificados');
    });

    $('#btn-experiencias').click(function () {
        runTerminal('experiencias');
    });

    $('#btn-tecnologias').click(function () {
        runTerminal('tecnologias');
    });

    $('#btn-ajuda').click(function () {
        runTerminal('ajuda');
    });
});
