let vendas = [];

// Carregar vendas ao iniciar
loadVendas();

// Carregar vendas ao iniciar a página
async function loadVendas() {
    try {
        const response = await fetch('http://localhost:8080/venda');
        if (response.ok) {
            vendas = await response.json();
            console.log(vendas);
            renderVendas();
        } else {
            alert('Erro ao carregar vendas');
        }
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao conectar com o servidor!');
    }
}

// Renderizar tabela de vendas
function renderVendas() {
    const tbody = document.getElementById('vendasTableBody');
    tbody.innerHTML = '';
    
    vendas.forEach(venda => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${venda.id}</td>
            <td>${venda.data}</td>
            <td>${venda.cliente.nome}</td>
            <td>${venda.produtos[0].valor}</td>
            <td class="action-buttons">
                <button class="edit-btn" onclick="editVenda(${venda.id})">Editar</button>
                <button class="delete-btn" onclick="deleteVenda(${venda.id})">Excluir</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

// Funções do Modal
function editVenda(id) {
    const venda = vendas.find(u => u.id === id);
    if (venda) {
        openModal(id);
    } else {
        alert('Venda não encontrada');
    }
}

function openModal(id = null) {
    const modal = document.getElementById('vendaModal');
    const modalTitle = document.getElementById('modalTitle');
    const form = document.getElementById('vendaForm');
    
    if (id) {
        const venda = vendas.find(u => u.id === id);
        modalTitle.textContent = 'Editar Venda';
        document.getElementById('id').value = venda.id;
        document.getElementById('nome').value = venda.nome;
        document.getElementById('email').value = venda.email;
        document.getElementById('vendaname').value = venda.usuario.vendaname;
        document.getElementById('senha').value = venda.usuario.senha;
    } else {
        modalTitle.textContent = 'Adicionar Venda';
        form.reset();
    }
    
    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('vendaModal').style.display = 'none';
}


// Excluir venda
async function deleteVenda(id) {
    if (confirm('Tem certeza que deseja excluir esta venda?')) {
        try {
            const response = await fetch(`http://localhost:8080/venda/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                loadVendas();
            } else {
                alert('Erro ao excluir venda');
            }
        } catch (error) {
            console.error('Erro:', error);
            alert('Erro ao conectar com o servidor');
        }
    }
}

// Filtrar vendas
function filterVendas() {
    const searchText = document.querySelector('.search-box').value.toLowerCase();
    const filteredVendas = vendas.filter(venda => 
        venda.nome.toLowerCase().includes(searchText)
    );
    
    const tbody = document.getElementById('vendasTableBody');
    tbody.innerHTML = '';
    
    filteredVendas.forEach(venda => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${venda.id}</td>
            <td>${venda.nome}</td>
            <td>${venda.email}</td>
            <td>${venda.usuario.vendaname}</td>
            <td>${venda.usuario.senha}</td>
            <td class="action-buttons">
                <button class="edit-btn" onclick="editVenda(${venda.id})">Editar</button>
                <button class="delete-btn" onclick="deleteVenda(${venda.id})">Excluir</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

// Função de logout
function logout() {
    window.location.href = 'index.html';
}