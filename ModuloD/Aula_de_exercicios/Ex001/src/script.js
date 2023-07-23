function carregar(){
    let bg = document.getElementById('fundo')
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('img')
    let data = new Date()
    let hora =data.getHours()
    msg.innerText = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12){
        //dia
        bg.classList.add('bg-[#0070A3]')
    }else if(hora >= 12 && hora < 18){
        //tarde
        img.src = '../img/tarde.jpg'
    }else{
        img.src = '../img/noite.jpg'
        bg.classList.add('bg-[#0F1929]')
    }
}