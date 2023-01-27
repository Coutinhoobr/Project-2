const button = document.getElementById("buttonConverter");
const select = document.getElementById("selectValue");


convertValues =  async () => {
  const inputReais = document.getElementById("inputValue").value;
  const reaisValue = document.getElementById("reaisValue");
  const currencyValue = document.getElementById("currencyValue");

  const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(Response => Response.json())

  const dolar = data.USDBRL.high
  const euro = data.EURBRL.high
  const bitCoin = data.BTCBRL.high *1000
  


  reaisValue.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputReais);

  if (select.value === "US$ Dolar Americano") {
    currencyValue.innerHTML = new Intl.NumberFormat("es-US", {
      style: "currency",
      currency: "USD",
    }).format(inputReais / dolar);
  }

  if (select.value === "€ Euro") {
    currencyValue.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputReais / euro);
  }

  if (select.value === "₿ BitCoin") {
    currencyValue.innerHTML = new Intl.NumberFormat("es-US", {
        maximumFractionDigits:6,
        style:"currency",
        currency:"BTC",
    
    
    }).format(inputReais / bitCoin)
  }
};

selectValue = () => {
  const currencyName = document.getElementById("currencyName");
  const currencyImg = document.getElementById("currencyImg");

  if (select.value === "€ Euro") {
    currencyName.innerHTML = "€ Euro";
    currencyImg.src = "./assets/euro.png";
  }

  if (select.value === "₿ BitCoin") {
    currencyName.innerHTML = "₿ BitCoin";
    currencyImg.src = "./assets/bitcoin.png";
  }
  if (select.value === "US$ Dolar Americano") {
    currencyName.innerHTML = "US$ Dolar Americano";
    currencyImg.src = "./assets/estados-unidos.png";
  }
  convertValues();
};

button.addEventListener("click", convertValues)
select.addEventListener("change", selectValue)