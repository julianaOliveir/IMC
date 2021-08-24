const nome = document.getElementById('nome')
const altura = document.getElementById('altura')
const peso = document.getElementById('peso')
let resultado = document.getElementById('resultado')
const calcular = document.getElementById('calcular')


function calculo() {
    const imc =  parseFloat(peso.value) / parseFloat(altura.value) ** 2
    
    if(imc <= 18.5){
        resultado.textContent = nome.value + " seu imc é " + imc + ". Você está abaixo do peso."
    }
    else{
        if(imc > 18.5 && imc <= 24.9 ){
            resultado.textContent = nome.value + " seu imc é " + imc + ". Você está com peso ideal."
        }
        else{                               
            if(imc >= 25.0 && imc <= 29.9){
                resultado.textContent = nome.value + " seu imc é " + imc + ". Você está acima do peso."
            }
            else{
                if(imc >= 30.0 && imc <= 34.9){
                    resultado.textContent = nome.value + " seu imc é " + imc + ". Você está com obesidade grau I."
                }
                else{
                    if(imc >= 35.0 && imc <= 39.9){
                        resultado.textContent = nome.value + " seu imc é " + imc + ". Você está com obesidade grau II."
                    }
                    else{
                        resultado.textContent = nome.value + " seu imc é " + imc + ". Você está com obesidade grau III."
                    }
                }
            }   
        }
    }
}

calcular.addEventListener ('click', calculo)