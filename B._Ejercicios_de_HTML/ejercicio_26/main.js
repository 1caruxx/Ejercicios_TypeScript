"use strict";
function Agregar() {
    /*
     * source: http://librosweb.es/libro/javascript/capitulo_5/creacion_y_eliminacion_de_nodos.html
     * Un nodo es cualquier elemento de una pagina HTML.
     * Una etiqueta es un nodo, pero el texto contenido en las etiquetas es a su vez otro nodo.
     * Para crear un nodo puede utilizarse el metodo document.createElement("etiqueta").
     * Para crear el nodo de texto que iria dentro de las etiquetas puede usarse el siguiente metodo: document.createTextNode("Hola Mundo!").
     * Para combinar un nodo con otro, por ejemplo para dar formato a un nodo de tipo texto, se debe usar el metodo instancia.appendChild(contenido), donde instancia es el objeto de tipo nodo al que se le agrega el nodo de tipo texto.
     * En este ejercicio cree un nodo de tipo texto con el valor del input de tipo text y lo añadi a un nodo con la etiqueta "li" para despues añadirlo a la lista desordenada.
    */
    var texto = document.createTextNode(document.getElementById("txtItem").value);
    var item = document.createElement("li");
    var lista = document.getElementById("ulLista");
    item.appendChild(texto);
    lista.appendChild(item);
}
//# sourceMappingURL=main.js.map