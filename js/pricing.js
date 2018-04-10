(function (document) {

    var EmailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    document.showRegistrationModal = function () {
        var el = $('#framelink-registration-modal');
        if (typeof el.modal === 'function') {
            el.modal('show');
            setTimeout(function () {
                $('input', el).focus();
            }, 250);
            document.validateEmail();
        }
    };

    document.validateEmail = function () {
        var valid = EmailRegex.test($('#framelink-registration-email').val());
        $('#framelink-registration-email-send').prop('disabled', !valid);
    };

}(document));
