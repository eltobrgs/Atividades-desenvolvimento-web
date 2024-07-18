function add() {
    // Obtém o valor do input com o id "input"
    const input = document.querySelector("#input").value;
    
    // Obtém a referência para a lista com o id "list"
    const ul = document.querySelector('#list');
    
    // Cria um novo elemento <li>
    const li = document.createElement('li');
    
    // Define o texto do elemento <li> como o valor do input
    li.textContent = input;

    // Verifica se o input está vazio
    if (input === '') {
        // Exibe um alerta se o input estiver vazio
        alert('Por favor, insira um item válido');
        return;
    }

    // Adiciona um evento de clique ao elemento <li>
    li.addEventListener('click', function() {
        // Remove o elemento <li> da lista
        ul.removeChild(li);
    });

    // Adiciona o elemento <li> à lista
    ul.appendChild(li);
    
    // Limpa o valor do input
    document.querySelector('#input').value = '';
}
