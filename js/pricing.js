(function (document) {

    var EmailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    document.showRegistrationModal = function () {
        var el = $('#framelink-registration-modal');
        if (typeof el.modal === 'function') {
            $('input', el).val('');
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

    document.onEmailSendSubmit = function (e) {
        e.preventDefault();
        var toemail = $('#framelink-registration-email').val(),
            modalEl = $('#framelink-registration-modal'),
            valid = EmailRegex.test(toemail);
        if (valid && emailjs) {
            emailjs.send('default_service', 'fllogin', {
                toemail: toemail
            });
            if (modalEl.modal) {
                modalEl.modal('hide');
            }
        }
    };

}(document));
