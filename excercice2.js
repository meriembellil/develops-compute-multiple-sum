let prices = [1000,1000,1000,40000,1000,6000];
let discountPoucent = 10;

console.log(calculateTotalPrice(prices,discountPoucent));

function calculateTotalPrice(prices , discountPoucent) {
    let max = prices[0];
    let sommePrice = 0;
    for(let i = 0 ; i<= prices.length; i++){
        if(prices[i]>max){
            max = prices[i];
            sommePrice = sommePrice + prices[i];
        }
    }



    priceTotal =(sommePrice-max) + (max - ((max * discountPoucent) / 100));

    return round(priceTotal);

}