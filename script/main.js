const botoes = document.querySelectorAll(".btn-calculadora");
const botaoResultado = document.querySelector(".btn-confirmar");
const numeroNaTela = document.querySelector(".tela-calculadora");

class Calculadora {
    constructor(numeroNaTela) {
        this.numeroNaTela = numeroNaTela;
        this.numero = "";
    }
    mostraDigito(digito) {
        // console.log(digito);
        this.numero = digito;
        this.atualizaTela();
    }

    atualizaTela() {

        if(numeroNaTela.value.length <= 3) {
            this.numeroNaTela.value += this.numero;

        }
        // console.log(numeroNaTela);
    
        // console.log(numero);
    }
}


const calc = new Calculadora(numeroNaTela);

botoes.forEach((btn) => {
    btn.addEventListener("click", (evento) => {
        const valor = evento.target.innerText

        console.log(valor);

        if(+valor >= 0 || valor === ".") {
            // console.log(valor);
            calc.mostraDigito(valor)
        }else{
            console.log("Não é um numero ou ponto");
        }
    })
})

// console.log(botoes);