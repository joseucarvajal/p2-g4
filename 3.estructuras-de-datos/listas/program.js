class Estudiante {
    nota = 0;
    nombre = "";

    constructor(nombre, nota){
        this.nombre = nombre;
        this.nota = nota;
    }
}

class NodoEstudiante {
    valor = null;
    siguiente = null;
}

class ListaEstudiante {
    head = null;

    insertarEstudiante(estudiante){
        const nuevoNodo = new NodoEstudiante();
        nuevoNodo.valor = estudiante;

        //La lista is empty
        if(this.head == null){
            this.head = nuevoNodo;
        }
        else {
            let nodoTmp = this.head;
            while(nodoTmp.siguiente != null){
                nodoTmp = nodoTmp.siguiente;
            }

            nodoTmp.siguiente = nuevoNodo;
        }
    }

    scan(){
        let nodoTmp = this.head;
        while(nodoTmp != null){
            console.info(`Datos del estudiante - nombre: ${nodoTmp.valor.nombre} - Nota: ${nodoTmp.valor.nota }`);
            nodoTmp = nodoTmp.siguiente;
        }
    }

    calcularPromedio(){
        let sumaNotas = 0;
        let nodoTmp = this.head;
        let contadorEstudiantes = 0;

        while (nodoTmp != null){
            sumaNotas += nodoTmp.valor.nota;
            nodoTmp = nodoTmp.siguiente;
            contadorEstudiantes++;
        }

        return sumaNotas / contadorEstudiantes;
    }
}


const listaEstudiantes = new ListaEstudiante();
const est1 = new Estudiante("Jose", 5);
listaEstudiantes.insertarEstudiante(est1);
const est2 = new Estudiante("Pepito", 1);
listaEstudiantes.insertarEstudiante(est2);

listaEstudiantes.scan();

const promedioNotas = listaEstudiantes.calcularPromedio();
console.info(`El promedio de notas es: ${promedioNotas}`);