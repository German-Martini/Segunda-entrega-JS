class Empleado {
   constructor (nombre, sueldo, antiguedad) {
      this.nombre = nombre;
      this.edad = Math.ceil((Math.random() * (55 - 18)) + 18);
      this.sueldo = sueldo;
      this.antiguedad = antiguedad;
   }
}  

const empleados = [
   new Empleado("Carlos Garcia", 48000, 10),
   new Empleado("Laura Martinez", 65000, 3),
   new Empleado("Pedro Gomez", 38000, 8),
   new Empleado("Sofia Ramirez", 52000, 20),
]


const miSistema = new Sistema(empleados)



let salir = false 
while (true) {
    let opciones = prompt(
    `¿Que quieres hacer en la base de datos?
     1) Saber la cantidad de empleados actuales
     2) Listar todos los empleados
     3) Buscar empleados
     4) Aumentar los sueldos 
     5) Ordenar empleados por años antiguedad
     6) Agragar un nuevo empleado`)
     
     
     if (opciones === "1") {
        let cantidad = alert (`La cantidad de empledados de la empresa son actualmente: \n ${(empleados.length)}`)
     } else if (opciones === "2") {
        console.table (empleados)
     } else if (opciones === "3") {
        miSistema.buscarEmpleados(empleados)
     } else if (opciones === "4") {
      miSistema.aumentarSueldos (empleados)
     } else if (opciones === "5") {
      miSistema.ordenarPorAntiguedad(empleados)
     } else if (opciones === "6") {
      miSistema.agregarEmpleado (empleados)
     }
     else {
        alert ("La opcion que ingresaste es incorrecta")
     }

     if (confirm('Quiere salir del menu?')) {
		break
	}

}

     
















