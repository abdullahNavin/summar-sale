document.getElementById('applyBtn').addEventListener('click',function(){
    let totalpriceElement = cardAndTotalNum('totalPrice');
    let discountElement = cardAndTotalNum('discountE');
    let totalElement = cardAndTotalNum('totalE');

    let discountValue = totalpriceElement * 0.2;
    let discountedTotal = totalpriceElement - discountValue;
    
    setNum('totalE', discountedTotal);
   
    // console.log(discount2);

    setNum('discountE', discountValue);
    
})
