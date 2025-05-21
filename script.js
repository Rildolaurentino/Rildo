// Atualiza o ano automaticamente no rodapé
document.getElementById("ano").textContent = new Date().getFullYear();

// (Opcional) Mensagem de alerta ao enviar o formulário
document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault(); // Impede o envio real (pra testes)
    alert("Mensagem enviada com sucesso! Em breve entrarei em contato.");
});
