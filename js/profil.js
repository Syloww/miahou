document.addEventListener("DOMContentLoaded", function() {
    const pseudoElement = document.querySelector('.pseudo');
    const bioElement = document.querySelector('.bio');

    // Récupérer le nom du compte dans le fichier profil.html
    const params = new URLSearchParams(window.location.search);
    const selectedAccount = params.get('account');

    // Mettre à jour le texte avec la classe "pseudo" dans le fichier profil.html
    if (selectedAccount && pseudoElement) {
        pseudoElement.textContent = selectedAccount;
    }

    // Mettre à jour le texte avec la classe "bio" dans le fichier profil.html
    if (selectedAccount && bioElement) {
        const bioText = comptes[selectedAccount] ? comptes[selectedAccount].bio : "Biographie non disponible";
        bioElement.textContent = bioText;
    }
});