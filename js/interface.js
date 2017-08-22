//declaring the class as the interface a s argument
var carConstructor = (function () {
    function carConstructor(car) {
        this.model = car.model;
        this.color = car.color;
        this.milaze = car.milaze;
    }
    carConstructor.prototype.carDetails = function () {
        return 'Model :' + this.model + ', Color: ' + this.color + ', ' + this.milaze + 'km';
    };
    return carConstructor;
}());
//creating variable of interface car
var carinterface = { model: "OXELO201", color: "gray", milaze: 100 };
//instanciating car1 object
var car1 = new carConstructor(carinterface);
console.log(car1);
console.log(car1.carDetails());
document.getElementById("res").innerHTML = car1.carDetails();
