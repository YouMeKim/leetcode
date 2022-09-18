function longestCommonPrefix(strs: string[]): string {
    var prefix: string = strs.shift();
    
    strs.forEach(function (value) {
        for (var i: number = 0; i < prefix.length; i++) {
            if(prefix.charAt(i) !== value.charAt(i)) {
                prefix = prefix.substring(0,i);
                break;
            }
        }
        if(prefix.length === 0) return "";
    });
    
    return prefix;
};