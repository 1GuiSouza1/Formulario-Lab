async function finalizarReserva() {
    const usuarioId = localStorage.getItem('userId');
    const laboratorioId = localStorage.getItem('laboratorioId');

    console.log("userId:", usuarioId);
    console.log("laboratorioId:", laboratorioId);

    const reservaData = {
        usuario_id: usuarioId,
        laboratorio_id: laboratorioId,
        respostas_id: 2,
        data_reserva: "2024-11-10 15:00:00",
    };
    
    try {
        const response = await fetch("http://localhost:3000/reserve", { 
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(reservaData)
        });

        const result = await response.json();

        if (response.ok) {
            alert("Reserva criada com sucesso!");
            window.location.href = "../Home/homeProfessor.html"; 
        } else {
            alert("Erro ao criar reserva: " + result.error);
        }
    } catch (error) {
        console.error("Erro ao tentar criar a reserva:", error);
        alert("Erro ao tentar criar a reserva.");
    }
}