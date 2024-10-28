function generar_tabla() {
    const contenedor = document.getElementById('tablaContainer');
    contenedor.innerHTML = '';
    const tabla = document.createElement('table');

    for (let i = 0; i < 3; i++) { 
        const fila = tabla.insertRow(); 

        for (let j = 0; j < 3; j++) { 
            const celda = fila.insertCell();
            celda.textContent = `Fila ${i}, Columna ${j}`;
        }
    }

    contenedor.appendChild(tabla);
}
