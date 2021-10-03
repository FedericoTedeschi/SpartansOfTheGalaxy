$(document).ready(function () {
    var maxClicks = 9;
    var clicks = 0;

    $('.modal').each(function () {
        $(this).find('h2').css('font-size', '30px');

    })

    Swal.fire({
        html: '<h1 style="color: white;">Ahoy, space travelers!</h1>' +
            '<p style="color: white; font-style: italic;">Don\'t worry, we are NOT going to deliver Trojan horses throughout the space. We are going to facilitate and improve the future of planetary exploration!</p>' +
            '<p style="color: white; font-style: italic;">Hope you enjoy visiting our humble documentation. At first, start the engine by pressing on the power button.</p>',
        icon: 'info',
        showConfirmButton: true,
        confirmButtonText: 'Ok',
        confirmButtonColor: '#4bb543',
        background: '#2c353c',
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false
    });

    $('#StartButtonId').unbind('click');
    $('#StartButtonId').on('click', function () {
        $(this).css('color', 'greenyellow');
        $(this).css('border-color', 'greenyellow');

        $('.StartButtonBox').fadeOut(2000, function () {
            $('#spacer').css('width', '100%');
            $('#spacer').css('height', '200px');
            $('#spacer').fadeIn(1000);
            $('#quote').fadeIn(2000);
            $('#timeline').fadeIn(5000);
            $('#About').fadeIn(6000);
            $('#AboutUs').fadeIn(6000);
        });
        $('html').css('overflow', 'visible');

    });

    var sendPopUp = (title, text, icon, toast, okButtonText = "", func = undefined) => {
        var buttonColor = '';

        if (toast)
            buttonColor = '#ffcc00';
        else
            buttonColor = '#4bb543';

        Swal.fire({
            html: '<h3 style="color: white; font-style: bold;">' + title + '</h3>' + '<p style="color: white;">' + text + '</p>',
            icon: icon,
            toast: toast,
            showConfirmButton: true,
            confirmButtonText: okButtonText == '' ? 'Ok' : okButtonText,
            confirmButtonColor: buttonColor,
            background: '#2c353c',
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false
        }).then((result) => {
            if (result.isConfirmed && func !== undefined) {
                func();
            }
        });
    }

    $('[name="modalCaller"]').each(function () {
        $(this).on('click', function () {
            var id = $(this).attr('id');
            var modalId = "";

            switch (id) {
                case "ExcavatorInfo":
                    modalId = "#ExcavatorModal";
                    break;
                case "HaulerInfo":
                    modalId = "#HaulerModal";
                    break;
                case "DroneInfo":
                    modalId = "#DroneModal";
                    break;
            }

            var $modal = $(modalId);
            var $span = $modal.find('span');
            $modal.fadeIn(500);

            $span.on('click', function () {
                $modal.fadeOut(500);
            });
        });
    }); 

    $('.InfoCard').each(function() {
        var urlProfile = "";
        $(this).on('click', function () {

            switch ($(this).attr('id')) {
                case 'Davide':
                    urlProfile = 'https://www.linkedin.com/in/davide-di-santis-7b37311ba/';
                    break;
                case 'Mario':
                    urlProfile = 'https://www.linkedin.com/in/mario-mucavero-819002189/';
                    break;
                case 'Federico':
                    urlProfile = 'https://www.linkedin.com/in/federico-tedeschi-a2038b196/';
                    break;
            }

            window.open(urlProfile, '_blank');
        })
    })
});