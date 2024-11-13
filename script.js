const form = document.getElementById('formulario'); // Seleciona o formulário
const textareas = document.querySelectorAll('textarea'); // Seleciona todos os textareas
const requiredFields = document.querySelectorAll('[required]'); // Seleciona todos os campos obrigatórios
const outroMotivoInput = document.getElementById('outroMotivo'); // Seleciona o campo de texto "outro"

textareas.forEach(textarea => {
    const charCount = textarea.nextElementSibling; // Seleciona o próximo elemento (charCount)
    const boxInputText = textarea.parentElement; // Seleciona o contêiner

    textarea.addEventListener('input', () => {
        const currentLength = textarea.value.length; 
        charCount.textContent = `${currentLength}/100`; 

        if (currentLength >= 100) {
            charCount.classList.add('limit-reached'); 
            textarea.value = textarea.value.substring(0, 100); 
            boxInputText.style.borderColor = 'var(--red-color)'; // Borda vermelha
        } else {
            charCount.classList.remove('limit-reached'); 
            boxInputText.style.borderColor = ''; // Remove a borda vermelha
        }
    });

    charCount.textContent = `0/100`; 
});

// Validação do formulário
// form.addEventListener('submit', (event) => {
//     let isValid = true;

//     requiredFields.forEach(field => {
//         const boxInputText = field.parentElement; // Seleciona o contêiner do campo obrigatório
//         const errorMessage = boxInputText.querySelector('.error-message'); // Seleciona a mensagem de erro

//         // Verifica se o campo é o texto do motivo "Outro"
//         if (field.id === 'outroMotivo' && !outroMotivoInput.value.trim() && document.querySelector('input[name="motivo"]:checked').id === 'optionMotivo4') {
//             isValid = false;
//             errorMessage.textContent = 'Por favor, informe o motivo se selecionar "Outro".';
//         } else if (field.tagName === 'TEXTAREA' && !field.value.trim()) {
//             isValid = false;
//             errorMessage.textContent = 'Este campo é obrigatório.';
//         } else {
//             errorMessage.textContent = ''; // Limpa mensagem de erro se válido
//         }
//     });

//     if (!isValid) {
//         event.preventDefault(); // Impede o envio do formulário se houver erro
//     }
// });

// Lógica para ativar/desativar o campo "Outro"
const motivoRadios = document.querySelectorAll('input[name="motivo"]');
motivoRadios.forEach(radio => {
    radio.addEventListener('change', () => {
        if (document.getElementById('optionMotivo4').checked) {
            outroMotivoInput.disabled = false; // Habilita o campo de texto
            outroMotivoInput.required = true; // Torna o campo obrigatório
        } else {
            outroMotivoInput.value = ''; // Limpa o valor
            outroMotivoInput.disabled = true; // Desabilita o campo de texto
            outroMotivoInput.required = false; // Remove a obrigatoriedade
        }
    });
});

// Desabilita o campo "Outro" ao carregar a página
outroMotivoInput.disabled = true; // Desabilita o campo de texto inicialmente