abstract class figura {
    private name: string;
    constructor(name: string) {
        this.name = name;
    }
    public getName(): string {
        return this.name;
    }
    abstract fartobi(): number;
    abstract perimeter(): number;
}

class samkutxedi extends figura {
    private kateti1: number;
    private kateti2: number;
    constructor(kateti1: number, kateti2: number) {
        super("სამკუთხედი");
        this.kateti1 = kateti1;
        this.kateti2 = kateti2;
    }

    public fartobi(): number {
        return this.kateti1 * this.kateti2 / 2;
    }

    public perimeter(): number {
        return (this.kateti1 + this.kateti2 + Math.sqrt(this.kateti1 * this.kateti1 + this.kateti2 * this.kateti2));
    }
}

class otkutxedi extends figura {
    private sigrze: number;
    private sigane: number;
    constructor(sigrze: number, sigane: number) {
        super("ოთხკუთხედი");
        this.sigrze = sigrze;
        this.sigane = sigane;
    }

    public fartobi(): number {
        return this.sigrze * this.sigane;
    }

    public perimeter(): number {
        return (this.sigrze + this.sigane) * 2;
    }
}

class Circle extends figura {
    private radius: number;
    constructor(radius: number) {
        super("წრე");
        this.radius = radius;
    }

    public fartobi(): number {
        return Math.PI * this.radius * this.radius;
    }

    public perimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}

const figurebi: figura[] = [
    new samkutxedi(4, 3),
    new Circle(6),
    new otkutxedi(25, 5)
];

console.log("OOP-ის ოთხივე პრინციპის გამოყენება ");

figurebi.forEach(figura => {
    console.log(`ფიგურა: ${figura.getName()}`);
    console.log(`ფართობი: ${figura.fartobi().toFixed(2)}`);
    console.log(`პერიმეტრი: ${figura.perimeter().toFixed(2)}`);
    console.log("************************************");
});
+-*