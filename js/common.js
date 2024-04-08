function getValueById(id){
  const priceField=document.getElementById(id);
  const PriceStr=priceField.innerText;
  const currentPrice=parseFloat(PriceStr);
  return currentPrice;
}

function setValueById(id,currentSubTotal){
  const subTotalField=document.getElementById(id);
  subTotalField.innerHTML=currentSubTotal;
}

function calculateSubTotal(){
  const currentPhonePrice=getValueById('phone-price');
  const currentCasePrice=getValueById('case-price');

  const currentSubTotal=currentPhonePrice + currentCasePrice;
  setValueById('subtotal',currentSubTotal)

  const taxAmountStr=(currentSubTotal*0.1).toFixed(2);
  const taxAmount=parseFloat(taxAmountStr);
  setValueById('tax-amount', taxAmount);

  const finalTotal=currentSubTotal+taxAmount;
  setValueById('final-total', finalTotal);
}