console.log("Hello World")

let c2f = function(celsius){
    
    f= (celsius*1.8)+32;
    return f;
}

console.log (c2f(2))



let age =32;
function canConsumeAlcholoInVegas(){
    let age=16;
    if (age>=21){
        return true;
    }
    else{
        return false;
    }
}