var a = 7;
var b = 8;
var c = 9;
// პერიმეტრი
var p = a + b + c;
console.log("პერიმეტრი:", p);
// ჰერონის ფორმულა ფართობისთვის
var s = p / 2;
var k = Math.sqrt(s * (s - a) * (s - b) * (s - c));
console.log("ფართობი:", k);
//სამკუთხედი როგორია???
var x = 5;
var y = 5;
var z = 8;
var t;
if (x === y && y === z) {
    t = "ტოლგვერდა";
}
else if (x === y || y === z || x === z) {
    t = "ტოლფერდა";
}
else {
    t = "სხვადასხვა გვერდის მქონე";
}
document.write("სამკუთხედი არის: " + t);
