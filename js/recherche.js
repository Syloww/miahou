const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const pseudoElement = document.querySelector('.pseudo');

searchInput.addEventListener('input', updateResults);

function updateResults() {
    const searchTerm = searchInput.value.toLowerCase();

    // Vérifier si l'input est vide
    if (searchTerm.trim() === '') {
        // Cacher la liste de résultats si l'input est vide
        searchResults.style.opacity = 0;
        return;
    }

    const results = Object.keys(comptes).filter(account => account.toLowerCase().includes(searchTerm));

    displayResults(results);
}

function displayResults(results) {
    searchResults.innerHTML = '';

    results.forEach(result => {
        const listItem = document.createElement('li');
        listItem.textContent = result;
        listItem.addEventListener('click', () => displayProfile(result));
        searchResults.appendChild(listItem);

        // Ajouter une animation de déroulement (fade-in)
        setTimeout(() => {
            listItem.style.opacity = 1;
        }, 50);
    });

    // Afficher la liste de résultats avec une animation de déroulement (fade-in)
    searchResults.style.opacity = 1;
}

function displayProfile(account) {
    // Rediriger vers profil.html avec le compte sélectionné
    window.location.href = `profil.html?account=${account}`;
}

// Récupérer le nom du compte dans le fichier profil.html
const params = new URLSearchParams(window.location.search);
const selectedAccount = params.get('account');

// Mettre à jour le texte avec la classe "pseudo" dans le fichier profil.html
if (selectedAccount && pseudoElement) {
    pseudoElement.textContent = selectedAccount;
}