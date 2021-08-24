function calcularImc(peso, altura){
    return peso / (altura **2)
}

function classificar(imc){
    let categoria
    if(imc < 18.5){
        categoria = "abaixo do peso"
    } else if(imc < 25){
        categoria = "com peso ideal. <span class='azul'>Parabéns!</span>"
    } else if(imc < 30){
        categoria = "levemente acima do peso"
    } else if(imc < 35){
        categoria = "com obesidade grau I"
    } else if(imc < 40){
        categoria = "com obesidade grau II"
    } else {
        categoria = "com obesidade grau III. <span class='vermelho'>Cuidado!!</span>"
    }
    
    return categoria
}
                                            
function camposValidos(){
    return document.querySelector("form").reportValidity()
}

function exibirResultado(){
    const resultado = document.getElementById("resultado")
    const nome = document.getElementById("nome").value
    const peso = document.getElementById("peso").value.replace(",",".")
    const altura = document.getElementById("altura").value.replace(",",".")

            // replace - substituir
    if(camposValidos){
        const imc = calcularImc(peso, altura)
        const classificacao = classificar(imc)
        // toFixed - fixa as casas decimais 
        resultado.innerHTML = nome + " seu IMC é " + imc.toFixed(1) + " e você está " + classificacao
    }
    else{
        resultado.textContent = "Preencha os campos!"
    }
}

function capturaEnter(evento){
    if(evento.key === "Enter"){
        exibirResultado()
    }
}

// Eventos
document.getElementById("calcular").addEventListener('click' , exibirResultado)

document.querySelector("form").addEventListene("keypress" , capturaEnter)