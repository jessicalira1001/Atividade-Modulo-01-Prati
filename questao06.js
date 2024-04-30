let A = 4;
let B = 5;
let C = 4;

if((A < B + C )&&(B < A + C) && (C < A + B)){

    if(A==B && B == C){
        console.log("Triângulo equilatero")
    }else{
        if(A==B || A==C || B == C){
            console.log("Triângulo isósceles")
        }else{
            console.log("Triângulo escaleno")
        }
    }
}else{
    console.log("Não é triângulo")
}