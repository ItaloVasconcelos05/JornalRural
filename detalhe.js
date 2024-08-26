document.addEventListener("DOMContentLoaded", function() {
    const titulo = document.title;

    // Mapeamento do título da página para o ID do item de navegação correspondente
    const mapTitleToId = {
        "Home": "home",
        "Página 01": "pag1",
        "Página 02": "pag2"
    };

    // Obter o ID correspondente ao título da página atual
    const navId = mapTitleToId[titulo];

    // Se existir um item de navegação correspondente, aplicar a classe de destaque
    if (navId) {
        const navElement = document.getElementById(navId);
        if (navElement) {
            navElement.classList.add("active");
        }
    }
});
