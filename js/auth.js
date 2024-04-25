document.getElementById('btn-finish').addEventListener('click', function() {
    // Obtém o token JWT do armazenamento local (localStorage)
    const token = localStorage.getItem('accessToken');
    
    // Verifica se o token JWT está presente
    if (token) {
        // Envia o token JWT no cabeçalho Authorization da requisição
        fetch('/finalizar-pedido', {
            method: 'POST',
            headers: {
                'Authorization': token
            }
        })
        .then(response => {
            if (response.ok) {
                // Se o pedido for bem-sucedido, redireciona para a página de pagamento
                window.location.href = '/forma-pagamento.html';
            } else {
                // Se o usuário não estiver autenticado, redireciona para a página de login
                window.location.href = '/login.html';
            }
        })
        .catch(error => {
            console.error('Erro ao finalizar pedido:', error);
        });
    } else {
        // Se o token JWT não estiver presente, redireciona para a página de login
        window.location.href = '/login.html';
    }
});
