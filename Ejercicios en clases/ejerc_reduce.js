/*
El reduce()método ejecuta una función de devolución de llamada "reductora" proporcionada 
por el usuario en cada elemento de la matriz, en orden, pasando el valor de retorno 
del cálculo en el elemento anterior. El resultado final de ejecutar el reductor 
en todos los elementos de la matriz es un valor único.
*/
const vector = [1,4,10,20,33,45,4,2,15];
//const valInicial = 0;
const sumatoria = vector.reduce((ac, va)=>{
    return ac + va;
}, 0);
console.log("La sumatoria del vector es:", sumatoria);
//Diseñe la funcion que devuelve el producto de los elementos de un vector
//Llamar 2 veces a la función

//mio
const vectorProductos = [2,5,74,7,109,4,1,];
const productoVectorial = function(vector){
    return vector.reduce((ca, av)=>{
        return ca * av;
    },1);
}
console.log("El producto vectorial es:", productoVectorial(vector));
console.log("El producto vectorial es:", productoVectorial(vectorProductos));

//profe
const producto = function(vector)
{
    return vector.reduce ((ac, va)=>{
        return ac*va;
    })
}
console.log(producto([1,2,3]));
console.log(producto([1,2,3]));

/*
foreach: recorre todos los elementos del vector
*/
vector.forEach((num, index)=>{
    console.log("Elemento:", num, index)
})

//Se tiene una cadena de caracteres. Se pide diseñar la función que 
//devuelva la cadena sin consonantes(devuelve solo las vocales)
//Ejemplo: "Hola Esmeraldas"
//Resultado esperado: "oa Eeaa"
//Utilice filter
const vocales = "Hola Esmeraldas"
const devuelveConsonantes = function(vocales) {
    return vocales.filter( item =>{
        switch{
            case 1;
            if(volaces)
        }
        return 
    })
}
console.log("Palabra: ", vocales)
console.log("Palabra: ", devuelveConsonantes(vocales).split(" "));

//Determine si todos lo elementos de la sigueinte matriz son positivos
const matrizNumeros = [[1,2,3,4], [4,5,6,7],[8,9,10]]
console.log(matrizNumeros);
matrizNumeros.map(matriz=>{
    return matriz.
})
