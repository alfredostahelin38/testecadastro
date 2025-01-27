// Função para carregar itens do localStorage
function loadItems() {
    const items = JSON.parse(localStorage.getItem('items')) || [];
    const itemList = document.getElementById('itemList');
    itemList.innerHTML = ''; // Limpa a lista antes de carregar

    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        itemList.appendChild(li);
    });
}

// Função para adicionar um novo item
document.getElementById('itemForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita o recarregamento da página

    const itemName = document.getElementById('itemName').value;
    const items = JSON.parse(localStorage.getItem('items')) || [];

    items.push(itemName); // Adiciona o novo item
    localStorage.setItem('items', JSON.stringify(items)); // Salva no localStorage

    loadItems(); // Atualiza a lista de itens
    document.getElementById('itemName').value = ''; // Limpa o campo de input
});

// Carrega os itens ao carregar a página
window.onload = loadItems;