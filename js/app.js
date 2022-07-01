let senhaElemento = document.querySelector(".gerador-senha p")
const btnGerarSenha = document.querySelector("button")
const car = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","!","@","#","$","%","*","?","/","'"]

let senha = "", intervalo;

const gerarSenha =()=> {
    for (let i=1; i <= 12; i++) {
        senha += car[Math.floor(Math.random()* car.length)]
    }

    senhaElemento.textContent = senha

    senha=""
}

const efeitoGerarSenha = (btn, loop, tempo)=>{
    intervalo = setInterval(() => {
        gerarSenha()
    }, 12);

    setTimeout(() => {
        clearInterval(intervalo)
        btnGerarSenha.removeAttribute("disabled")
    }, 12*50);
}
btnGerarSenha.onclick = ()=>{
    btnGerarSenha.setAttribute("disabled", "true")
    efeitoGerarSenha()
}

senhaElemento.onclick = ()=>{
    navigator.clipboard.writeText(senhaElemento.textContent)

    senhaElemento.classList.add("copiada")

    setTimeout(() => {
        senhaElemento.classList.remove("copiada")
    }, 2000);
}

