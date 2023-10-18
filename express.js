document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('myModal');
    const openModalButtons = document.querySelectorAll('.open-modal-button');
    const saveButton = document.getElementById('saveButton');
    const modalForm = document.getElementById('modalForm');

    openModalButtons.forEach(button => {
        button.addEventListener('click', function() {
            modal.style.display = 'block';
        });
    });

    // Fechar o modal quando o usuário clicar fora dele
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };

    // Salvar dados do modal quando o botão "Salvar" é clicado
    saveButton.addEventListener('click', function() {
        const opcoesSelecionadas = [];
        const checkboxes = document.querySelectorAll('input[type=checkbox]:checked');
        checkboxes.forEach(checkbox => {
            opcoesSelecionadas.push(checkbox.id);
        });

        const descricao = document.getElementById('descricao').value;

        // Fechar o modal após salvar
        modal.style.display = 'none';
    });

    // Previne o envio do formulário para evitar o recarregamento da página
    modalForm.addEventListener('submit', function(event) {
        event.preventDefault();
    });
});