class Empleado {
   constructor (nombre, sueldo, antiguedad) {
      this.nombre = nombre;
      this.edad = Math.ceil((Math.random() * (55 - 18)) + 18);
      this.sueldo = sueldo;
      this.antiguadad = antiguedad;
   }
}  

const empleados = [
   new Empleado("Carlos Garcia", 48000, 20),
   new Empleado("Laura Martinez", 65000, 10),
   new Empleado("Pedro Gomez", 38000, 5),
   new Empleado("Sofia Ramirez", 52000, 3),
]


const miSistema = new Sistema(empleados)



let salir = false 
while (true) {
    let opciones = prompt(
    `¿Que quieres hacer en la base de datos?
     1) Saber la cantidad de empleados actuales
     2) Listar todos los empleados
     3) Buscar empleados
     4) Agragar un nuevo empleado
     5) Aumentar los sueldos`)
     
     
     if (opciones === "1") {
        let cantidad = alert (empleados.length)
     } else if (opciones === "2") {
        console.table (empleados)
     } else if (opciones === "3") {
        miSistema.buscarEmpleados(empleados)
     } else if (opciones === "4") {
      miSistema.aumentarSueldos (empleados)
     }
     
     else {
        alert ("La opcion que ingresaste es incorrecta")
     }

     if (confirm('Quiere salir del menu?')) {
		break
	}

}

     
















