    function calcular(){
        let numf = document.getElementById('num').value
        let div = document.getElementById('resposta')
        
        let n = Number(numf)
          
        div.innerHTML = ''

        for (let c = 1; c <= 10; c++){
            let res = n * c 
            div.innerHTML += `${n} X ${Number(c)} = ${res} <br>`
        }
    }