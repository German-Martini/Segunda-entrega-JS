
class Sistema {
	constructor(empleados) {
		this.empleados = empleados
	}

	buscarEmpleados() {
		let nombreIngresado = prompt('Ingrese el Nombre y apellido (en ese orden) del empleado que quiere buscar').toUpperCase()

		let empleadoEncontrado = this.empleados.find(function(empleado) {
            return empleado.nombre.toUpperCase() === nombreIngresado;
        });

		
		if (empleadoEncontrado) {
			alert(`Se encontro al empleado:  
		Nombre : ${empleadoEncontrado.nombre}
		Edad : ${empleadoEncontrado.edad}
		Sueldo: ${empleadoEncontrado.sueldo}`)
		} else {
			alert('No se encontro al empleado')
		}
	}

	aumentarSueldos (empleados) {
		let solicitarPorcentaje = parseFloat(prompt("Ingrese el porcentaje a aumentar"));
		empleados.forEach(function(empleado) {
			empleado.sueldo = ((empleado.sueldo * solicitarPorcentaje) / 100) + empleado.sueldo;
		});
		console.table (empleados)	
	
	}
}