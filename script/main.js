const botoes = document.querySelectorAll(".btn-calculadora");
const botaoResultado = document.querySelector(".btn-confirmar");
const botaoDeOperacao = document.querySelectorAll(".btn-operacao");
const numeroNaTela = document.querySelector(".tela-calculadora");
const resultadoAparece = document.querySelector(".tela-resultado");
const botaoSaibaMais = document.querySelector(".btn-saiba--mais");
const sessaoSaibaMais = document.querySelector(".sessao-saiba--mais");
const botaoDePonto = document.querySelector(".btn-ponto")





// nao permitindo que digite mais de um ponto no teclado ou que comece digitando um ponto
numeroNaTela.addEventListener("keydown", (evento) => {
    const umPonto = evento.key === "."
    

    const estaVazio = evento.target.value.length === 0;
    if (estaVazio && umPonto) {
        evento.preventDefault()
        return
    }

    const pontoExiste = evento.target.value.includes(".");
    if (pontoExiste && umPonto) {
        evento.preventDefault()
    }
})

//digitando só numero e ponto 

numeroNaTela.addEventListener("keypress", function (e) {
    const charCode = (e.charCode ? e.charCode : e.wich);
    console.log(charCode);
    if (charCode < 45 || charCode > 57 || charCode === 47) {
        e.preventDefault();
    }
})





class Calculadora {
    constructor(numeroNaTela) {
        this.numeroNaTela = numeroNaTela;
        this.numero = "";
    }

    //limitando "." no teclado da calculadora e não deixando começar com "." no teclado da calculadora
    mostraDigito(digito) {

        if (digito === "." && numeroNaTela.value.includes(".")) {
            return;


        }
        if(digito === "." && numeroNaTela.value.length === 0) {
          return
        }


        console.log(digito);
        this.numero = digito;
        this.atualizaTela();
    }



    atualizaTela() {

        if (numeroNaTela.value.length <= 4) {
            this.numeroNaTela.value += this.numero;

        }

    }
}

function operacoes() {
    botaoDeOperacao.forEach(operacao => {
        operacao.addEventListener("click", () => {
            if (operacao.textContent === "C") {
                apagarCalculadora()
                resultadoAparece.textContent = ""
            } else if (operacao.textContent === "DEL") {
                deletarNumero();
            } else if (operacao.textContent === "Confirmar") {
                confirmaResultado();
            }
        })
    })
}


function apagarCalculadora() {
    numeroNaTela.value = ""
}

function deletarNumero() {
    if (numeroNaTela.value.length >= 1) {
        let numerosDigitado = numeroNaTela.value.length;
        numeroNaTela.value = numeroNaTela.value.substring(0, numerosDigitado - 1);
    }
}

function confirmaResultado() {

    resultadoAparece.textContent = `Você precisa tomar no minimo  ${numeroNaTela.value = Math.round(numeroNaTela.value * 35) / 1000} litros de agua por dia`;
    apagarCalculadora();
}





const calc = new Calculadora(numeroNaTela);

botoes.forEach((btn) => {
    btn.addEventListener("click", (evento) => {
        const valor = evento.target.innerText

        console.log(valor);

        if (+valor >= 0 || valor === ".") {
            // console.log(valor);
            calc.mostraDigito(valor)
        } else {
            console.log("Não é um numero ou ponto");
        }
    })
})


operacoes()
// console.log(botoes);

