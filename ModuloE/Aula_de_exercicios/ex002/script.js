
function calcular(){
        let num = document.getElementById('num').value
        let numf = document.getElementById('fim').value
        let passo = document.getElementById('passo').value
        let res = document.getElementById('resposta')

        let i = Number(num)
        let f = Number(numf)
        let p = Number(passo)

        if (p <=0){
            p = 1
        }
        
        if (f >= i){
        for (let c = i; c <= f;c += p){
            res.innerHTML += `  ${c}`
        }
    }else{
        for (let c = i; c >= f; c -= p){
            res.innerHTML += `  ${c}`
        }
    }
}
