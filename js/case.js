function updateCaseNumber(isIncrease){
  const caseNumberField=document.getElementById('case-number-field');
  const caseNumberStr=caseNumberField.value;
  const previousCaseNumber=parseInt(caseNumberStr);
  
  let newCaseNumber;
  if(isIncrease===true){
    newCaseNumber=previousCaseNumber+1;
  }
  else{
    newCaseNumber=previousCaseNumber-1
  }

  caseNumberField.value=newCaseNumber;
  
  if(newCaseNumber<0){
    caseNumberField.value=0;
  }
  return newCaseNumber;
}

function updatePrice(caseNumber){
  const priceField=document.getElementById('case-price');
  const newPrice=59*caseNumber;
  priceField.innerHTML = newPrice;
  if(newPrice<0){
    priceField.innerHTML = 0;
  }
}

document.getElementById('btn-case-plus').addEventListener("click", function() {  
  const newCaseNumber=updateCaseNumber(true);
  updatePrice(newCaseNumber);
  calculateSubTotal();
})

document.getElementById('btn-case-minus').addEventListener('click', function(){
  const newCaseNumber=updateCaseNumber(false);
  updatePrice(newCaseNumber);
  calculateSubTotal();  
})