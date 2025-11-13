
const a: number = 7;
const b: number = 8;
const c: number = 9;
// პერიმეტრი
const p: number = a + b + c;
console.log("პერიმეტრი:", p);

// ჰერონის ფორმულა ფართობისთვის
const s: number = p / 2;
const k: number = Math.sqrt(s * (s - a) * (s - b) * (s - c));
console.log("ფართობი:", k);

//სამკუთხედი როგორია???
const x: number = 5;
const y: number = 5;
const z: number = 8;

let t: string;

if (x === y && y === z) {
    t= "ტოლგვერდა";
} else if (x === y || y === z || x === z) {
   t = "ტოლფერდა";
} else {
   t = "სხვადასხვა გვერდის მქონე";
}

document.write("სამკუთხედი არის: " + t);
