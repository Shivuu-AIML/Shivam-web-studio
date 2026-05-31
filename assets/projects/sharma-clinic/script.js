document
.getElementById("appointmentForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    const name =
    document.getElementById("name").value;

    const phone =
    document.getElementById("phone").value;

    const date =
    document.getElementById("date").value;

    const department =
    document.getElementById("department").value;

    const message =
    document.getElementById("message").value;

    const whatsappMessage =

`New Appointment Request

Patient Name: ${name}

Phone: ${phone}

Appointment Date: ${date}

Department: ${department}

Message: ${message}`;

    const encodedMessage =
    encodeURIComponent(whatsappMessage);

    const whatsappNumber =
    "919876543210";

    window.open(

`https://wa.me/${whatsappNumber}?text=${encodedMessage}`,

"_blank"

);

});
alert(
"Redirecting to WhatsApp to complete your appointment request."
);