function parimp(n){
    if(n % 2 == 0){
        return('par')
    }else{
        return('impar')
    }
}

let c = parimp(10)
console.log(c)


function calculando(b,c){
    let res = Number(b)**2+Number(c)**2
    let a = Number(res)**0.5
    return a
}

console.log(calculando(5,5))