function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let anof = document.getElementById('idade').value
    let span = document.getElementById('span')
    
    if (anof === '' || Number(anof) > ano){
        window.alert('Digite um valor valido')
    }else{
        let fsexo = document.getElementsByName('radsex')
        let idade = Number(ano) - Number(anof)
        let sexo = ''
        if (fsexo[0].checked){
            sexo = 'Homem'
        }else if (fsexo[1].checked){
            sexo = 'Mulher'
        }
        span.innerText = `Voce tem ${idade} anos de idade e é ${sexo}`
    }
}