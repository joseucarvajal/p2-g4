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
    motivoRechazoSeguro = '';

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

        this._modelo = modelo;
        this.avaluo = avaluo;
        this.marca = marca;
    }

    //Encapsulamiento: proteccion del atributo: metodo getter
    get modelo() {
        return this._modelo;
    }
    
    //Encapsulamiento: proteccion del atributo: metodo setter
    set modelo(nuevoValorDelModelo){
        if(nuevoValorDelModelo < 0){
            throw new Error(`el modelo no puede ser un valor negativo`);
        }
        this._modelo = nuevoValorDelModelo;
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

    asegurar(){

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

        console.info(`El bus ${this.marca} se ha asegurado con exito`);
        //No hubo ningun error
        this.asegurado = true;
    }
}



let bus1 = new Bus(2011, 1000, `Mercedes`);
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

bus3.modelo = -2012;

console.info({bus3});
console.info({bus1});

console.info(`Ahora se instancia de nuevo el bus1`);
bus1 = new Bus(2011, 1000, `Mercedes`);
console.info({bus3});
console.info({bus1});

console.info(`Averiguar si un bus es mas viejo que otro CON METODOS`);
bus1.compararModelo(bus2);

bus1.asegurar();
bus2.asegurar();
bus3.asegurar();

