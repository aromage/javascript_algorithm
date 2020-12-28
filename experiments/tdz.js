let a = 3;

function b(){
    console.log(a); //error 남
    let a = 5;
}
//선언 - 초기화 - 대입

class car{
    constructor(color){
        this.color = color;
    }
}
class Daewoo extends car{
    constructor(shape, color){
        this.color = color;    //에러남
        this.shape = shape;
    }
}
const newCar = new Daewoo('a', 'b');