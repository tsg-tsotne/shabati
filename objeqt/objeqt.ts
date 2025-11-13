
interface CarInterface {
    color: string;
    brand: string;
    year: number;
    model: string;
    printfullcarname(): string;
}

interface CarCountry {
    country: string;
}

class MakeCar implements CarInterface, CarCountry {
     color: string;
     brand: string;
     year: number;
     model: string;
     country: string;

    constructor(
        color: string,
        brand: string,
        year: number,
        country: string,
        model: string,
    ) {
        this.color = color;
        this.brand = brand;
        this.year = year;
        this.country = country;
        this.model = model;
    }

    printfullcarname(): string {
        return `${this.year} ${this.brand} ${this.model}`;
    }
}

const mycar = new MakeCar(
    'Red',
    'Ferrari',
    2012,
    'Italy',
    'La Ferrari'
);
console.log(mycar.printfullcarname());
console.log(mycar,'saba');