// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    let sum = currency;
    let obj = {};
    let i = 0;
    let arrLet = ['H', 'Q', 'D', 'N', 'P'];
    let arrMon = [50, 25, 10, 5, 1];
    if(sum > 10000) {
        obj.error = "You are rich, my friend! We don't have so much coins for exchange";
        return obj;
    } else if(sum <= 0){
        return obj;
    } else {
        makeCount(sum, i);
        return obj;
    }
    
    function makeCount(sum, i) {
        if (sum >= arrMon[i]) {
            let x = Math.floor(sum/arrMon[i]);
            sum = sum%arrMon[i];
            obj[arrLet[i]] = x;
            if(arrLet[i] === 'P') {
                return;
            }; 
            i++;
            makeCount(sum,i);
        } else if(sum === 0) {
            return;
        } else { 
            i++;
            makeCount(sum,i);
        };
    }
}
