interface aa {
    id: string,
    name: string,
    age?: number
}

let array1:aa = { id:'1',name:'aa' }

class Bbbbb implements aa {
    id:'1';
    name:'aa';
    constructor(){}
    fun(){
        console.log('11');
    }
}
let bb = new Bbbbb();
bb.fun();