(function (document) {

    document.showRegistrationModal = function () {
        var el = $('#framelink-registration-modal');
        if (typeof el.modal === 'function') {
            el.modal('show');
        }
    };

}(document));
