let registros = [];

// Cargar registros desde el localStorage al cargar la página
if (localStorage.getItem("registros")) {
    registros = JSON.parse(localStorage.getItem("registros"));
    actualizarListaRegistros();
}

function actualizarListaRegistros() {
    const listaRegistros = document.getElementById("listaRegistros");
    listaRegistros.innerHTML = "";

    // Guardar los registros en el localStorage con tiempo de vida de 5 minutos.
    localStorage.setItem("registros", JSON.stringify(registros));

    // Establecer un tiempo de vida de 5 minutos para los datos en localStorage
    setTimeout(function() {
        localStorage.removeItem("registros"); // Eliminar los datos después de 5 minutos.
    }, 300000);

    registros.forEach((registro, index) => {
        const li = document.createElement("li");
        li.textContent = `Registro ${index + 1}: Fecha: ${registro.fecha}, Hora: ${registro.hora}, IMC: ${registro.imc}, DX: ${registro.leyenda}`;
        listaRegistros.appendChild(li);
    });
}

const URL_SERVER = 'http://localhost:5500/db/db.json';

async function obtenerLeyendaIMC(imc) {
    let leyenda;
    try {
        const response = await fetch(URL_SERVER);
        const responseData = await response.ok ? await response.json() : null;
        if (!responseData) {
            throw new Error('Error al obtener los datos IMC del servidor.');
        }
    const data = responseData.imcData;
    const imcInfo = data.find(item => imc >= item.imcMin && imc <= item.imcMax);
    leyenda = imcInfo ? imcInfo.leyenda : (() => { 
        throw new Error('No se encontró la leyenda para este IMC.'); 
        })();
    } catch (error) {
        console.error('Error en la solicitud Fetch:', error);
        leyenda = 'Error al obtener la leyenda';
    }
    Swal.fire({
        title: 'Tu índice de Masa Corporal es: ',
        text: imc.toFixed(2) + ': ' + leyenda,
        confirmButtonText: 'Aceptar'
    });
    return leyenda;
}
document.getElementById("calcularIMC").addEventListener("submit", async function(event) {
    event.preventDefault();
    const altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);
    if (isNaN(altura) || isNaN(peso)) {
        alert("Por favor, ingresa valores numéricos válidos.");
        return;
    }
    const imc = peso / (altura * altura);
    const now = new Date();
    try {
        const leyenda = await obtenerLeyendaIMC(imc);
        const registro = {
            fecha: now.toLocaleDateString(),
            hora: now.toLocaleTimeString(),
            altura: altura,
            peso: peso,
            imc: imc.toFixed(2),
            leyenda: leyenda
        };
        registros.push(registro);
        document.getElementById("resultadoIMC").textContent = registro.imc;
        actualizarListaRegistros();
        document.getElementById("resultado").textContent = registro.leyenda;
    } catch (error) {
        console.error('Error en el cálculo del IMC:', error);
    }
});