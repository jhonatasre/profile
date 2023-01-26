function turnOff() {
    $('#modal-turn-off').modal('show');
    $('#timer-turn-off').text((timerTurnOff / 1000));

    internalTurnOff = setInterval(function () {
        var timer = $('#timer-turn-off').text();
        timer = parseInt(timer);
        timer -= 1;
        $('#timer-turn-off').text(timer);

        if (timer <= 0) {
            $('#modal-turn-off').modal('hide');
            $('#loadding').show();
            $('#os').hide();

            setTimeout(function () {
                $('#system-old').show();
                $('#system-new').hide();
            }, timerTurnOff);

            clearInterval(internalTurnOff);
        }
    }, timerTurnOffSecond);
}

function toggleMenu() {
    var visible = $('#menu').attr('data-show');

    if (visible == 'on') {
        $('#menu').css('display', 'none');
        $('#menu').attr('data-show', 'off');
        $('#start-button').removeClass('active');
    } else {
        $('#menu').css('display', 'flex');
        $('#menu').attr('data-show', 'on');
        $('#start-button').addClass('active');
    }
}

$(document).ready(function () {
    if (initNewSystem) {
        showNewSystem();
    }

    $('#moment-time').text(moment().format('HH:mm:ss'));
    $('#moment-date').text(moment().format('DD/MM/YYYY'));

    $('#btn-stop-turn-off').click(function () {
        clearInterval(internalTurnOff);
        $('#modal-turn-off').modal('hide');
    });

    setInterval(() => {
        var textLoading = $('#text-loading').text();
        var pontos = (textLoading.match(/\./g) || []).length;

        switch (pontos) {
            case 1: pontos = '..'; break;
            case 2: pontos = '...'; break;
            case 3: pontos = '.'; break;
        }

        $('#text-loading').text('Carregando ' + pontos);

        $('#moment-date').text(moment().format('DD/MM/YYYY'));
        $('#moment-time').text(moment().format('HH:mm:ss'));
    }, timerDateTime);
});
