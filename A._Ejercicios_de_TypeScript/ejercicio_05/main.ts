function MostarNombreApellido(nombre:string , apellido:string) : void{

    console.log(`${apellido.toUpperCase()}, ${nombre.charAt(0).toUpperCase()}${nombre.slice(1).toLowerCase()}`);
}

MostarNombreApellido("fErnaNDo" , "laREU");