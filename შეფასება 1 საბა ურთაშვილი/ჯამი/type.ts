function calculateSum(): void {
    const num1 = <HTMLInputElement>document.getElementById("num1");
    const num2 = <HTMLInputElement>document.getElementById("num2");
    const num3 = <HTMLInputElement>document.getElementById("num3");
    const result = <HTMLParagraphElement>document.getElementById("result");

    const a: number = Number(num1.value);
    const b: number = Number(num2.value);
    const c: number = Number(num3.value);

    const sum: number = a + b + c;

    result.innerText = "ჯამი: " + sum;
}
