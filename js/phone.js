
function updatePhoneUnit(isIncrease){
  const phoneUnitField=document.getElementById('phone-unit-field');
  const phoneUnitStr=phoneUnitField.value;
  const phoneUnitNumber=parseInt(phoneUnitStr);

  let newPhoneUnitNumber;
  if(isIncrease===true){
    newPhoneUnitNumber=phoneUnitNumber+1;
  }
  else{
    newPhoneUnitNumber=phoneUnitNumber-1;
  }
  phoneUnitField.value=newPhoneUnitNumber;

  if(newPhoneUnitNumber<0){
    phoneUnitField.value=0;
  } 

  return newPhoneUnitNumber;
}

function updatePhoneTotalPrice(phoneUnit){
  const priceField=document.getElementById('phone-price');
  const totalPrice=phoneUnit * 1219;
  priceField.innerHTML=totalPrice;
  if(totalPrice<=0) {
    priceField.innerHTML=0;
  }
}

document.getElementById('btn-phone-plus').addEventListener('click', function(){
  const phoneUnit=updatePhoneUnit(true);
  updatePhoneTotalPrice(phoneUnit);
  calculateSubTotal();
})

document.getElementById('btn-phone-minus').addEventListener('click', function(){
  const phoneUnit=updatePhoneUnit(false);
  updatePhoneTotalPrice(phoneUnit);
  calculateSubTotal();
})