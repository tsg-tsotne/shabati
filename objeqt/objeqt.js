var MakeCar = /** @class */ (function () {
    function MakeCar(color, brand, year, country, model) {
        this.color = color;
        this.brand = brand;
        this.year = year;
        this.country = country;
        this.model = model;
    }
    MakeCar.prototype.printfullcarname = function () {
        return "".concat(this.year, " ").concat(this.brand, " ").concat(this.model);
    };
    return MakeCar;
}());
var mycar = new MakeCar('Red', 'Ferrari', 2012, 'Italy', 'La Ferrari');
console.log(mycar.printfullcarname());
console.log(mycar, 'saba');
