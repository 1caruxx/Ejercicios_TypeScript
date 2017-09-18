var producto = [
    {"codigoBarra" : 123 , "nombre" : "Caramelo" , "precio" : 3.5} ,
    {"codigoBarra" : 456 , "nombre" : "Chocolate" , "precio" : 7.0} ,
    {"codigoBarra" : 789 , "nombre" : "Galletita" , "precio" : 2.3}];

    for(let item of producto) {

        console.log("Producto: " + item.nombre);
        console.log("Precio: " + item.precio);
        console.log("Codigo de barra: " + item.codigoBarra);
        console.log("\n");
    }

