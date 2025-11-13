let a:number = 5;
let b :number = 7;
let c :number = -25;
let d = b**2 - 4*a*c;
if (d>0) {
    let x1 = (-b + Math.sqrt(d)) / (2*a);
    let x2 = (-b - Math.sqrt(d)) / (2*a);
    console.log(`x1=${x1}, x2=${x2}`);
}
else if (d==0) {
    let x = -b / (2*a);
    console.log(`x=${x}`);
}
else {
    console.log("ar aqvs");
};

