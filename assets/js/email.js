$(document).ready(function() {
    $('#submit').click(function() {
        $('#contactForm').attr('action',
                       'mailto:soroush.products@gmail.com?subject=' +
                       $('#msg_subject').val() + '&body=' + $('#name').val() + "\n" + $('#message').val());
        $('#contactForm').submit();
    });
});
