let cart = [];
let priceFull = [];
let price = [];
let suma = 0;

let teste = [];
//let value = cart.length;
// Acesse o elemento <span> pelo seu ID
var spanElement = document.getElementById("length-cart");
var modalCartElement = document.getElementById("modal-cart");
var modalOpen = document.querySelector(".modal-cart-products");
var modalContent = document.querySelector("#modal-content");
var totalPriceElement = document.querySelector("#total-price");
modalCartElement.addEventListener('click', openModalCart);
modalOpen.addEventListener('click', closeModalCart);
// Atualize o conteúdo do <span> com o novo número

function openModalCart(event){
    event.preventDefault(event);
    modalOpen.style.display = 'block'
    addProductToModal();
}

function closeModalCart(event){
    event.preventDefault(event);
    modalOpen.style.display = 'none'
}

function addProductToModal(){
    modalContent.innerHTML = '';
    let totalPrice = 0;

    cart.forEach(product => {

        const productDiv = document.createElement('div');
        productDiv.classList.add('products');

        const imgProduct = document.createElement('img');
        imgProduct.src = product.image;
        console.log(product.image)
        productDiv.appendChild(img);

        const nameProduct = document.createElement('p');
        nameProduct.textContent = product.name;
        productDiv.appendChild(nameProduct);

        const priceProduct = document.createElement('p');
        priceProduct.textContent = product.price;
        productDiv.appendChild(priceProduct);

        const closeButton = document.createElement('img');
        closeButton.src = "icons/close-sm.svg";
        closeButton.alt = "Fechar";
        closeButton.classList.add('close-btn');
        productDiv.appendChild(closeButton);

        modalContent.appendChild(productDiv);

    })
}

function addProductToModal(){
    modalContent.innerHTML = '';
    let totalPrice = 0;

    cart.forEach(product => {

        const productDiv = document.createElement('div');
        productDiv.classList.add('products');

        const imgProduct = document.createElement('img');
        imgProduct.src = product.image;
        console.log(product.image)
        productDiv.appendChild(imgProduct); // Correção aqui

        const nameProduct = document.createElement('p');
        nameProduct.textContent = product.name;
        productDiv.appendChild(nameProduct);

        const priceProduct = document.createElement('p');
        priceProduct.textContent = product.price;
        productDiv.appendChild(priceProduct);

        const closeButton = document.createElement('img');
        closeButton.src = "icons/close-sm.svg";
        closeButton.alt = "Fechar";
        closeButton.classList.add('close-btn');
        productDiv.appendChild(closeButton);

        modalContent.appendChild(productDiv);
        
    })
}

function handleAddToCart(event) {
    event.preventDefault();
    const card = event.target.closest('.card');
    if (!card) return;

    // Obter informações do card
    const image = card.querySelector('.card-img-top').src;
    const name = card.querySelector('.card-title').innerText;
    const price = card.querySelector('.card-text').innerText;
    // Criar elementos HTML para a modal
    const modalContent = `
        <div class="modal">
            <div class="modal-content">
                <span class="close">
                    <img src="../icons/close-sm.svg">
                </span>
                <img src="${image}" alt="${name}">
                <h2>${name}</h2>
                <p>${price}</p>
                <button class="btn btn-warning width-fix-btn">Adicionar ao carrinho</button>
            </div>
        </div>
    `;

    // Inserir a modal no corpo do documento
    document.body.insertAdjacentHTML('afterbegin', modalContent);

    // Adicionar um event listener para fechar a modal ao clicar no botão de fechar
    const closeButton = document.querySelector('.close');
    closeButton.addEventListener('click', function() {
        document.querySelector('.modal').remove();
    });

    // Aqui você pode adicionar o código para lidar com a adição do produto ao carrinho na modal
    const addToCartButton = document.querySelector('.modal-content .btn-warning');
    addToCartButton.addEventListener('click', function() {
        // Adicionar o produto ao carrinho
        const product = {
            image: image,
            name: name,
            price: price
        };

        cart.push(product);
        updateCartUI();
        // Fechar a modal
        document.querySelector('.modal').remove();
        console.log("PREÇO: " + product.price)
        spanElement.textContent = cart.length;

        let priceFormatted = parseFloat(product.price.replace("R$","").replace("," , "."));
        priceFull.push(priceFormatted);
        //console.log("pricefull" + priceFull) 
        sum()
       
    });
    // Exibir a modal
    document.querySelector('.modal').style.display = 'block';
}
function sum(){
    let sum = priceFull.reduce((total, value) => total + value, 0);
    totalPriceElement.innerText = `R$ ${sum}`;
}
// Função para atualizar o conteúdo do carrinho na interface do usuário
function updateCartUI() {
    // Aqui você pode adicionar código para atualizar a interface do usuário com o conteúdo do carrinho
    // Por exemplo, atualizar um contador de itens no carrinho ou exibir uma lista de itens no carrinho
}
document.getElementById('product-container').addEventListener('click', function(event) {
    if (event.target.classList.contains('btn-warning')) {
        handleAddToCart(event);
    }
});

