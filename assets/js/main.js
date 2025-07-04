document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const formParams = {
                name: contactForm.name.value,
                email: contactForm.email.value,
                subject: contactForm.subject.value,
                message: contactForm.message.value
            };

            emailjs.send('service_qtd5mzj', 'template_3v60xq9', formParams)
                .then(function() {
                    alert('Messaggio inviato con successo!');
                    contactForm.reset(); 
                }, function(error) {
                    alert('Si è verificato un errore durante l\'invio del messaggio: ' + JSON.stringify(error));
                    console.error("Errore EmailJS:", error); 
                });
        });
    }
});