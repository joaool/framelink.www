(function (document) {

    var EmailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    document.validateContactForm = function () {
        var validName = !!$('#form-contact-email').val().length,
            validSubject = !!$('#form-contact-subject').val().length,
            validEmail = !!EmailRegex.test($('#form-contact-email').val()),
            valid = validName && validSubject && validEmail;
        $('#form-contact-submit').prop('disabled', !valid);
        return valid;
    };

    document.onContactSendSubmit = function (e) {
        e.preventDefault();
        if (document.validateContactForm() && emailjs) {
            $('.contact-message-sent').css('display', 'flex');
            $('.contact-description').hide();
            $('.form-contact').hide();
            return;
            emailjs.send('default_service', 'framelinkcontactreceiver', {
                name: $('#form-contact-name').val(),
                email: $('#form-contact-email').val(),
                subject: $('#form-contact-subject').val()
            });
            emailjs.send('default_service', 'framelinkcontactsender', {
                name: $('#form-contact-name').val(),
                email: $('#form-contact-email').val(),
                subject: $('#form-contact-subject').val()
            });
        }
    };

}(document));
