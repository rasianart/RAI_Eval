$(document).ready(() => {

    $('#click-pad').css({
        'margin-bottom': '400px',
        'opacity': '1'
    });

    let createNumbers = () => {
        for (let i = 0; i < 10; i++) {
            let button = $('<button class="numbers" id="button' + i + '">' + i + '</button>');
            button.appendTo('#num-holder');
        }
    };

    createNumbers();

    $(document).on('mouseenter', 'button#click-pad, button.numbers', function() {
        $(this).css({
            'transition': 'all .3s ease',
            'background-color': 'white',
            'box-shadow': '0px 0px 30px 5px #555'
        });
        if ($(this).hasClass('numbers')) {
            $(this).css({
                'box-shadow': '0px 0px 30px 5px #777',
                'color': 'black'
            });
        }
        if ($(this).attr('id') === 'click-pad') {
            $('#click-pad').html('012345');
            $('#filter').css({
                'opacity': '.3'
            });
        }
    });
    $(document).on('mouseleave', 'button#click-pad, button.numbers', function() {
        $(this).css({
            'box-shadow': '0px 0px 0px 0px #555'
        });
        if ($(this).hasClass('numbers')) {
            $(this).css({
                'background-color': '#999',
                'color': 'white'
            });
        }
        if ($(this).attr('id') === 'click-pad') {
            $(this).css('background-color', '#DCDCDC');
            $('#filter').css({
                'opacity': '0'
            });
            $('#click-pad').html('NumPad');
        }
    });

    $(document).on('click', 'button.numbers', function() {
        let num = $(this).html();
        let displayNum = $('#display-numbers').html();
        $('#display-numbers').html(displayNum + num);
    });

    $('#send').on('click', () => {
        let inputNumbers = $('#display-numbers').html();
        alert('You have sent ' + inputNumbers);
        $('#display-numbers').html('');
    });

});
