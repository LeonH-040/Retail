document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('goToContact');
    button.addEventListener('click', function() {
        window.location.href = '../contact/contact.html';
    });
});
