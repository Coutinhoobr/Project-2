const button = document.getElementById("buttonConverter");

const dolar = 5.2;

const convertValues = () => {
  const inputReais = document.getElementById("inputValue").value;
  const reaisValue = document.getElementById("reaisValue");
  const currencyValue = document.getElementById("currencyValue");

  reaisValue.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputReais);

  currencyValue.innerHTML = new Intl.NumberFormat("es-US", {
    style: "currency",
    currency: "USD",
  }).format(inputReais / dolar);
};

button.addEventListener("click", convertValues);
