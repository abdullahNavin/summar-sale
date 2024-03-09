function cardAndTotalNum(elementId) {
    let cardPriceFild = document.getElementById(elementId);
    let cardPriceText = cardPriceFild.innerText;
    let cardpriceNum = parseFloat(cardPriceText);
    return cardpriceNum;
}
function setNum(idName, additionNum) {
    let getElement = document.getElementById(idName);
    getElement.innerText = additionNum;
}
function addProducet(producetName){
    let addSection = document.getElementById('addSection');
    let addSection2 = document.getElementById(producetName);
    let productText = addSection2.innerText
    let p = document.createElement('p');
    p.innerText = productText;
    p.classList.add('font-bold')
    addSection.appendChild(p);

}