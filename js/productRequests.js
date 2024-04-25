$(document).ready(function(){
    // Fazendo a requisição AJAX
    $.ajax({
        url: 'http://localhost:8080/product',
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            // Manipula os dados recebidos e insere os cards na página
            data.forEach(function(product) {
                const formattedPrice = `R$ ${parseFloat(product.price).toFixed(2).replace('.', ',')}`;
                var cardHtml = `
                    <div class="card" style="width: 18rem;">
                        <img src="${product.imagemUrl}" class="card-img-top" alt="${product.name}">
                        <div class="card-body">
                            <h5 class="card-title">${product.name}</h5>
                            <p class="card-text" id="price">${formattedPrice}</p>
                            <a class="btn btn-warning  width-fix-btn" id="btn-add-product">
                                Adicionar
                            </a>
                        </div>
                    </div>
                `;
                $('#product-container').append(cardHtml);
            });
        },
        error: function(xhr, status, error) {
            console.error('Erro ao carregar os produtos:', status, error);
        }
    });
});

const alertSuccess = document.querySelector(".alert-success");
const alertDanger = document.querySelector(".alert-danger");

$(document).ready(function() {
    function register(name, price, imagemUrl) {
        var data = {
            name: name,
            price: price,
            imagemUrl: imagemUrl
        };
  
        $.ajax({
            url: 'http://localhost:8080/product',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(data),
            success: function(response) {
                console.log('Cadastro realizado:', response);   
                //alertSuccess.style.display = 'block'
                $('.alert-success').css('display', 'block');
                setTimeout( () => $('.alert-success').css('display', 'none'), 3000);
                     //window.location.href = "../admin/cadastrar-produtos.html"
              },
            error: function(xhr, status, error) {
                console.error('Erro ao cadastrar:', error);

                $('.alert-danger').css('display', 'block');
                setTimeout( () => $('.alert-danger').css('display', 'none'), 3000);
            }
        });
    }
  
    // Evento de clique no botão de entrar
    $('#btnRegister').click(function() {
        var name = $('#name').val();
        var price = $('#price').val();
        var imagemUrl = $('#imagemUrl').val();
        register(name, price, imagemUrl);
    });
});
