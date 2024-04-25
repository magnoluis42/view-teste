/*
$(document).ready(function() {
    $.ajax({
        url: "http://localhost:8080/produtos",
        type: "GET",
        success: function(data) {
            // Supondo que 'data' seja uma lista de produtos
            data.forEach(function(produto) {
                $("#productList").append(
                    "<div>" + produto.nome + "</div>",
                    "<div>" + produto.preco + "</div>",
                    "<div>" + produto.imagemUrl + "</div>"
            );
            });
        },
        error: function(xhr, status, error) {
            console.error("Erro ao buscar produtos:", error);
        }
    });
});
*/
$(document).ready(function() {
    $.ajax({
        url: "http://localhost:8080/produtos",
        type: "GET",
        success: function(data) {
            data.forEach(function(produto) {
                var productDiv = $("<div></div>");

                productDiv.append("<div>Nome: " + produto.nome + "</div>");
                productDiv.append("<div>Preço: " + produto.preco + "</div>");

                // Criar uma tag img para a imagem
                var img = $("<img>");
                img.attr("src", produto.imagemUrl); // Definir o atributo src com o URL da imagem

                // Adicionar a imagem à div do produto
                productDiv.append(img);

                // Adicionar a div do produto à div #productList
                $("#productList").append(productDiv);
            });
        },
        error: function(xhr, status, error) {
            console.error("Erro ao buscar produtos:", error);
        }
    });
});