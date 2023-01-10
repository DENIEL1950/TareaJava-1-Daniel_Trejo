/*Resuelva los siguientes ejercicios utilizando programación funcional:

1) Una función recibe como parámetro una cadena de caracteres. 
Las palabras de esta cadena de caracteres están separadas por puntos y comas. 
La función debe imprimir cada palabra. Por ejemplo
"Este;es;un;mensaje". El resultado sería:
Este
es 
un
mensaje
Nota importante: Debe hacer 5 llamadas a la función creada. En cada llamada debe usar palabras diferentes.*/

// tenemos 5 cadenas de Caracteres
let cadena1 = "Hola;mundo;soy;Daniel;Trejo";
let cadena2 = "Primera;tarea;en;javascript";
let cadena3 = "Daniel;se;callo;de;la;moto";
let cadena4 = "Mi;pc;es;lenta";
let cadena5 = "Fin;de;la;hitoria";

function cadenaPalabra(caracteres) {
  const subcadenas = caracteres.split(';')
  subcadenas.forEach(caracteres => console.log(caracteres))
  return ''
}
console.log("PRIMER EJERCICIÓ")
console.log("\nPrimera cadena: ");
console.log(cadenaPalabra(cadena1));
console.log("\Segunda cadena: ");
console.log(cadenaPalabra(cadena2));
console.log("\Tercera cadena: ");
console.log(cadenaPalabra(cadena3));
console.log("\nCuarta cadena: ");
console.log(cadenaPalabra(cadena4));
console.log("\nQuinta y ultima cadena: ");
console.log(cadenaPalabra(cadena5));

console.log("\n--->Fin del primer programa de las 5 cadenas <---");


console.log("SEGUNDO EJERCICIÓ")
/*2) Diseñe la función que recibe como parámetro un array de enteros. 
La función debe devolver el array ordenado. (Orden ascendente - consulte el método sort)*/
const numerosEnteros = [1,5,4,9,8,7,2,3,10,0];
numerosEnteros.sort((a, b) =>{
    if(a == b){
        return 0;
    }
    if(a>b){
        return -1;
    }
    return 1;
})
//Números ordenados de mora ascendente.....
console.log("\n---->Numeros ordenados de forma ascendente:")
numerosEnteros.forEach(item => console.log(item));
//Números ordenados de mora descendente.....
console.log("\n---->Numeros ordenados de forma descendente:")
numerosEnteros.sort((a, b) =>{
    if(a == b){
        return 0;
    }
    if(a<b){
        return -1;
    }
    return 1;
})
numerosEnteros.forEach(item => console.log(item));

console.log("TERCER EJERCICIÓ")
/*3) Diseñe la función que recibe como parámetro un array de string. 
La función debe devolver el array ordenado. (Orden ascendente - consulte el método sort)*/
//const vectorCaracteres = ['Arandano', 'Uvas', 'Mango', 'Sandia', 'Cereza']
const vectorCaracteres = "Arandano, Uvas, Mango, Sandia, Cereza";

// Dividimos la cadena en un array
let frutasArray = vectorCaracteres.split(", ");
// Ordenamos el array en forma descendente
frutasArray.sort().reverse()
//mostar en pantalla los caracteres a ordenar
console.log('\nOrdenar de forma ascendente convertido en array: ----->',vectorCaracteres);
console.log(frutasArray); 
console.log();


console.log("CUARTO Y ULTIMO EJERCICIÓ")
/*4) Una cadena de caracteres contienes los nombres de ciudades. 
Se pide convertir esa cadena en un array, y luego ordenarla en forma descendente.
Por ejemplo: "Quito-Barcelona-Lima-Guayaquil-Bogotá-Cali-Esmeraldas"; */

let cadenaCaracteres = "Quito-Barcelona-Lima-Guayaquil-Bogotá-Cali-Esmeraldas";
// Dividimos la cadena en un array
let ciudadesArray = cadenaCaracteres.split("-");
// Ordenamos el array en forma descendente
ciudadesArray.sort().reverse()
//mostar en pantalla los caracteres a ordenar
console.log('\nOrdenar de forma ascendente convertido en array: ----->',cadenaCaracteres);
console.log(ciudadesArray); 
console.log();
