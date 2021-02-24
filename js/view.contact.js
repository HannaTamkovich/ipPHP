$(document).ready(function () {
    $("#contactForm").submit(function () {
        var form_data = $(this).serialize();
        $.ajax({
            type: "POST",
            url: "https://ipbudaibot.ga/orders",
            data: form_data,
            success: function () {
                document.getElementById('name').value = "";
                document.getElementById('subject').value = "";
                document.getElementById('email').value = "";
                document.getElementById('message').value = "";
            },
            error: function () {
            }
        });
        return false;
    });
    $("#bannerForm").submit(function () {
        let form_data = $(this).serialize();
        form_data += '&email=';
        console.log(form_data);
        $.ajax({
            type: "POST",
            url: "https://ipbudaibot.ga/orders",
            data: form_data,
            success: function () {
                document.getElementById('name').value = "";
                document.getElementById('subject').value = "";
                document.getElementById('message').value = "";
            },
            error: function () {
            }
        });
        return false;
    });
});
