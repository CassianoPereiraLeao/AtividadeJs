import sleep from "./utils.js";

window.clearDiv = (id) => {
    let div = document.querySelector(id);
    div.innerHTML = "";
}

// está em ordem

window.positiveOrNegative = () => {
    let num = document.getElementById("ex-1").value;
    if (num.trim() === "") {
        alert("Por favor digite algo no ex-1");
        return;
    }
    if(num > 0) {
        console.log("O número é positivo");
        return;
    } else if (num < 0) {
        console.log("O número é negativo");
        return;
    } else if (isNaN(num)) {
        console.log("Por favor digite um número");
        return;
    }

    console.log("O número é igual a zero");
}

window.maioridade = () => {
    let idade = document.getElementById("ex-2").value;
    if (idade === "") {
        alert("Por favor digite algo no ex-2");
        return;
    }

    let result = "";
    if (idade >= 18) {
        result = "<p>Maior de idade</p>";
        document.getElementById("resultIdade").innerHTML = result;
        return;
    }
    result = "<p>Menor de idade</p>";
    document.getElementById("resultIdade").innerHTML = result;
    return;
}

window.contagemProgressiva = async () => {
    let button = document.getElementById("buttonContagemProgressiva");
    button.disabled = true;
    let div = document.getElementById("contagemProgressiva");
    for(let i = 1; i < 11; i++) {
        div.innerHTML += `<p>${i}</p>`;
        await sleep(500);
    }
    button.disabled = false;
    div.innerHTML += `<button onclick="clearDiv('#contagemProgressiva')" class="clear">Limpar</button>`;
}

window.tabuada = () => {
    let value = document.getElementById("ex-4").value;
    if (value === "") {
        alert("Por favor digite algo no ex-4");
        return;
    }
    let div = document.getElementById("resultTabuada");
    div.innerHTML = ""; 
    for(let i = 0; i < 11; i++) {
        div.innerHTML += `<p>${value} x ${i} = ${value * i}</p>`;
    }
    div.innerHTML += `<button onclick="clearDiv('#resultTabuada')" class="clear">Limpar</button>`;
}

window.contagemRegressiva = async () => {
    let div = document.getElementById("contagemRegressiva");
    div.innerHTML = ""; 
    let contagem = 10;
    while (contagem > 0) {
        div.innerHTML += `<p>${contagem}</p>`;
        await sleep(500);
        contagem--;
    }
}

window.senhaCorreta = () => {
    let senha;
    let tentativas = 0;
    do {
        tentativas++;
        if (tentativas > 1) {
            console.log("Tente novamente");
        }
        senha = prompt("Digite sua senha");
    } while (senha != "1234")
    console.log(`Você acertou a senha em ${tentativas} tentativas`);
}

function soma(numero1, numero2) {
    let div = document.getElementById("resultSoma");
    let result = numero1 + numero2;
    return div.innerHTML = `${numero1} + ${numero2} = ${result}`;
}

window.showSoma = () => {
    let num1 = prompt("Digite o primeiro número");
    if (num1 === null || num1.trim() === "") {
        alert("O número não pode ser vazio");
        return;
    }

    num1 = Number(num1);

    let num2 = prompt("Digite o segundo número");
    if (num2 === null || num2.trim() === "") {
        alert("O número não pode ser vazio");
        return;
    }

    num2 = Number(num2);

    soma(num1, num2);
}

window.ehPar = () => {
    let num = document.getElementById("ex-8").value;
    let div = document.getElementById("resultPar");
    div .innerHTML = "";
    if (num.trim() === "") {
        alert("O campo não pode ser vazio");
        return;
    }

    if (num % 2 === 0) {
        return div.innerHTML = `O número ${num} é par`;
    }
    return div.innerHTML = `O número ${num} é ímpar`;
}

function somaRecursiva(num){
    if (num === 1) {
        return num;
    }
    return num + somaRecursiva(num - 1);
}

window.somaAteNum = () => {
    let num = document.getElementById("ex-9").value;
    let div = document.getElementById("resultSomaAteNum");
    div.innerHTML = "";
    if (num.trim() === "") {
        alert("O campo não pode ser vazio");
        return;
    }
    let soma = somaRecursiva(Number(num));
    div.innerHTML = `O resultado da soma é: ${soma}`;
}

window.primo = () => {
    let num = document.getElementById("ex-10").value;
    let div = document.getElementById("resultPrimo");
    div.innerHTML = "";
    for(let i = 2; i < num; i++) {
        if(num % i === 0) {
            return div.innerHTML = `O número ${num} não é primo`;
        }
    }
    return div.innerHTML = `O número ${num} é primo`;
}
