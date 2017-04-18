interface cc{
    id:string,
    name:string,
    arr:object
}

class Dd implements cc {
    id:'1';
    name:'bb';
    arr:[1,2,3];
    constructor(){}
    fun2(){
        console.log('123');
    }
}
let ee = new Dd();
ee.fun2();