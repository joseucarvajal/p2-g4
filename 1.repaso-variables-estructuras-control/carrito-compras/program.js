const readlineSync = require('readline-sync');

let totalCompra = 0;
let totalDescuentos = 0;


function procesarProducto(){

    const nombreProducto = readlineSync.question(`Ingrese el nombre del producto: `);
    if(nombreProducto.length == 0){
        console.error(`El nombre del producto no puede ser vacio`);
    }
    else
    {
        const precioUnitario = +readlineSync.question(`Ingrese el precio unitario del producto: `);
        if(isNaN(precioUnitario)){
            console.error(`El precio unitario del debe ser un numero`);
        }
        else if(precioUnitario <= 0) {
            console.error(`El precio unitario del debe ser un valor positivo`);
        }
        else {
            const unidades = +readlineSync.question(`Ingrese la cantidad de unidades a llevar: `);
            if(isNaN(unidades)){
                console.error(`la cantidad de productos a llevar debe ser un valor numerico`);
            }
            else if(unidades <= 0) {
                console.error(`la cantidad de productos a llevar no puede ser un valor cero o negativo`);
            }
            else {
                const tieneDescuento = readlineSync.question(`El producto tiene descuento s/n: `);
                const totalCompraProducto = precioUnitario*unidades;

                if(tieneDescuento.toLowerCase() != `n`){
                    const valorDescuento = totalCompraProducto * (10/100);
                    totalCompra += totalCompraProducto;
                    console.info(`El valor del descuento del producto ${nombreProducto} es ${valorDescuento}`);
                    totalCompra -= valorDescuento;
                    totalDescuentos += valorDescuento;
                }
            }
        }
    }
}

const cantidadDeProductos = +readlineSync.question(`Ingrese la cantidad de productos a registrar: `);
if(isNaN(cantidadDeProductos)){
    console.error(`La cantidad de productos debe ser un numero`);
}
else if(cantidadDeProductos <= 0) {
    console.error(`La cantidad de productos debe ser un valor positivo`);
}
else {
    for(let i = 0; i<cantidadDeProductos; i++ ){
        procesarProducto();
    }

    console.info(`El total de la compra es: ${totalCompra}`);
    console.info(`El valor total otorgado por concepto de descuentos es: ${totalDescuentos}`);
}

