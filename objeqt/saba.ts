interface Shape {
  perimetri(): number;
}
class Samkutxedi implements Shape {
  a: number;
  b: number;
  c: number;

  constructor(a: number, b: number, c: number) {
   
  }
  perimetri(): number {
    return this.a + this.b + this.c;
  }
}
const triangle = new Samkutxedi(3, 4, 5);

console.log(triangle.perimetri()); 
