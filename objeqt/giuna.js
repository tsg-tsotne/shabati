var pc = /** @class */ (function () {
    function pc(brandcp, brandcpu, modelcpu, ram, year, os) {
        this.brandcp = brandcp;
        this.brandcpu = brandcpu;
        this.modelcpu = modelcpu;
        this.ram = ram;
        this.year = year;
        this.os = os;
    }
    pc.prototype.mepcinfo = function () {
        return "".concat(this.year, " ").concat(this.brandcpu, " ").concat(this.modelcpu);
    };
    return pc;
}());
var myypc = new pc('lenovo', 'ryzen', 'intel', 16, 2025, 'linux');
console.log(myypc.mepcinfo());
console.log(myypc);
