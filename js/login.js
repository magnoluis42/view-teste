$(document).ready(function() {
    // Função para fazer login
    function fazerLogin(email, password) {
        var dados = {
            email: email,
            password: password
        };
        
        $.ajax({
            url: 'http://localhost:8080/auth',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(dados),
            success: function(response) {
                console.log('Login bem-sucedido:', response);
                
                // Armazenar token de acesso e tempo de expiração no localStorage
                //localStorage.setItem('accessToken', response.accessToken);
                localStorage.setItem('accessToken', response.accessToken);
                //localStorage.setItem('expiresIn', response.expiresIn);
                
                // Redirecionar o usuário para outra página ou realizar outras ações após o login bem-sucedido
                window.location.href = '../app.html';
              },
            error: function(xhr, status, error) {
                console.error('Erro ao fazer login:', error);
                // Aqui você pode exibir uma mensagem de erro para o usuário
            }
        });
    }
  
    // Evento de clique no botão de entrar
    $('#btnEntrar').click(function() {
        var email = $('#email').val();
        var password = $('#password').val();
        
        fazerLogin(email, password);
    });
  });


$(document).ready(function() {
    // Função para fazer login
    function register(name, email, password) {
        var data = {
            name: name,
            email: email,
            password: password
        };
  
        $.ajax({
            url: 'http://localhost:8080/user',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(data),
            success: function(response) {
                console.log('Login bem-sucedido:', response);
                
                // Redirecionar o usuário para outra página ou realizar outras ações após o login bem-sucedido
                //window.location.href = '../pages/home.html';
                $(".modal-success").css("display", "block");
                setTimeout(() => {
                    $(".modal-success").css("display", "none");
                }, 3000);
                window.location.href = '../index.html';

              },
            error: function(xhr, status, error) {
                console.error('Erro ao fazer login:', error);

                $(".modal-error").css("display", "block");

                setTimeout(function() {
                    $(".modal-error").css("display", "none");
                }, 3000);

                // Aqui você pode exibir uma mensagem de erro para o usuário
            }
        });
    }
  
    // Evento de clique no botão de entrar
    $('#btnRegister').click(function() {
        var name = $('#name').val();
        var email = $('#email').val();
        var password = $('#password').val();
        register(name, email, password);
    });
  });
  