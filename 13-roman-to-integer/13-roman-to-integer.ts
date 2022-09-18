function romanToInt(s: string): number {
    var total: number = 0;

    var romanNumeralCombos = new Map<string, number>([
        ["IV", 4],
        ["IX", 9],
        ["XL", 40],
        ["XC", 90],
        ["CD", 400],
        ["CM", 900],
    ]);
    var romanNumerals = new Map<string, number>([
        ["I", 1],
        ["V", 5],
        ["X", 10],
        ["L", 50],
        ["C", 100],
        ["D", 500],
        ["M", 1000],
    ]);

    while(s.length > 0) {
        if(s.length >= 2 && romanNumeralCombos.get(s.substring(0,2))) {
            total += romanNumeralCombos.get(s.substring(0,2));
            s = s.substring(2);
        } else {
            total += romanNumerals.get(s.substring(0,1));
            s = s.substring(1);
        }
    }

    return total;
};