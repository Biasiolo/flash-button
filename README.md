# Screenshot Button

https://flash-button.vercel.app/

## Funcionalidades:

Este projeto apresenta um botão interativo que permite aos usuários tirarem screenshots da área visível do navegador. Algumas características notáveis incluem:

- **Efeito de Flash no Botão:** O botão possui um atraente efeito de flash quando o usuário passa o mouse sobre ele, proporcionando uma experiência visual agradável.

- **Captura de Screenshot:** Ao clicar no botão, o conteúdo visível do navegador é capturado em formato PNG.

- **Download Rápido:** A imagem capturada é disponibilizada para download imediato, facilitando o compartilhamento e o armazenamento.

- **Mensagem de Sucesso:** Uma mensagem de sucesso é exibida brevemente para informar ao usuário que o screenshot foi salvo com êxito.

## Design do Botão:

O botão tem um design clean e moderno, com um contorno animado que adiciona um toque de dinamismo. Ao passar o mouse sobre o botão, ocorre uma transição suave para um tom azul atraente.

## Utilidade da Captura de Área de Conteúdo:

A captura da área de conteúdo do navegador é focada em proporcionar aos usuários a capacidade de capturar apenas a parte relevante da página, agilizando o processo de recorte e destacando a informação essencial.

## Como Instalar em Seu Site:

1. **Inclua os Arquivos Necessários:**
   Certifique-se de incluir os seguintes arquivos em seu projeto:
   - jQuery: `https://code.jquery.com/jquery-3.6.4.min.js`
   - html2canvas: `https://html2canvas.hertzen.com/dist/html2canvas.min.js`
   - `screenshot.js`: Contém a lógica para capturar e salvar screenshots.
   - `styles.css`: Estilos para o botão e a mensagem de sucesso.

2. **Referencie os Arquivos no HTML:**
   Adicione as referências aos arquivos no cabeçalho do seu documento HTML:
   ```html
   <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
   <script src="https://html2canvas.hertzen.com/dist/html2canvas.min.js"></script>
   <script src="screenshot.js"></script>
   <link rel="stylesheet" href="styles.css">
   ```

3. **Adicione o Botão ao Seu HTML:**
   Insira o botão em qualquer parte do seu HTML, como:
   ```html
   <button class="btn">
      <svg width="180px" height="60px" viewBox="0 0 180 60" class="border">
         <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
         <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
      </svg>
      <span>flash-button</span>
   </button>
   ```

4. **Personalize conforme Necessário:**
   Sinta-se à vontade para personalizar os estilos e a posição do botão para se adequar ao design do seu site.

5. **Pronto para Uso:**
   Seu botão de screenshot está agora pronto para ser utilizado em seu site, proporcionando aos usuários uma maneira fácil e eficaz de capturar e compartilhar conteúdo relevante.

Aproveite a implementação e melhore a experiência do usuário em seu site! 😊