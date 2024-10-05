//Primera funcion
//Funcion despedir



function despedir(){
    let a = "adios amigos "
    console.log(`${a}`);
}

//MultiplicarPorDos
function MultiplicarPorDos(a){
let res = a*2;
return res;
}


//esMayorDeEdad
function esMayorDeEdad(edad){
    if(edad>=18){
        return true;
        
    }else {return false;}

}

//Parametros
//Multplicar
function multplicar(a,b){
    res= a*b;
    return res;
}

//saludo personalizado
function saludoPersonalizado(nombre,apellido){
    return console.log(`Hola ${nombre} ${apellido}`);

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
let MultiplicarDOS = function(a,b){
    return a*b;
}

//saludar2
let saludar = function(nombre){
    return console.log(`hola ${nombre}`);


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
let saludarFlecha = (nombre) =>{return console.log(`Hola ${nombre}`);}

//calcularArea
let calculaArea = (radio) => {return 3.14 * radio**2;}
 //multiplicar flecha
let  MultiplicarFlecha=(a,b) => {return a*b;}


 
 

//recursividad
//sumanaturales

function suma(n){
    if(n<=1) {return 1;}
    return n + suma(n-1);
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

function potencia(base,exponente){
    if(exponente===0){
        return 1;
    }
    return base * potencia(base, exponente-1 );

}


 
module.exports = {
    despedir,
    MultiplicarPorDos,
    esMayorDeEdad,
    multplicar,
    saludoPersonalizado,
    cacularPotencia,
    restar,
    dividir,
    MultiplicarDOS,
    saludar,
    esPar,
    calculaArea,
    suma,
    fibonacci,
    factorial,
    potencia,
    saludarFlecha,
    MultiplicarFlecha,
};