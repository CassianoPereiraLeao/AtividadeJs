import sleep from "./utils.js";

window.clearDiv = (id) => {
    let div = document.querySelector(id);
    div.innerHTML = "";
}

// está em ordem

window.positiveOrNegative = () => {
    let num = document.getElementById("ex-1").value;
    if (num === "") {
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
    let div = document.getElementById("contagemProgressiva");
    div.innerHTML = "";   
    for(let i = 1; i < 11; i++) {
        div.innerHTML += `<p>${i}</p>`;
        await sleep(500);
    }
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
