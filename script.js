const weight = document.querySelector(".peso")
const height = document.querySelector(".altura")
const calculateImc = document.querySelector(".calcular-imc")
const result = document.querySelector(".result")
const weightCategory = document.querySelector(".categoria-peso")


function ShowScreen() {
    calculateAndValidateImc()

}


function calculateAndValidateImc() {
    let resultImc = calcularImc(weight.value,height.value).toFixed(2)
        if(weight.value === "" || height.value === "") {
            alert("Digite um valor!")
        } else {
            result.innerHTML = `O calculo do IMC é ${resultImc}`
        }

            if(resultImc < 18.5) {
                weightCategory.innerHTML = "Magreza"
            }
            
            else if(resultImc === 18.5 || resultImc <= 24.9) {
                weightCategory.innerHTML = "normal"
            }

            else if(resultImc === 25.0 || resultImc <= 29.9) {
                weightCategory.innerHTML = "Sobrepeso"
            }

            else if(resultImc === 30.0 || resultImc <= 34.9) {
                weightCategory.innerHTML = "Obesidade Grau I"
            }

            else if(resultImc === 35.0 || resultImc <= 39.9) {
                weightCategory.innerHTML = "Obesidade Grau II"
            }

            else {
                weightCategory.innerHTML = "Obesidade Grau III"
            }



}


function calcularImc(peso, altura){
    return peso / (altura * altura)
}




calculateImc.addEventListener("click", ShowScreen)

