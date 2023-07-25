let num = [5,1,6,7,9]

num[5] = 2
num.push(3)
console.log(num)
console.log(num.length )
num.sort()
console.log(num)

/* for (let c = 0; c < num.length; c++){
    console.log(num[c])
} */

for (let c in num){
    console.log(num[c])
}

// num.indexOf(7) procura o valor 7 no vetor 
console.log(num.indexOf(7))