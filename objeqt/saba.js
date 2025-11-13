var Samkutxedi = /** @class */ (function () {
    function Samkutxedi(a, b, c) {
    }
    Samkutxedi.prototype.perimetri = function () {
        return this.a + this.b + this.c;
    };
    return Samkutxedi;
}());
var triangle = new Samkutxedi(3, 4, 5);
console.log(triangle.perimetri());
