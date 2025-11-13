function calculateSum() {
    var num1 = document.getElementById("num1");
    var num2 = document.getElementById("num2");
    var num3 = document.getElementById("num3");
    var result = document.getElementById("result");
    var a = Number(num1.value);
    var b = Number(num2.value);
    var c = Number(num3.value);
    var sum = a + b + c;
    result.innerText = "ჯამი: " + sum;
}
