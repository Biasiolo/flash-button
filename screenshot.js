$(document).ready(function() {
    $(".btn").on("click", function() {
        html2canvas(document.body).then(function(canvas) {
            var imageData = canvas.toDataURL("image/png");

            var link = document.createElement('a');
            link.href = imageData;
            link.download = 'screenshot.png';

            document.body.appendChild(link);
            link.click();

            document.body.removeChild(link);

            // Exibe a mensagem de sucesso
            showSuccessMessage();
        });
    });

    function showSuccessMessage() {
        // Cria um elemento para a mensagem de sucesso
        var successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.innerHTML = 'Screenshot salvo com sucesso!';

        // Adiciona a mensagem ao corpo do documento
        document.body.appendChild(successMessage);

        // Remove a mensagem após alguns segundos 
        setTimeout(function() {
            document.body.removeChild(successMessage);
        }, 3000); // Remove a mensagem após 3 segundos 
    }
});
