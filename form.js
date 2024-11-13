document.querySelector('#formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o comportamento padrão de recarregar a página

    // Coleta os valores do formulário
    const semestre = document.querySelector('input[name="semestre"]:checked')?.value;
    const disciplina = document.getElementById('Disciplina').value;
    const motivo = document.querySelector('input[name="motivo"]:checked')?.value;
    const outroMotivo = document.getElementById('outroMotivo').value || motivo; // Usa o "Outro" caso esteja preenchido
    const atividade = document.getElementById('atividade').value;
    const equipamentos = document.getElementById('equipamentos').value;

    // Monta o objeto de dados
    const dadosFormulario = {
        semestre: semestre,
        disciplina: disciplina,
        motivacao: outroMotivo,
        atividade: atividade,
        equipamentos: equipamentos
    };

    console.log("Dados do formulário:", dadosFormulario); // Verifique se os dados estão corretos

    // Envia os dados usando fetch
    fetch("http://localhost:3000/forms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dadosFormulario)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro na requisição: ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log('Sucesso:', data); // Confirmação do envio com sucesso
    })
    .catch(error => {
        console.error('Erro:', error); // Mostra qualquer erro no console
    });
});
