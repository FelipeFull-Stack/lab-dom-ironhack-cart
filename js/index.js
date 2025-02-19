//capturar os elementos
// labelPrice preço a ser capturado para calculo
// inputQuantity quantidade a ser capturada para calculo
// subtotal onde eu quero exibir o calculo
// buttonRemove o que vai limpar os cases

const labelPrice = document.getElementById("labelPrice"); //capturei labelPrice
const inputQuantity = document.getElementById("inputQuantity");//capturei inputQuantity
const subtotal = document.getElementById("subtotal");//capturei onde vou exibir
const buttonRemove = document.getElementById("buttonRemove");

for (let i = 0; i < inputQuantity.clientHeight; i++) {
  inputQuantity[i].addEventListener("", () => {
    subtotal.innerText = product[i].children[0].innerText;

    subtotal.appendChild();
    
  })
}





// ITERATION 1


function updateSubtotal(product) {

  console.log('Calculating subtotal, yey!');

  //... your code goes here
}

function calculateAll() {

  buttonPrice.addEventListener("click", () => {
    subtotalPrice.innerText = buttonInput.value * priceSell.innerText;
  })

  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
