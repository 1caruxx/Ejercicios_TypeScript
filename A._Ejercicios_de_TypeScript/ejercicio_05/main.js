function MostarNombreApellido(nombre, apellido) {
    console.log(apellido.toUpperCase() + ", " + nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase());
}
MostarNombreApellido("fErnaNDo", "laREU");
