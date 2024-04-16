const readlineSync = require('readline-sync');

class Seguro 
{
    
    deducible = 0;
    valorAsegurado = 0;
    costo = 0;
    nombre = '';//bronce, plata, oro, diamante

    constructor(deducible, valorAsegurado, nombre, costo){
        this.deducible = deducible;
        this.valorAsegurado = valorAsegurado;
        this.nombre = nombre;
        this.costo =costo;
    }
}

const seguro1 = new Seguro(400, 1000000, 'bronce', 500);
const seguro2 = new Seguro(300, 2000000, 'plata', 3000);
const seguro3 = new Seguro(200, 30000000, 'dorado', 7000);
const seguro4 = new Seguro(0, 70000000, 'diamante', 10000);

/**
Bus desde un sistema de una aseguradora. 
1. Abstraccion: Sacar los atributos mas relevantes de una clase de acuerdo al sistema
Si fuera un sistema de mecanicos, los atributos de la misma clase bus serian diferentes.

2. Clase: Molde, plantilla, modelo para definir que tienen los objetos: atributos y metodos.
las clases sirven para crear objetos. La clase tiene:   
    2.1. Atributos: caracteristicas del objeto que se obtienen mediante un proceso de abstraccion

3. Objeto: Es la creacion (instancia, ejemplar) de una clase. Los objetos tienen:
    3.1. Estado: Son los valores de los atributos en un momento del tiempo
    3.2. Igualdad. Cuando yo hago bus3 = bus1. Las variables bus3 y bus1 son la misma referencia
    y por lo tanto son iguales.
 */
class Bus {

    //Atributos - datos
    avaluo = 0; //costo en dinero del bus
    marca = ''; //mercedes, BMW, Iveco
    asegurado = false; // false = no asegurado, true = si asegurado
    tipoDeSeguro = null; //Este atributo guarda el objeto de tipo Seguro seleccionado
    motivoRechazoSeguro = '';
    #modelo = 0;

    //El metodo constructor protege el programa para que no se creen
    //objetos sin los datos requeridos
    //En este metodo tambien se pueden inicializar otros atributos, segun las
    //necesidades que se tengan
    //Evita que se creen objetos a la loca
    constructor(modelo, avaluo, marca){
        if(modelo == undefined){
            throw new Error(`El bus requiere un modelo`);
        }
        if(!avaluo){
            throw new Error(`El bus requiere un avaluo`);
        }
        if(!marca){
            throw new Error(`El bus requiere una marca`);
        }

        this.#modelo = modelo;
        this.avaluo = avaluo;
        this.marca = marca;
    }

    //Encapsulamiento: proteccion del atributo: metodo getter
    get modelo() {
        return this.#modelo;
    }

    //Encapsulamiento: proteccion del atributo: metodo setter
    set modelo(nuevoValorDelModelo){
        if(nuevoValorDelModelo < 0){
            throw new Error(`el modelo no puede ser un valor negativo`);
        }
        this.#modelo = nuevoValorDelModelo;
    }
    
    
    //Metodos - inteligencia
    compararModelo(otroBus){
        if(this.modelo < otroBus.modelo){
            console.info(`El bus ${this.marca} es mas viejo que ${otroBus.marca}`);
        }
        else{
            console.info(`El bus ${otroBus.marca} es mas viejo que ${this.marca}`);
        }
    }

    asegurar(dineroDisponible){

        //Buena practica de programacion: Primero se verifican los errores
        //Si hay algun error, se hace lo que se tenga que hacer y se retorna
        if(this.modelo < 1970){
            this.motivoRechazoSeguro = `el bus es muy viejo`;
            return;
        }

        if(this.avaluo > 10000){
            this.motivoRechazoSeguro = `el bus es es demasiado costoso`;
            return;
        }

        const seguroElegido = readlineSync.question('Que seguro quiere Diamante(d), Dorado(o), Plata(p), Bronce(b): ');
        if(seguroElegido == 'd'){
            if(dineroDisponible < seguro4.costo){
                throw new Error(`El dinero disponible no alcanza para el seguro ${seguro4.nombre}`);
            }

            this.tipoDeSeguro = seguro4;
        }
        else if(seguroElegido == 'o'){
            if(dineroDisponible < seguro3.costo){
                throw new Error(`El dinero disponible no alcanza para el seguro ${seguro3.nombre}`);
            }
            this.tipoDeSeguro = seguro3;
        }
        else if(seguroElegido == 'p'){
            if(dineroDisponible < seguro2.costo){
                throw new Error(`El dinero disponible no alcanza para el seguro ${seguro2.nombre}`);
            }
            this.tipoDeSeguro = seguro2;
        }
        else {
            if(dineroDisponible < seguro1.costo){
                throw new Error(`El dinero disponible no alcanza para el seguro ${seguro1.nombre}`);
            }
            this.tipoDeSeguro = seguro1;
        }

        console.info(`El bus ${this.marca} se ha asegurado con exito`);
        //No hubo ningun error
        this.asegurado = true;
    }
}



let bus1 = new Bus(
    2011, 
    1000, 
    `Mercedes`
);

let bus2 = new Bus(1995, 300, `Iveco`);
let bus3 = new Bus(2011, 50000, `BMW`);

if(bus1 == bus3){
    console.log(`Los buses 1 y 3 son iguales`);
}
else {
    console.log(`Los buses 1 y 3 son diferentes pero tienen el mismo ESTADO`);
}

console.info(`Los buses son diferentes instancias pero tienen el mismo estado`);
console.info({bus1});
console.info({bus3});

console.info(`Se asigna el bus3 al bus1`);
bus1 = bus3;
if(bus1 == bus3){
    console.log(`Los buses 1 y 3 son iguales porque son EL MISMO OBJETO`);
}
else {
    console.log(`Los buses 1 y 3 son diferentes`);
}

console.info({bus1});
console.info({bus3});
console.info(`Ahora se cambia el modelo del bus3`);

bus3.modelo = 2012;
console.info(`ESTE ES EL MODELO DEL BUS 3: ${bus3.modelo}`);

console.info({bus3});
console.info({bus1});

console.info(`Ahora se instancia de nuevo el bus1`);
bus1 = new Bus(2011, 1000, `Mercedes`);
console.info({bus3});
console.info({bus1});

console.info(`Averiguar si un bus es mas viejo que otro CON METODOS`);
bus1.compararModelo(bus2);

bus1.asegurar(3000);

