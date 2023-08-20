const registros = [];

function actualizarListaRegistros() {
    const listaRegistros = document.getElementById("listaRegistros");
    listaRegistros.innerHTML = "";
    
    registros.forEach((registro, index) => {
        const li = document.createElement("li");
        li.textContent = `Registro ${index + 1}: Fecha: ${registro.fecha}, Hora: ${registro.hora}, IMC: ${registro.imc}, DX: ${registro.leyenda}`;
        listaRegistros.appendChild(li);
    });
}
function obtenerLeyendaIMC(imc) {
    if (imc < 18.5) {
        return "Bajo peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        return "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
        return "Sobrepeso";
    } else {
        return "Obesidad";
    }
}
document.getElementById("calcularIMC").addEventListener("submit", function(event) {
    event.preventDefault();
    const altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);
    if (isNaN(altura) || isNaN(peso)) {
        alert("Por favor, ingresa valores numéricos válidos.");
        return;
    }
    const imc = peso / (altura * altura);
    const now = new Date();
    const registro = {
        fecha: now.toLocaleDateString(),
        hora: now.toLocaleTimeString(),
        altura: altura,
        peso: peso,
        imc: imc.toFixed(2),
        leyenda: obtenerLeyendaIMC(imc)
    };
    registros.push(registro);

    document.getElementById("resultadoIMC").textContent = registro.imc;
    actualizarListaRegistros()
    document.getElementById("resultado").textContent = registro.leyenda;
});

