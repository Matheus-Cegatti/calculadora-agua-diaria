const botoes = document.querySelectorAll(".btn-calculadora");
const botaoResultado = document.querySelector(".btn-confirmar");
const tela = document.querySelector(".input-peso");

class Calculadora {
    constructor(tela) {
        this.tela = tela;
        this.tela = ""
    }
    
}




botoes.forEach((btn) => {
    btn.addEventListener("click", (evento) => {
        const valor = evento.target.innerText

        // console.log(valor);

        if(+valor >= 0 || valor === ".") {
            console.log(valor);
        }else{
            console.log("Não é um numero ou ponto");
        }
    })
})

// console.log(botoes);