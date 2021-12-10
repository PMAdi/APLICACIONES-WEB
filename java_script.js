//palabra reservada "let" es para crear variables
//palabra reservada "const" es para crear constantes

const pi = 3.14;

let coche = "Ferrari";
coche = "Ford";

let numero = 5;


console.log(coche);
console.log(numero);
console.log(pi);


const pi2= pi + 0.5 ;
console.log(pi2);
//COMENTARIOS EN JAVA SCRIPT//

//OPERACIONES: DOS VALORES NUMERICOS DAN RESUTLADO NUMERICO 
console.log(4+5);

//CONCATENACIONES CARACTER MAS NUMERICO DAN RESULTADO CARACTER
console.log (coche+"OPEL"); //cadena + cadena = cadena
console.log (numero+5); // cadena + valor = cadenaS

let otracosa = 9;
let a = 6;
let b= otracosa + a;

console.log(b)


let pc = {
    ram : 4,
    cpu : "intel",
    gpu : "gtx",
}

console.log(pc); //mostrar objeto entero
console.log(pc.gpu); //mostrar el valor ram del objeto
console.log("para hacer una cadena" +pc.ram + " " + pc.cpu + "") //hacer cadena

let ifp={
    director : "Serafin",
    coordinador : "Hamu",
    profesores:{
        dam : "Sergio Paco Naza",
        son : "Victor",
        mkt : "Sonia Esther Naza",
    }   
}

console.log(ifp.profesores.mkt);