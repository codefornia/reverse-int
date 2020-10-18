module.exports = function reverse (n) {
    if(n<0){
        n *= -1;
    }
    let reverseNumber = 0;
    for(let i = n; i > 0; i=(i-i%10)/10) {
        reverseNumber += i%10;
        if(i-(i%10)>0) {
            reverseNumber *= 10;
        }
    }
    return reverseNumber;
}