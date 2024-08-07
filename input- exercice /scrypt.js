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
    
    // Adiciona um evento de mouseover ao elemento <li>
    li.addEventListener('mouseover', function() {
        // Cria um novo elemento <span> para exibir o "x"
        const span = document.createElement('span');
        span.innerHTML = '<span style="float:right; color:red; font-weight:bold;">&xotime;</span>';
        
        // Adiciona o elemento <span> ao elemento <li>
        li.appendChild(span);
    });

    // Adiciona um evento de mouseout ao elemento <li>
    li.addEventListener('mouseout', function() {
        // Remove o elemento <span> do elemento <li>
        li.removeChild(li.lastChild);
    }); 

    // Adiciona o elemento <li> à lista
    ul.appendChild(li);
    
    // Limpa o valor do input
    document.querySelector('#input').value = '';
}
