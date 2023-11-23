'use strict'
let vehicle ={
    make: 'Toyota',
    model: 'Camry',
    color: 'Verde',
    licensePlate: 'XXX-107',
    year: prompt("Ingrese año fabricacion de vehiculo"),
   
};
alert(vehicle.make+ ', ' + vehicle.model + ', ' + vehicle.color + ', ' + vehicle.licensePlate + ', ' + vehicle.year);
function validartaxi(vehicleYear = 2023){
    if((vehicleYear-vehicle.year)<10){
        alert(Boolean(true))
        return(Boolean(true))
    }
    else{
        alert(Boolean(false))
        return(Boolean(false))
    }
}
validartaxi();