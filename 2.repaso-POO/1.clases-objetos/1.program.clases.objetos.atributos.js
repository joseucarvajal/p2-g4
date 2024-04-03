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
    modelo = 0; //anio en que se fabrico el bus
    avaluo = 0; //costo en dinero del bus
    marca = ''; //mercedes, BMW, Iveco
}

let bus1 = new Bus();
bus1.modelo = 2011;
bus1.avaluo = 1000;
bus1.marca = 'Mercedes';

let bus2 = new Bus();
bus2.modelo = 1995;
bus2.avaluo = 300;
bus2.marca = 'Iveco';

let bus3 = new Bus();
bus3.modelo = 2011;
bus3.avaluo = 1000;

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
console.info({bus3});
console.info({bus1});

console.info(`Ahora se instancia de nuevo el bus1`);
bus1 = new Bus();
bus1.modelo = 2011;
bus1.avaluo = 1000;
console.info({bus3});
console.info({bus1});


//PROBLEMA: El codigo no esta en la clase, por lo tanto se debe repetir
//corregir un error se tiene que hacer en muchas partes.
//SOLUCION: Agregar metodos a la clase
console.info(`Averiguar si un bus es mas viejo que otro SIN METODOS`);
if(bus1.modelo < bus2.modelo)
{
    console.info(`El bus 1 es mas viejo que el bus 2`);
}
else if(bus1.modelo == bus2.modelo)
{
    console.info(`El bus 1 tiene el mismo modelo que el bus 2`);
}
else
{
    console.info(`El bus 2 es mas viejo que el bus 1`);
}


