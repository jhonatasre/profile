var mousePositionX = 0;
var mousePositionY = 0;

function turnOff() {
    toggleMenu();
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

            limparTerminal();
            $('#output').append(areaInput());
            $(".content-input input").focus();
        }
    }, timerTurnOffSecond);
}

function hideMenu() {
    $('#menu').css('display', 'none');
    $('#menu').attr('data-show', 'off');
    $('#start-button').removeClass('active');
}

function showMenu() {
    $('#menu').css('display', 'flex');
    $('#menu').attr('data-show', 'on');
    $('#start-button').addClass('active');
}

function toggleMenu() {
    var visible = $('#menu').attr('data-show');

    if (visible == 'on') {
        hideMenu();
    } else {
        showMenu();
    }
}

function windowExpand(el) {
    var view = $(el.currentTarget).closest('.window-view');
    view = $(view[0]);

    if (view.attr('data-maximized') == 'on') {
        view.attr('data-maximized', 'off');
        view.css('top', view.attr('data-default-old-top'));
        view.css('left', view.attr('data-default-old-left'));
        view.css('width', view.attr('data-default-old-width'));
        view.css('height', view.attr('data-default-old-height'));
        view.css('padding', view.attr('data-default-old-padding'));
    } else {
        view.attr('data-maximized', 'on');
        view.attr('data-default-old-top', view.css('top'));
        view.attr('data-default-old-left', view.css('left'));
        view.attr('data-default-old-width', view.css('width'));
        view.attr('data-default-old-height', view.css('height'));
        view.attr('data-default-old-padding', view.css('padding'));

        view.css('top', 0);
        view.css('left', 0);
        view.css('width', '100vw');
        view.css('padding', 'unset');
        view.css('height', 'calc(-50px + 100vh)');
    }
}

$(document).ready(function () {
    if (initNewSystem) {
        showNewSystem();
    }

    $('.window-header').dblclick(function (el) {
        windowExpand(el);
    });

    $('.btn-window-expanded').click(function (el) {
        windowExpand(el);
    })

    $('.btn-window-close').click(function (el) {
        var view = $(el.currentTarget).closest('.window-view');
        $(view[0]).remove();
    });

    $(".window-view").draggable({
        start: function (el) {
            var view = $(el.currentTarget).closest('.window-view');
            view = $(view[0]);

            view.attr('data-maximized', 'off');
            view.css('position', 'fixed');

            view.css('width', view.attr('data-default-old-width'));
            view.css('height', view.attr('data-default-old-height'));
        },
    });

    $('.window-view').resizable({
        alsoResize: false,
        aspectRatio: false,
        minHeight: 300,
        minWidth: 450
    });

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

    $(document).on("click", function (event) {
        if (!$(event.target).closest("#menu").length) {
            hideMenu();
        }
    });
});
