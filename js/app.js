  // all price sum :function 
   
function updatePrice(element,price){
  let eleCost = document.getElementById(element);
  eleCost.innerText = price;
  // best price 
  const totalPrice = document.getElementById("initial-price");
  const totalPriceText = totalPrice.innerText;
  const priceValue = parseInt(totalPriceText );

  // memory cost 
  const memory = document.getElementById('memory-cost');
  const memoryCostText = memory.innerText;
  const memoryCost = parseInt(memoryCostText);

  // storage cost 
  const storage = document.getElementById('storage-cost');
  const storageCostText = storage.innerText;
  const storageCost = parseInt(storageCostText);

  // delivery charge
  const delivery = document.getElementById('delivery-cost');
  const deliveryChargeText = delivery.innerText;
  const deliveryCharge = parseInt(deliveryChargeText);

  let totalExtraPriceWithoutPromo = priceValue + memoryCost + storageCost + deliveryCharge;
  
  // total amount without promo code
  const totalAmount = document.getElementById('total-cost-without-promo')
  totalAmount.innerText = totalExtraPriceWithoutPromo;
  // extra total with promo code
  const extraTotalAmount = document.getElementById('total-cost-with-promo')
  extraTotalAmount.innerText = totalAmount.innerText;
 }

// using promo code : function
document.getElementById('promo-code').addEventListener('click', function(){
  const promoCode = document.getElementById("promo-input")
  const promoInput = promoCode.value;
  
  const amount = document.getElementById('total-cost-without-promo')
  const extraTotal = document.getElementById('total-cost-with-promo')
  let totalAmountWithPromoCode = parseInt(amount.innerText);
  if(promoInput == 'stevekaku'){
    const discount = (totalAmountWithPromoCode * 0.2);
    extraTotal.innerText = totalAmountWithPromoCode - discount;
  }
  promoCode.value = '';
})

// added event handler all button 

document.getElementById('memory-8gb').addEventListener('click',function(){
    updatePrice('memory-cost',0);
})
document.getElementById('memory-16gb').addEventListener('click',function(){
    updatePrice('memory-cost',180);
})
document.getElementById('storage-256gb').addEventListener('click',function(){
    updatePrice('storage-cost', 0);
})
document.getElementById('storage-512gb').addEventListener('click',function(){
    updatePrice('storage-cost',100);
})
document.getElementById('storage-1tb').addEventListener('click',function(){
    updatePrice('storage-cost',180);
})
document.getElementById('delivery-free').addEventListener('click',function(){
    updatePrice('delivery-cost', 0);
})
document.getElementById('delivery-paid').addEventListener('click',function(){
    updatePrice('delivery-cost', 20);
})
