function addProducts(){
  let productName =document.getElementById('product-name').value;
  let productQuantity =document.getElementById('quantity').value;
  console.log(productName,productQuantity);
  document.getElementById('product-name').value='';
  document.getElementById('quantity').value='';
  displayProduct(productName,productQuantity);
  saveProductToLocalStorage(productName,productQuantity);
}

const displayProduct=(name,quantity)=>{
  const productContainer=document.getElementById('product-container');
  const li=document.createElement('li');
  li.innerText=`${name} -- ${quantity}`;
  productContainer.appendChild(li);
}

function getStoredData(){
  let cart={};
  const product=getData=localStorage.getItem('cart');
  if(product){
    cart=JSON.parse(product);
  }
  return cart;
}

const saveProductToLocalStorage=(product,quantity)=>{
  const cart=getStoredData();
  cart[product]=quantity;
  localStorage.setItem('cart',JSON.stringify(cart));
}

const displayProductFromLocalStorage=()=>{
  const saveCart=getStoredData();
  for(const product in saveCart){
    const quantity=saveCart[product]
    displayProduct(product,quantity);
  }
}

displayProductFromLocalStorage();