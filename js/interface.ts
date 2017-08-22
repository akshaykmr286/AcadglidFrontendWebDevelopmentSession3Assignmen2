
//declaring the interface
interface Car{
    model:string;
    color:string;
    milaze:number;
}

//declaring the class as the interface a s argument
class carConstructor {
    private model:string;
    private color:string;
    private milaze:number;
    constructor(car:Car) {
        this.model = car.model;
        this.color = car.color;
        this.milaze = car.milaze;
    }

    public carDetails():string {
        return 'Model :'+this.model+', Color: '+this.color+', '+this.milaze+'km';
    }
}

//creating variable of interface car
var carinterface:Car = {model:"OXELO201",color:"gray",milaze:100};
//instanciating car1 object
var car1 = new carConstructor(carinterface);
console.log(car1);
console.log(car1.carDetails());

document.getElementById("res").innerHTML = car1.carDetails();