
class Sistema {
	constructor(empleados) {
		this.empleados = empleados
	}

	buscarEmpleados () {
		let nombreIngresado = prompt('Ingrese el Nombre y apellido (en ese orden) del empleado que quiere buscar').toUpperCase()

		let empleadoEncontrado = this.empleados.find(function(empleado) {
            return empleado.nombre.toUpperCase() === nombreIngresado;
        });

		
		if (empleadoEncontrado) {
		alert(`Se encontro al empleado:  
		-Nombre : ${empleadoEncontrado.nombre}
		-Edad : ${empleadoEncontrado.edad} años 
		-Sueldo: $${empleadoEncontrado.sueldo}
		-Antiguedad: ${empleadoEncontrado.antiguedad} años de antiguedad`)
		} else {
			alert('No se encontro al empleado')
		}
	}

	aumentarSueldos () {
		let solicitarPorcentaje = parseFloat(prompt("Ingrese el porcentaje a aumentar"));
		empleados.forEach(function(empleado) {
			empleado.sueldo = ((empleado.sueldo * solicitarPorcentaje) / 100) + empleado.sueldo;
		});
		console.table (empleados);	
	}

	ordenarPorAntiguedad () {
		empleados.sort(function(a, b) {
			return b.antiguedad - a.antiguedad;
		});
		return console.table(empleados);
	}

	agregarEmpleado () {
		const nombre = prompt("Ingrese el Nombre y Apellido del nuevo empleado");
		let sueldo = parseInt(prompt("Ingrese el sueldo del nuevo empleado"));
		let antiguedad = parseInt(prompt("Ingrese los años de antiguedad"));
		
		if (isNaN(sueldo)) {
			alert(`Por favor ingrese un sueldo valido`);
		} else if (isNaN(antiguedad)) {
			alert(`Por favor ingrese un año de antiguedad valido`);
		} else {
			this.empleados.push(new Empleado(nombre, sueldo, antiguedad))
		console.table(empleados);
		}

	}

}	