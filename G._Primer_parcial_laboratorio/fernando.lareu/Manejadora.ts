/// <reference path="./Persona.ts"/>
/// <reference path="./Ciudadano.ts"/>

namespace Entidades {

    export class Manejadora {

        public static agregarCiudadano () {

            var nombre : string = (<HTMLInputElement>document.getElementById("txtNombre")).value;
            var apellido : string = (<HTMLInputElement>document.getElementById("txtApellido")).value;
            var edad : number = parseInt((<HTMLInputElement>document.getElementById("txtEdad")).value);
            var dni : number = parseInt((<HTMLInputElement>document.getElementById("txtDni")).value);            
            var pais : string = (<HTMLSelectElement>document.getElementById("cboPais")).value;
            var xhttp : XMLHttpRequest = new XMLHttpRequest();

            var ciudadano : Entidades.Ciudadano = new Entidades.Ciudadano(nombre , apellido , edad , dni , pais);

            xhttp.open("get" , "./admin.php?accion=agregar&json="+ciudadano.ToString());
            xhttp.send();
        }

        public static mostrarCiudadanos() {

            var xhttp : XMLHttpRequest = new XMLHttpRequest();     
            var div = (<HTMLDivElement>document.getElementById("divTabla"));
            
            xhttp.open("get" , "./admin.php?accion=listar");
            xhttp.send();

            xhttp.onreadystatechange = () => {

                if(xhttp.readyState == 4 && xhttp.status == 200) {

                    var json = JSON.parse(xhttp.responseText);

                    var cadenaAuxiliar : string = "<table><tbody><thead><th>Nombre</th><th>Apellido</th><th>Edad</th><th>DNI</th><th>Pais</th><th>Imagen</th><th>Accion</th></thead>";

                    for(let item of json) {

                        cadenaAuxiliar += `<tr><td>${(item.datosPersonales).nombre}</td>
                        <td>${(item.datosPersonales).apellido}</td>
                        <td>${(item.datosPersonales).edad}</td>
                        <td>${(item.datosCiviles).dni}</td>
                        <td>${(item.datosCiviles).pais}</td>
                        <td><img src='${(item.datosCiviles).foto}'/></td>
                        <td><input type='button' value='eliminar' onclick='eliminarCiudadano(${(item.datosCiviles).dni})'/>
                        <input type='button' value='modificar' onclick='modificarCiudadano(${(item.datosPersonales).nombre} , ${(item.datosPersonales).apellido} , ${(item.datosPersonales).edad}, ${(item.datosCiviles).dni} , ${(item.datosCiviles).pais}'/></td>
                        </tr>`;
                    }

                    cadenaAuxiliar += `</tbody></table>`;
                    div.innerHTML = cadenaAuxiliar;
                }
            } 
        }

        public static eliminarCiudadano(dni:string) {

            var xhttp : XMLHttpRequest = new XMLHttpRequest();     

            xhttp.open("get" , "./admin.php?accion=eliminar&dni="+dni);
            xhttp.send();
        }

        public static modificarCiudadano(nombre:string , apellido:string , edad:string , dni:string , pais:string) {

            (<HTMLInputElement>document.getElementById("txtNombre")).value = nombre;
            (<HTMLInputElement>document.getElementById("txtApellido")).value = apellido;
            (<HTMLInputElement>document.getElementById("txtEdad")).value = edad;
            (<HTMLInputElement>document.getElementById("txtDni")).value = dni;            
            (<HTMLSelectElement>document.getElementById("cboPais")).value = pais;

            var vNombre : string = (<HTMLInputElement>document.getElementById("txtNombre")).value;
            var vApellido : string = (<HTMLInputElement>document.getElementById("txtApellido")).value;
            var vEdad : number = parseInt((<HTMLInputElement>document.getElementById("txtEdad")).value);
            var vDni : number = parseInt((<HTMLInputElement>document.getElementById("txtDni")).value);            
            var vPais : string = (<HTMLSelectElement>document.getElementById("cboPais")).value;
            var xhttp : XMLHttpRequest = new XMLHttpRequest();

            var ciudadano : Entidades.Ciudadano = new Entidades.Ciudadano(vNombre , vApellido , vEdad , vDni , vPais);

            xhttp.open("get" , "./admin.php?accion=modificar&json="+ciudadano.ToString());

        }
    }
}