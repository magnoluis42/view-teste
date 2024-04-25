let btnFinalizar = document.getElementById("btn-finish");
btnFinalizar.addEventListener("click", () => window.location.href = '../user/forma-pagamento.html' );

if(window.location.pathname !== "/" || window.location.pathname !== ""){
    window.location.href = "../app.html"
}


