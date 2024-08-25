//creamos un objeto Date para obtener la fecha actual
let FechaActual = new Date();

// Obtener el dia de semana (0 = Domingo, hasta el 6 = sábado)
let diaSemana = FechaActual.getDay();

// Creamos un arreglo para mapear los números de días a los nombres de los días
let nombreDias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado"];

// Obtener el nombre del día correspondiente al número obtenido
let nombreDia = nombreDias[diaSemana];

// Imprimir el nombre del día en la consola
console.log(`Hoy es: ${nombreDia}`);