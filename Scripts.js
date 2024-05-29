document.addEventListener('DOMContentLoaded', function() {
    // Ajoute un message d'erreur si le champ est vide
    document.querySelectorAll('input').forEach(function(input) {
        input.addEventListener('blur', function() {
            if (input.value === '') {
                input.style.borderColor = 'orange';
                alert('Ce champ ne peut pas être vide');
            } else {
                // Réinitialise la couleur de la bordure si le champ n'est pas vide
                if (input.id === 'name') {
                    input.style.borderColor = 'red';
                } else if (input.id === 'age') {
                    input.style.borderColor = 'blue';
                } else if (input.id === 'email') {
                    input.style.borderColor = 'green';
                }
            }
        });
    });
});
