const button = document.getElementById('buttonConverter')

const dolar = 5.2

const convertValues = () =>{
    const inputReais = document.getElementById('inputValue').value
    const reaisValue = document.getElementById('reaisValue')
    const currencyValue = document.getElementById('currencyValue')

    reaisValue.innerHTML=inputReais
    currencyValue.innerHTML = inputReais/ dolar
   
}

button.addEventListener('click',convertValues)




