function numsSameConsecDiff(targetLength: number, diff: number): number[] {
    var answerArray: Array<number> = [1,2,3,4,5,6,7,8,9];
    
    return addNewDigit(answerArray, targetLength, diff);
};

function addNewDigit(currentDigits: Array<number>, targetLength: number, diff: number) {
    var newDigits: Array<number> = [];
    
    currentDigits.forEach(function (value) {
        let lastDigit = value % 10;
        if(lastDigit + diff < 10) {
            newDigits.push((value * 10) + lastDigit + diff);
        }
        if (lastDigit - diff >= 0 && diff !== 0) {
            newDigits.push((value * 10) + lastDigit - diff);
        }
    });
    
    var currentDigitsLength = newDigits[0].toString().length;
    if(currentDigitsLength !== targetLength) {
        newDigits = addNewDigit(newDigits, targetLength, diff);
    }
    return newDigits;
}