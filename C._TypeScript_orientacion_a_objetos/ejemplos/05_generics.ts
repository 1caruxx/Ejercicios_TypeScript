import {Vehiculo} from "./02_herencia";
import {Auto} from "./02_herencia";

let vehiculos : Array<Vehiculo> = [new Auto("ROJO",125000,"FERRARI"),new Auto("AMARILLO",200000,"SEAT")];

vehiculos.forEach(Mostrar);


function Mostrar(v : Vehiculo):void{

    console.log(v.Mostrar());
}