const button = document.querySelector('.button')
const grau = document.querySelector('.grau')
const graus = document.querySelector('.grau1')
const temperatura = document.querySelector('.temperatura1')
const Ctemperatura = document.querySelector('.temperatura2')
const result = document.querySelector('#result')
const telaPrincipal = document.querySelector('#telaPrincipal')

button.onclick = () => {
    const select = document.querySelector('select').value
    const input = Number(document.querySelector('input').value)
    if (input === ''){
        alert("coloque um valor!")
    }
    else if(select === "Selecione a temperatura"){
        alert("selecione uma das temperaturas!")
    }
    else if (select === "Celsius"){
        ConverterCelsius()
        ExibirTela()
    }
    else if (select === "Fahrenheit"){
        ConverterFahrenheit()
        ExibirTela()
    }
    else if (select === "Kelvin"){
        ConverterKelvin ()
        ExibirTela()
    }   
    function ConverterCelsius(){
    result.innerHTML = `<h2 class="font">Resultado</h2>
    <div class="result1">
        <p class="temperatura1">Fahrenheit</p>
        <p class="grau">${(input * 1.8) + 32}</p>
    </div>
    <div class="result1">
        <p class="temperatura2">Kelvin</p>
        <p class="grau1">${(input) + 273.15}</p>
    </div>`
    }
    function ConverterFahrenheit(){
        result.innerHTML = `<h2 class="font">Resultado</h2>
        <div class="result1">
            <p class="temperatura1">Celsius</p>
            <p class="grau">${(input - 32) * 9/5}</p>
        </div>
        <div class="result1">
            <p class="temperatura2">Kelvin</p>
            <p class="grau1">${(input - 32) * 5/9 + 273.15}</p>
        </div>`
    }
    function ConverterKelvin(){
        result.innerHTML = `<h2 class="font">Resultado</h2>
        <div class="result1">
            <p class="temperatura1">Celsius</p>
            <p class="grau">${input - 273.15}</p>
        </div>
        <div class="result1">
            <p class="temperatura2">Kelvin</p>
            <p class="grau1">${(input - 273.15) * 1.8 + 32 }</p>
        </div>` 
    }
    function ExibirTela(){
        telaPrincipal.style.height = '500px'
    }
}