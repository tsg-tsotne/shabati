//სტრიქონების შეერთება (კონკატენაცია) – TypeScript
const saxeli: string = "საბა";
const dabadebisdre: number = 2005;

console.log("მე, ვარ \"" + saxeli + "\" დავიბადე " + dabadebisdre + " წელს.");
//ორი მასივის დაწყვილება
const ricxvi: number[] = [1, 2, 3];
const teqsti: string[] = ["ერთი", "ორი", "სამი"];

for (let i = 0; i < ricxvi.length; i++) {
    console.log(ricxvi[i] + " = " + teqsti[i]);
}
//ყველა ორნიშნა ლუწი რიცხვის ჯამი
let sum: number = 0;

for (let i: number = 10; i <= 99; i++) {
    if (i % 2 === 0) {
        sum += i;
    }
}

console.log("ყველა ორნიშნა ლუწი რიცხვის ჯამი:", sum);

//დადებითი ელემენტების რაოდენობა მასივში
const nums: number[] = [-5, 3, 0, 7, -2, 9, -1];
let dadebiti: number = 0;

for (let num of nums) {
    if (num > 0) {
        dadebiti++;
    }
}

console.log("დადებითი ელემენტების რაოდენობა:", dadebiti);