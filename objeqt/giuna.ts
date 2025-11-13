interface mypc {
    brandcp: string;
    brandcpu: string;
    modelcpu: string;
    ram: number;
}

interface mypc2 {
    year: number;
    os: string;
    mepcinfo(): string;
}

class pc implements mypc, mypc2 {
    brandcp: string;
    brandcpu: string;
    modelcpu: string;
    ram: number;
    year: number;
    os: string;

    constructor(
        brandcp: string,
        brandcpu: string,
        modelcpu: string,
        ram: number,
        year: number,
        os: string
    ) {
        this.brandcp = brandcp;
        this.brandcpu = brandcpu;
        this.modelcpu = modelcpu;
        this.ram = ram;
        this.year = year;
        this.os = os;
    }

    mepcinfo(): string {
        return `${this.year} ${this.brandcpu} ${this.modelcpu}`;
    }
}

const myypc = new pc(
    'lenovo',
    'ryzen',
    'intel',
    16,
    2025,
    'linux'
);

console.log(myypc.mepcinfo());
console.log(myypc);
