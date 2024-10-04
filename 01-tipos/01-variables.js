//Primera funcion
//Funcion despedir



function despedir(){
    let a = "adios amigos "
    console.log(`${a}`);
}

//MultiplicarPorDos
function MultiplicarPorDos(a){
let res = a*2;
console.log(`tu numero es, ${res}`);
}


//esMayorDeEdad
function esMayorDeEdad(edad){
    if(edad>=18){
        console.log("Es mayor de edad");
        
    }else{console.log("Es menor de edad");}

}

//Parametros
//Multplicar
function multplicar(a,b){
    res= a*b;
    console.log(`El resultado es ${res}`);
}

//saludo personalizado
function saludoPersonalizado(nombre,apellido){
    console.log(`Hola ${nombre} ${apellido}`)

}

//calcular potencias
function cacularPotencia(x,n){
    let resultado = x**n;
    
    return resultado;
}

 //restar
 function restar(a,b){
    let resultado;
    resultado = a - b;
    return resultado;
}
//dividir
function dividir(a,b){
    resultado= a/b;
    return resultado;

}

//funcion expression
//mutiplicar
let MultiplicarDos = function(a,b){
    return a*b;
}

//saludar2
let saludarDos = function(nombre){
    console.log(`hola ${nombre}`)


}
//esPar
let esPar = function(a){
    if(a%2===0){
        return true;
    }
    return false;
}
//funciones flecha
//saludarFlecha
let saludarFlecha = (nombre) => console.log(`Hola ${nombre}`);

//calcularArea
let calculaArea = (radio) => 3.14 * radio**2;

//recursividad
//sumanaturales

function sumanaturales(n){
    if(n<=1) {return 1;}
    return n + sumanaturales(n-1);
}

 //fibonacci

 function fibonacci(n){  //"n" cantidad de repeticiones
    if (n===0){return 0;}
    if(n===1){return 1;}
    return fibonacci(n-1) + fibonacci(n-2);
    
    
}


 //factorial
 function factorial(n){
  if(n<=1){return 1;}
  return n * factorial(n-1)  
}


 
module.exports ={
    despedir,
    MultiplicarDos,
    esMayorDeEdad,
    multplicar,
    saludoPersonalizado,
    cacularPotencia,
    restar,
    dividir,
    saludarDos,
    esPar,
    calculaArea,
    sumanaturales,
    fibonacci,
    factorial,
    cacularPotencia,
    saludarFlecha,
    MultiplicarPorDos,

}