$(document).ready(function() {
    $('#submit').click(function() {
    var yourMessage = 'FullName : ' + document.getElementById("name").value +
    '\n Email : ' + document.getElementById("email").value +
    '\n Message : ' + document.getElementById("message").value;
    var subject = document.getElementById("msg_subject").value;
    document.location.href = "mailto:soroush.products@gmail.com?subject="
        + encodeURIComponent(subject)
        + "&body=" + encodeURIComponent(yourMessage);
    });
});
