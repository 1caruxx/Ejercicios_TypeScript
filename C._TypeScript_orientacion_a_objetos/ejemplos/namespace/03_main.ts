/// <reference path="./02_auto.ts" />

   
let vehiculos : Array<Test.Vehiculo> = [new Test.Auto("ROJO",125000,"FERRARI"),
                                        new Test.Auto("AMARILLO",200000,"SEAT")];

vehiculos.forEach(Mostrar);


function Mostrar(v : Test.Vehiculo):void{

    console.log(v.Mostrar());
}

