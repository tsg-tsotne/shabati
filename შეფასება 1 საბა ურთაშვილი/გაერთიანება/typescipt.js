//სტრიქონების შეერთება (კონკატენაცია) – TypeScript
var saxeli = "საბა";
var dabadebisdre = 2005;
console.log("მე, ვარ \"" + saxeli + "\" დავიბადე " + dabadebisdre + " წელს.");
//ორი მასივის დაწყვილება
var ricxvi = [1, 2, 3];
var teqsti = ["ერთი", "ორი", "სამი"];
for (var i = 0; i < ricxvi.length; i++) {
    console.log(ricxvi[i] + " = " + teqsti[i]);
}
//ყველა ორნიშნა ლუწი რიცხვის ჯამი
var sum = 0;
for (var i = 10; i <= 99; i++) {
    if (i % 2 === 0) {
        sum += i;
    }
}
console.log("ყველა ორნიშნა ლუწი რიცხვის ჯამი:", sum);
//დადებითი ელემენტების რაოდენობა მასივში
var nums = [-5, 3, 0, 7, -2, 9, -1];
var dadebiti = 0;
for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
    var num = nums_1[_i];
    if (num > 0) {
        dadebiti++;
    }
}
console.log("დადებითი ელემენტების რაოდენობა:", dadebiti);
