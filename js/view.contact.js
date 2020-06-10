document.getElementById('contactSuccess').hidden = true;
document.getElementById('contactError').hidden = true;

$(document).ready(function () {
    $("#contactForm").submit(function () {
        var form_data = $(this).serialize();
        $.ajax({
            type: "POST",
            url: "https://a23f69d6695f.ngrok.io/orders",
            data: form_data,
            success: function () {
                document.getElementById('contactSuccess').hidden = false;
                document.getElementById('name').value = "";
                document.getElementById('subject').value = "";
                document.getElementById('email').value = "";
                document.getElementById('message').value = "";
            },
            error: function () {
                document.getElementById('contactError').hidden = false;

                // alert('возникла ошибка');
            }
        });
        return false;
    });
});
