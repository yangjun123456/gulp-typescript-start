var array1 = { id: '1', name: 'aa' };
var Bbbbb = (function () {
    function Bbbbb() {
    }
    Bbbbb.prototype.fun = function () {
        console.log('11');
    };
    return Bbbbb;
}());
var bb = new Bbbbb();
bb.fun();
var Dd = (function () {
    function Dd() {
    }
    Dd.prototype.fun2 = function () {
        console.log('123');
    };
    return Dd;
}());
var ee = new Dd();
ee.fun2();
