interface Person {
  name: string;
  age: number;
  salami(): string;
}

const user2: Person = {
  name: "toma",
  age: 4,
  salami() {
    return `მოგესალმებით, მე ვარ ${this.name}`;
  }
};

console.log(user2.salami());
