
const Nombre = "Leina";
let vegetariana = false;
let edad = 21;

function generateRandom(){
    return Math.floor(Math.random() * 100);
};

function operations(){
    let suma = [generateRandom(), generateRandom()];
    console.log(`${suma[0]} + ${suma[1]} = ${suma[0] + suma[1]}`)
    let resta = [generateRandom(), generateRandom()];
    console.log(`${resta[0]} - ${resta[1]} = ${resta[0] - resta[1]}`)
    let division = [generateRandom(), generateRandom()];
    console.log(`${division[0]} / ${division[1]} = ${division[0] / division[1]}`)
    let multiplicacion= [generateRandom(), generateRandom()];
    console.log(`${multiplicacion[0]} * ${multiplicacion[1]} = ${multiplicacion[0] * multiplicacion[1]}`)
}

function incrementar (){
     for(let i = 1; i<=edad; i ++){
         
         if(i==edad){
            console.log("esta es mi edad: " + i + " años" )   
         }
     }    
}

function edadreal(){
    edad >= 18 
        ? console.log(`${Nombre} es mayor de edad`)
        : console.log(`${Nombre} es menor de edad`)
}

incrementar();
operations();
edadreal();